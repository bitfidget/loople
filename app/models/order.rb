class Order < ActiveRecord::Base
  attr_accessible :track_id, :loop_id, :order
  belongs_to :loop
  belongs_to :track
end