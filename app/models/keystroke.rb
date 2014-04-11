class Keystroke < ActiveRecord::Base
  attr_accessible :loop_id, :key, :time
  belongs_to :loop
end