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

  def self.format_data(loops)
    # create a new hash for ALL current user loops to go into
    loops_to_load = Array.new
    # iterate through all of the loops and make new hashes
    loops.each do |loop|
      # set up the hash for this loop
      loop_detail = Hash.new
      loop_detail['id'] = loop.id
      # check for loop name - if there isn't one, use the ID instead
      if loop.name.blank?
        loop_detail['name'] = loop.id
      else 
        loop_detail['name'] = loop.name
      end
        if loop.keystrokes.length >= 1
          # start to populate the keystrokes for this hash/loop
          loop_detail['keyStrokes'] = {}
          loop.keystrokes.each do |key_stroke| #Poor naming here;
            loop_detail['keyStrokes'][key_stroke.time.to_i] ||= []
            loop_detail['keyStrokes'][key_stroke.time.to_i] << key_stroke.key
          end # end of iteration through keystrokes
        end
      loops_to_load << loop_detail
    end # end of iteration through loops
    loops_to_load
  end
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
