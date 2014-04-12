Loople::Application.routes.draw do
  # KH custom test pages for experimentations porpoises
  get "anne" =>'pages#anne'
  get "charlie" =>'pages#charlie'
  get "kriss" =>'pages#kriss'
  # regular routes
  get "loops/new"
  get "loops/create"
  get "loops/edit"
  get "loops/index"
  get "loops/show"
  get "loops/update"
  get "loops/destroy"
  get "key_strokes/new"
  get "key_strokes/create"
  get "key_strokes/edit"
  get "key_strokes/index"
  get "key_strokes/show"
  get "key_strokes/update"
  get "key_strokes/destroy"
  get "users/index"
  get "users/create"
  get "users/new"
  get "users/edit"
  get "users/show"
  get "users/update"
  get "users/destroy"
  resources :users, :loops, :keystrokes, :tracks
end
