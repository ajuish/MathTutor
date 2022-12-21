class UsersController < ApplicationController

    def create
        user = User.create(user_params)
        if user.valid?
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: [error: user.errors.full_messages], status: :unprocessable_entity
        end
    end

    private

    def authorize
        render json: {error: "Not authorized"}, status: :unauthorized unless session.include? :user_id
    end

    def user_params
        params.permit(:email, :password, :password_confirmation)
    end
end
