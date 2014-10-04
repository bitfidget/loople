class LoopsController < ApplicationController

  def create
    # KH create and save the new loop

    # loop = Loop.new(params[:loop])
    # loop.user = @current_user
    # loop.save
    loop = @current_user.loops.create(params[:loop])

    #create the loopKeyTimes
    #Do I need to check if the loop is saved before creating the loopKeysTimes and should the loopKeysTimes stuff be in the model?;
    #send a flash message saying the loop could not be saved;
    # end

    keysTimes = params[:loopKeysTimes]
    # this is confusing because we are using TIME as the key and KEY as the value, but stick with us, it'll be worth it
    # each time can have multiple keys, so iterate each time value, and save EACh key as an object
    #What is this doing?
    ##This code is not longer needed - updated format means when you load a saved loop it only loads the keyStrokes into the loopKeysTimes hash; 
    # if keysTimes['name']
    #   keysTimes.delete('name')
    # end
    # if keysTimes['id'];
    #   keysTimes.delete('id')
    # end

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
    loops_to_load = Loop.format_data(loops)
    # let's ajax/json this shiz
    respond_to do |format|
      format.html
      format.json {render :json => loops_to_load}
    end   
    
  end

  def index
    # not currently used but may be handy for admin
    @loops = Loop.all
  end

  def show
    # not currently used but may be handy for admin
    @loop = Loop.find(params[:id])
  end

  def update
    binding.pry
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
