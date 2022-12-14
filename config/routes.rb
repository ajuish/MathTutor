Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  # checking if cookies work, delete later
  get '/hello', to: 'application#hello_world'

  # session routes
  post '/login', to: "sessions#create"
  delete '/logout', to: "sessions#destroy"

  get '*path',
  to: 'fallback#index',
  constraints: ->(req) { !req.xhr? && req.format.html? }
end
