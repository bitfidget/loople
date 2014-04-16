module ApplicationHelper

  def usernav
    links = ''
    if @current_user
      links +=
        "<li>Hi #{@current_user.username}</li>
        <li>#{link_to('sign out', login_path, :method => :delete, :confirm => 'Are you sure you wish to log out?')}</li>"
    elsif @current_user && @current_user.admin
      links +=
        "<li>YOU HAVE ADMIN RIGHTS</li>"
    end
    links
  end

end

