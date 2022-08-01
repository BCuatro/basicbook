class Api::FriendsController < ApplicationController

    def index
        @friends = Friend.all
        render :index
    end
    
    def create
        @friend = Friend.new(friend_params)
        
        if @friend.save
          render :show
        else
          render json: @friend.errors.full_messages, status: 422
        end
    end

    def update
        @friend = Friend.find(params[:id])
        # if (@friend.update(friend_params)) && current_user.id == author_id
        if @friend.update(friend_params)
          render :show
        else
          render json: @friend.errors.full_messages, status: 422
        end
    end

    def destroy
        @friend = Friend.find_by(id: params[:id])
        # if @friend.destroy && current_user.id == author_id
        if @friend.destroy
            render :show
        else
            render json: @friend.errors.full_messages, status: 422
        end
    end

    def friend_params
        params.require(:friend).permit(:user_id, :friend_id, :status)
    end

end
