class Api::PostsController < ApplicationController
    # before_action :ensure_logged_in
    def index
        @posts = Post.all
        render :index
    end

    def show
        @post = Post.find(params[:id])
        render :show
    end

    def create
        @post = Post.new(post_params)
       
        @post.profile_id =31
        # debugger
        if @post.save
          render :show
        else
          render json: @post.errors.full_messages, status: 422
        end
    end

    def update
        @post = Post.find(params[:id])
        if (@post.update(post.params)) && current_user.id == author_id
          redirect_to show
        else
          render json: @post.errors.full_messages, status: 422
        end
    end

    def destroy
        @post = Post.find_by(id: params[:id])
        if @post.destroy && current_user.id == author_id
            render :show
        else
            render json: @post.errors.full_messages, status: 422
        end
    end

    def post_params
        params.require(:post).permit(:body, :author_id)
    end
    
    
    
    
end
