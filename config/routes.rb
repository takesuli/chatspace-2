Rails.application.routes.draw do

  root 'messages#index'
  get 'index' =>  'messages#index'
end
