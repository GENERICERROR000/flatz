Rails.application.routes.draw do
  root 'home#login'

  get 'home/profile'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do
    namespace :v1 do
      # TODO: Add Routes
      # EXAMPLE: resources :nodes, except: [:index, :new, :edit, :update]
    end
  end
end
