class UsersController < ApplicationController

    def index
        render json: User.all, status: :ok
    end

    def show
        user = User.find(params[:id])
        render json: user, status: :ok
    end

    def create
        user = User.create(user_params)
        if user.valid?
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: [error: user.errors.full_messages], status: :unprocessable_entity
        end
    end

    def update
        user = User.find(params[:id])
        user.update(user_params)
        render json: user, status: :accepted
    end

    private

    def authorize
        render json: {error: "Not authorized"}, status: :unauthorized unless session.include? :user_id
    end

    def user_params
        params.permit(:email, :password, :password_confirmation, :addition => [], :subtraction => [], :multiplication => [], :division => [])
    end
end
