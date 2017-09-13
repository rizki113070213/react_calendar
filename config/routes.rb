Rails.application.routes.draw do
  root 'appointments#index'
  resource :appointments, only: [:index, :create]
end
