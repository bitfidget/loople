class Loop < ActiveRecord::Base
  attr_accessible :user_id, :name, :colour
  belongs_to :user
  has_many :tracks, through :loops_tracks
  has_many :keystrokes
end