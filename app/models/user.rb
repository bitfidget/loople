# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string(255)
#  email           :text
#  image           :text
#  created_at      :datetime
#  updated_at      :datetime
#  password_digest :string(255)
#  admin           :boolean          default(FALSE)
#

class User < ActiveRecord::Base
  attr_accessible :username, :email, :image, :password, :password_confirmation
  
  #form validation
  validates :username, :presence => true, :uniqueness => true
  validates :email, :presence => true
  has_secure_password

  has_many :loops
end
