class ProblemsController < ApplicationController
    def index
        render json: Problem.all, status: :ok
    end
end
