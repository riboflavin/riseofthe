OSConf::Application.routes.draw do
    
  get "/" => "home#index"
  post "/" => "home#post"
  get "/view/:pass" => "home#view"

  match '*path' => redirect('/')

end
