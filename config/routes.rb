Loople::Application.routes.draw do
  # KH custom test pages for experimentations porpoises
  get "loople" =>'pages#loople'
  get "anne" =>'pages#anne'
  get "charlie" =>'pages#charlie'
  get "kriss" =>'pages#kriss'
  

  # KH session control for login
  root :to => 'pages#loople'
  post 'index' => 'session#new'
  #sessions
  get '/login' => 'session#new'
  post '/login' => 'session#create'
  delete '/login' => 'session#destroy'
  

  resources :users, :loops, :keystrokes, :tracks
end
