class AuthController < ApplicationController

  def create
    user = User.find_by(email: params[:username])
    if user && user.authenticate(params[:password])
      render json: {email: user.email, id: user.id, token: issue_token({id: user.id})}
    else
      render json: {error: 'user is invalid'}, status: 401
    end
  end

  def show
    # token = request.headers['Authorization']
    token = request.headers['Authorization']
    begin
      decoded_token = JWT.decode(token, ENV['secret'], true, { :algorithm => 'HS256' }).first
    rescue JWT::DecodeError
      decoded_token = [{}]
    end
    user = User.find_by(id: decoded_token['id'])
    if user
      render json: {email: user.email, id: user.id}
    else
      render json: {error: 'Invalid token'}, status: 401
    end
  end

end
