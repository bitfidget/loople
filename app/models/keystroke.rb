# == Schema Information
#
# Table name: keystrokes
#
#  id      :integer          not null, primary key
#  loop_id :integer
#  key     :string(255)
#  time    :float
#

class Keystroke < ActiveRecord::Base
  attr_accessible :loop_id, :key, :time
  belongs_to :loop
end
