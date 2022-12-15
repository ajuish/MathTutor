class TopicsController < ApplicationController
    before_action :find_topic, only: [:show]

    def index
        render json: Topic.all, status: :ok
    end

    def show
        render json: @topic, status: :ok
    end

    private

    def find_topic
        @topic = Topic.find(params[:id])
    end
end
