class AuthController < ApplicationController

  def create
    user = User.find_by(email: params[:username])

    if user && user.authenticate(params[:password])
      render json: {email: user.email, id: user.id}
    else
      render json: {error: 'user is invalid'}, status: 401
    end
  end

  def show
  end

end
