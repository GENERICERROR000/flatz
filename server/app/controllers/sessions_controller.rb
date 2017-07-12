class SessionsController < ApplicationController

  def create
    auth = request.env["onmiauth.auth"]
    session[:onmiauth] = auth.except('extra')
    user = User.sign_in_from_omniauth(auth)
    session[:user_id] = user.id
  end

  def destroy
    session[:user_id] = nil
    session[:omniauth] = nil
  end

end
