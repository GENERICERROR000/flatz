Rails.application.routes.draw do

  get 'auth/:provider/callback', to: 'sessions#create'
  delete 'sign_out', to: 'sessions#destory', as: 'sign_out'

  namespace :api do
    namespace :v1 do
      # TODO: Add Routes
      # EXAMPLE: resources :nodes, except: [:index, :new, :edit, :update]
    end
  end
end
