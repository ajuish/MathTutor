Rails.application.routes.draw do
  resources :topics
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  # session routes
  post '/login', to: "sessions#create"
  delete '/logout', to: "sessions#destroy"

  # topic routes
  resources :topics, only: [:index]

  # deployment
  get '*path',
  to: 'fallback#index',
  constraints: ->(req) { !req.xhr? && req.format.html? }
end
