Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :show, :create, :update]
    resource :session, only: [ :create, :destroy]
    resources :posts, except: [:new, :edit]
    resources :comments, except: [:new, :edit]
    resources :friends, only: [:index, :create, :update, :destroy]
    resources :likes, only: [:index, :show, :create, :destroy]

  end

end
