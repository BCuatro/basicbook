class Api::SessionController < ApplicationController

    before_action :ensure_logged_in, only:[:destroy]

    def create
        @user = User.find_by_credentials(
            params[:user][:username],
            params[:user][:password]
        )

        if @user
            login!(@user)
            render "api/users/show"
        else
            flash.now[:errors] = ["Invalid credentials"], status 422
            render :new
        end
    end

    def destroy
        logout!
        render.json {successful}
    end
end
