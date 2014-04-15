class LoopsController < ApplicationController

  def create
    # KH create and save the new loop
    loop = Loop.new(params[:loop])
    loop.save
    # KH pull the two keys
    keys = params[:loopKeys]
    times = params[:loopTimes]
    # KH delete the empty values (cross fingers that they match up)
    keys.delete('')
    times.delete('')
    # KH save the keys as keyStrokes in the DB!
    i = 0
    while i < keys.length do
      keyStroke = Keystroke.new
      keyStroke.key = keys[i]
      keyStroke.time = times[i]
      keyStroke.loop_id = loop.id
      keyStroke.save
      i += 1
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
