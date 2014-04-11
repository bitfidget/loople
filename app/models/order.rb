class Order < ActiveRecord::Base
  attr_accessible :track_id, :loop_id, :order
  belongs_to :track
  belongs_to :loop
end