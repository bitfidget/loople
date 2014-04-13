class LoopsController < ApplicationController
  def new
    # KH first save the loop name annd colour
    loop = Loop.new
    loop.name = (params[:name])
    loop.colour = (params[:colour])
    loop.save
    # kh then save the loops keystrokes
    keyStrokes = (params[:keys])
    keys = keyStrokes.split(',').in_groups(2)[0]
    times = keyStrokes.split(',').in_groups(2)[1]
    i = 0
    while i < keys.length do
      keyStroke = Keystroke.new
      keyStroke.key = keys[i]
      keyStroke.time = times[i]
      keyStroke.loop_id = loop.id
      keyStroke.save
      i += 1
    end
    redirect_to loop
  end

  def create
    loop = Loop.new(params[:loop])
    if loop.save
      render :json => loop.to_json
    else
      render :json => false
    end
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
  end
end
