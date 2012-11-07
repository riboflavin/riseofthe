class HomeController < ApplicationController

  def index
  end

  def post		
		if params[:email] && params[:email].include?('@')  	
			render :json => {'email' => params[:email], 'response' => 'OK'}
		    entry = Entry.new
    		params[:created] =  Time.new.to_time.to_s
    		entry.value = params.to_s
			entry.save
		else
			render :json => {'email' => params[:email], 'response' => 'Whoops! Please check your email address and try again.'}
		end    
  end

  def view
  		entries = Entry.all
  		hash = Digest::SHA1.hexdigest(params[:pass]) 
  		if hash == '3cf6d3ada21adf6a721894f8e011d84494d7bc6f'
  			render :json => {'entries' => entries}
  		else
			redirect_to "/"			
			#render :json => {'data' => hash}
  		end
  end

end
