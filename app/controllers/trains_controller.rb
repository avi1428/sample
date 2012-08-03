class TrainsController < ApplicationController
	
	def index	
		if params[:search_by] && params[:search_name]
			@trains=Train.find(:all, :conditions=>["#{params[:search_by]} LIKE ?", "%#{params[:search_name]}%"])
		else		
			@trains=Train.find(:all)		
			@sort_order = "ASC"
		end		
	end

	def index_asc
		if params[:f_name] && params[:sort_asc] && params[:sort_asc] =="ASC"
			render :update do |page|
			@trains=Train.find(:all, :order=>"#{params[:f_name]} #{params[:sort_asc]}")
			@sort_order = "DESC"
			page.replace_html "train_list", :partial=>"train_list"
		 	end		
		elsif params[:f_name] && params[:sort_asc] && params[:sort_asc] =="DESC"
			render :update do |page|
			@trains=Train.find(:all, :order=>"#{params[:f_name]} #{params[:sort_asc]}")
			@sort_order = "ASC"
			page.replace_html "train_list", :partial=>"train_list"
		 	end		
		 else
		 end			
	end

	def new		
		@train=Train.new
	end
	def create
		@train = Train.new(params[:train])
		if @train.save
			redirect_to "/trains"			
		else			
			render :action=>"new"
		end
	end
	def edit
		 @train = Train.find(params[:id])
		 #render :xml => @train
	end
	def update
		@train = Train.find(params[:id])
		if @train.update_attributes(params[:train])
			redirect_to "/trains"
		else
			render :action=>"edit"
		end
	end
	def show
		#@train = Train.find(params[:id])
		
		#render :text => "Hello" and return false
	end
	def destroy_train
		#render :text=> params.inspect and return false
		 @train = Train.find(params[:id])
		 @train.destroy
		
		render :update do |page|
			@trains=Train.find(:all)
			page.replace_html "train_list", :partial=>"train_list"
		end			

	end
	def search	
		#render :text=> params.inspect and return false
		@trains=Train.find(:all, :conditions=>["#{params[:search_by]} LIKE ?", "%#{params[:search_name]}%"])
		#redirect_to "/trains"
	end
	def dob
		render :text => "Hello" and return false
		#render :action => "dob"
	end
	def signup		
		@account = Account.new		
	end

	def create_signup
		@account = Account.new(params[:account])
		if @account.save
			redirect_to "/trains"			
		else			
			render :text=>"Wrong data" and return false
		end
	end
	#def login
	#	session[:user_name] = nil
		#@account = Account.all
		#render :xml => "dfj" and return false
	#end

	def logout
		session[:user_name] = nil
		redirect_to "/trains"
		flash[:notice] = "You have successfully logout"
	end

	def authenticate		
		@account = Account.find_by_user_name_and_user_password(params[:user_name],params[:user_password])
		if !@account.nil?
			session[:user_name] = params[:user_name]
			redirect_to "/trains"
		else
			flash[:notice] = "Login fail & Try again.."
			redirect_to "/trains"
		end
	end
	def myprofile
		@account=Account.find_by_user_name(session[:user_name])
		#render :xml=>@account and return false
	end
	def java_script
		render :text => "alert('Hello, world!')",
         :content_type => "text/javascript"
	end
end
