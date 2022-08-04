class Api::UsersController < ApplicationController

    def index
        @users =User.all
    end
    
    def show
        
        @user = User.find(params[:id])
        if @user
            render :show
        else
            render json:["user not found"], status: 404
        end
    end
    


    def create
        @user = User.new(user_params)
        if @user.save
            login!(@user)
            render "api/users/show"
        else
            render json: @user.errors.full_messages, status: 401
        end

    end

    
    def update
        @user = User.find_by(id: params[:id])
        if @user.update(update_params) && @user.id == current_user.id
          render :show
        else
            render json: @user.errors.full_messages, status: 401
        end
    end
    

    def user_params
        params.require(:user).permit(:username, :password, :first_name, :last_name, :email)
    end

    def update_params
        params.require(:user).permit(:username, :password, :first_name, :last_name, :email, :location,:bio,:profile_photo, :cover_photo)
    end
end
