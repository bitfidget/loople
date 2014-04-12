User.destroy_all
Loop.destroy_all
Track.destroy_all
Keystroke.destroy_all

# KH create a user for all of us as admins and one user who is NOT admin

u1 = User.create(:username => 'Kriss', :email => "iam@test.com", :image => "http://upload.wikimedia.org/wikipedia/commons/b/b7/Big_smile.png", :password => "cantguessthis", :password_confirmation => "cantguessthis")
u2 = User.create(:username => 'Charlie', :email => "iam@test.com", :image => "http://www.hivehealthmedia.com/wp-content/uploads/2012/01/smile.jpg", :password => "cantguessthis", :password_confirmation => "cantguessthis")
u3 = User.create(:username => 'Anne', :email => "iam@test.com", :image => "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQtStNkoHTbztZze6Zb3g6mPRIReIgTafUHEm3oDJNCpmlpyeGW", :password => "cantguessthis", :password_confirmation => "cantguessthis")
u3 = User.create(:username => 'Test', :email => "iam@test.com", :image => "http://www.clker.com/cliparts/b/3/7/9/1206573862448734250Arnoud999_Right_or_wrong_3.svg.med.png", :password => "cantguessthis", :password_confirmation => "cantguessthis")

# KH make us all admins

u1.admin = true
u2.admin = true
u3.admin = true

u1.save
u2.save
u3.save

# KH create a test loop :user_id, :name, :colour

l1 = Loop.create(:name => 'TestLoop1', :colour => '#FF6600')

# KH create a test keystroke :loop_id, :key, :time

k1 = Keystroke.new(:key => 'q', :time => 1.0)
k2 = Keystroke.new(:key => 'w', :time => 0.51)

# KH assign keys to loop and loop to user1

l1.keystrokes << k1 << k2
u1.loops << l1

# KH I have no idea how to seed a track with it's realtionships so I'm leaving that for now... we can deal with it later right?
# KH that also means I'm not creating any orders yet either...