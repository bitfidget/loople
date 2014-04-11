class Track < ActiveRecord::Base
  attr_accessible :loop_id, :track_id, :order
  has_many :loops, through :loops_tracks
end