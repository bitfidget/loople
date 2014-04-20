module ApplicationHelper
  def usernav
    links = ''
    if @current_user
      greeting = "sign out #{@current_user.username}"
      links +=
        "<li>#{link_to(greeting, login_path, :method => :delete, :confirm => 'Are you sure you wish to log out?')}</li>"
    elsif @current_user && @current_user.admin
      links +=
        "<li>YOU HAVE ADMIN RIGHTS</li>"
    end
    links
  end
end

