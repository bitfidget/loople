# == Schema Information
#
# Table name: loops
#
#  id         :integer          not null, primary key
#  name       :string(255)
#  colour     :string(255)
#  user_id    :integer
#  created_at :datetime
#  updated_at :datetime
#

class Loop < ActiveRecord::Base
  attr_accessible :user_id, :name, :colour
  belongs_to :user
  has_many :orders
  has_many :tracks, :through => :orders
  has_many :keystrokes
end

# so we were doing the associations incorrectly - we needed more associations!
# both loops and tracks both need to have_many orders
# I learned this by stealing someone elses code and swapping out their values with ours as below:

# class Loop < ActiveRecord::Base
#   has_many :orders
#   has_many :tracks, :through => :orders
# end

# class Order < ActiveRecord::Base
#   belongs_to :loop
#   belongs_to :track
# end

# class Track < ActiveRecord::Base
#   has_many :orders
# end

# test association by doing the following in rails console:

# l = Loop.new
# l.tracks.build
# l.orders
# => []
