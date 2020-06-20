Rails.application.routes.draw do
  resources :interprets
  resources :dreams
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  get '/food', to: 'interprets#food'
  get '/beauty', to: 'interprets#beauty'
  get '/fashion', to: 'interprets#fashion'
  get '/tech', to: 'interprets#tech'
  get '/podcast', to: 'interprets#podcast'
  get '/books', to: 'interprets#books'
  get '/movies', to: 'interprets#movies'
  # get '/artists', to: 'interprets#artists'
end
