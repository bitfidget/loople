class PagesController < ApplicationController

  # KH use a separate page for the looply page only 
  
  layout "application", :except => :loople
  layout "loople", :only => :loople

  def loople

  end

  def anne
  end

  def charlie
  end

  def kriss
  end

end
