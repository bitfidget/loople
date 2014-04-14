class PagesController < ApplicationController

  # KH use a separate page for the looply page only 
  layout "loople", :only => :loople
  layout "application", :except => :loople

  def loople
    render layout: "loople"
  end

  def anne
  end

  def charlie
  end

  def kriss
  end

end
