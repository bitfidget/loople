Loople::Application.routes.draw do
  # KH custom test pages for experimentations porpoises
  get "anne" =>'pages#anne'
  get "charlie" =>'pages#charlie'
  get "kriss" =>'pages#kriss'
  

  resources :users, :loops, :keystrokes, :tracks
end
