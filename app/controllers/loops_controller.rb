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

  def edit

  end

  def index
    @loops = Loop.all
  end

  def show
    @loop = Loop.find(params[:id])
  end

  def update
  end

  def destroy
    loop = Loop.find params[:id]
    loop.destroy
    redirect_to loops_path, :notice => "loop deleted"
  end
end
