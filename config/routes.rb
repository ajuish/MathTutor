Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  # checking if cookies work, delete later
  get '/hello', to: 'application#hello_world'
end
