class Api::V1::AuthController < ApplicationController
#   def show
#     render json: {id: current_user.id, email: current_user.email}
#   end
#
#   def create
#     user = User.where(email: params[:email]).first
#     if user && user.valid_password?(params[:password])
#       render json: {
#         email: user.email,
#         jwt: JWT.encode({user_id: user.id}, ENV['JWT_SECRET'], ENV['JWT_ALGORITHM'])
#       },
#       status: :created
#     else
#       head(:unauthorized)
#     end
#   end
#   def destroy
#   end
# end
# def create
#   user = User.find_by(username: params[:username])
#   if user.present? && user.authenticate(params[:password])
#     render json: {
#       id: user.id,
#       username: user.username,
#       jwt: JWT.encode({user_id: user.id}, ENV['JWT_SECRET'], ENV['JWT_ALGORITHM'])
#     }
#   else
#     render json: {error: 'Worng Username/Password'}, status: 404
#   end
end
