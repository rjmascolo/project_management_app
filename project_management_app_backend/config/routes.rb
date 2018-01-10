Rails.application.routes.draw do
  resources :deliverables
  resources :comments
  resources :revision_data
  resources :revisions
  resources :user_projects
  resources :users
  resources :projects
  resources :company_campaigns
  resources :campaigns
  resources :companies
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
