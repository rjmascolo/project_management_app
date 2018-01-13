Rails.application.routes.draw do
  get 'auth/create'

  resources :deliverables
  resources :comments
  resources :revision_items
  resources :revisions
  resources :user_projects
  resources :users
  resources :projects
  resources :company_campaigns
  resources :campaigns
  resources :companies

  post '/auth', to: 'auth#create'
  get '/current_user', to: 'auth#show'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
