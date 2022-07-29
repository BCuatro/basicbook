class ApplicationController < ActionController::Base

    helper_method :logged_in?
    helper_method :current_user
    skip_before_action :verify_authenticity_token

    private 

    def current_user
        return nil unless session[:session_token]
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def ensure_logged_in
        render json: ['You must be logged in'], status: 401  unless logged_in?
    end

    def logged_in?
        !!current_user
    end

    def login!(user)
        session[:session_token] = user.reset_session_token!
    end

    def logout!
        @current_user.reset_session_token!
        session[:session_token] = nil
        @current_user = nil
    end
end
