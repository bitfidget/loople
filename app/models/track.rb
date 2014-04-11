class Track < ActiveRecord::Base
  attr_accessible :name, :colour
  has_many :orders
  has_many :loops, :through => :orders
end