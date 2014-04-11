class User < ActiveRecord::Base
  attr_accessible :username, :email, :image
  has_many :loops
end