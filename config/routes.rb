Rails.application.routes.draw do
  resources :fruits do
    put :sort
  end

  root to: 'fruits#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
