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

  post '/loops' => 'loops#create' #save loop via ajax
  get '/loops/load' => 'loops#load' #load all user loops via ajax
  delete '/loops/destroy' => 'loops#destroy' #delete loop via ajax
  

  # resources :users, :loops, :keystrokes, :tracks
end
