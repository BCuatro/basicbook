class Api::UsersController < ApplicationController

    def index
        @users =User.all
    end
    
    def show
        @user = User.find(params[:id])
        if @user
            render json: @user
        else
            flash.now[:errors] = ["user not found"]
        end
    end
    


    def create
        @user = User.new(user_params)
        if @user.save
            login!(@user)
            render :show
        else
            render json: @user.errors.full_messages
        end

    end

    
    def update
        @user = User.find_by(id: params[:id])
        if @user.update(user_params)
          flash[:success] = "Object was successfully updated"
          render json: :show
        else
          flash[:error] = "Something went wrong"
        end
    end
    

    def user_params
        params.require(:user).permit(:username, :password, :first_name, :last_name, :email)
    end
end
