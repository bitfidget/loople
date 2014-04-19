class LoopsController < ApplicationController

  def create
    # KH create and save the new loop
    loop = Loop.new(params[:loop])
    loop.user = @current_user
    loop.save

    keysTimes = params[:loopKeysTimes]
    # this is confusing because we are using TIME as the key and KEY as the value, but stick with us, it'll be worth it
    # each time can have multiple keys, so iterate each time value, and save EACh key as an object
    keysTimes.each do |time, keys|
      keys.each do |key|
        keyStroke = Keystroke.new
        keyStroke.key = key
        keyStroke.time = time
        keyStroke.loop_id = loop.id
        keyStroke.save
      end
    end
    if loop.save
      render :json => loop.to_json
    else
      render :json => false
    end
    # KH Bob is your uncle
  end

  def load
    loops = Loop.where(:user => @current_user)
    # create a new hash for ALL current user loops to go into
    loops_to_load = Array.new
    # iterate through all of the loops and make new hashes
    loops.each do |loop|
      # set up the hash for this loop
      loop_detail = Hash.new
      loop_detail['id'] = loop.id
      # check for loop name - if there isn't one, use the ID instead
      if loop.name.blank?
        loop_detail['name'] = loop.id
      else 
        loop_detail['name'] = loop.name
      end
      # add modified for on the fly saving
      loop_detail['modified'] = false
      # start to populate the keystrokes for this hash/loop
      loop.keystrokes.each do |key|
        # check to see if we have anything at this time already and if not - create new hash
        if !loop_detail[key.time]
          loop_detail[key.time] = Array.new
        end
        # append the hashes with all the keys
        loop_detail[key.time] << key.key
      end # end of iteration through keystrokes
      loops_to_load << loop_detail
    end # end of iteration through loops

    # let's ajax/json this shiz
    respond_to do |format|
      format.html
      format.json {render :json => loops_to_load}
    end   
    
  end

  def index
    @loops = Loop.all
  end

  def show
    @loop = Loop.find(params[:id])
  end

  def update
    loop = Loop.find(params[:id])
    loop.update_attributes(params)
    if loop.save
      render :json => loop.to_json
    else
      render :json => false
    end
  end

  def destroy
    loop = Loop.find params[:id]
    if loop.destroy
      render :json => true
    else
      render :json => false
    end
  end
end
