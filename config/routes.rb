Rails.application.routes.draw do
  resources :problems
  resources :topics
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  # session routes
  post '/login', to: "sessions#create"
  delete '/logout', to: "sessions#destroy"

  # user routes
  post '/signup', to: "users#create"
  resources :users, only: [:index, :show, :update]
  
  # topic routes
  resources :topics, only: [:index, :show]

  # problem routes
  resources :problems, only: [:index]

  # deployment
  get '*path',
  to: 'fallback#index',
  constraints: ->(req) { !req.xhr? && req.format.html? }
end
