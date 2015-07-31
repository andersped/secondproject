 class BookmarksController < ApplicationController
  before_action :set_bookmark, only: [:show, :edit, :update, :destroy]
  before_action :confirm_logged_in
  before_action :set_categorybookmarks, only: [:show]
  before_action :set_user, only: [:index, :new, :create]
  before_action :ensure_correct_user_for_bookmarks, only: [:edit, :update, :destroy]

  def index
    if current_user
      @bookmarks = Bookmark.where(user_id: current_user.id)
    else
      @bookmarks = Bookmark.all
    end
  end

  def new
    @bookmark = Bookmark.new
    @categorybookmarks = CategoryBookmark.all
  end

  def create
    @bookmark = @user.bookmarks.create bookmark_params
      
    if bookmark_params[:url] = "https://www.facebook.com/"
      logo = "http://blogs-images.forbes.com/peterhimler/files/2014/02/high-res-logo_facebook1.png"
     end


      if @bookmark.save
        redirect_to searches_path, notice: "Bookmark has been added"
      else
        render :new
      end
  end

  def create_from_extension

    logo = ""
     if params[:title] == "www.facebook.com"
      logo = "http://blogs-images.forbes.com/peterhimler/files/2014/02/high-res-logo_facebook1.png"
     elsif params[:title] == "twitter.com"
      logo = "http://cdn.animals-pics.com/pictures/gammavet.com/wp-content/uploads/2014/01/TwitterBird.png"
     end

    user = User.find_by_id(params[:user_id])
    user.bookmarks.create(name: params[:title], url: params[:url], logo:logo)
    


    respond_to do |format|
      format.json { render :json => @site }
    end

  end

  def edit
    @categorybookmarks = CategoryBookmark.all
  end

  def show
    @bookmark_categorybookmarks = @bookmark.category_bookmarks
  end


  def update
    @bookmark.update(bookmark_params)
    if @bookmark.save
      redirect_to searches_path, notice: 'Bookmark has been Successfully Updated'
    else
      render :edit
    end
  end  


  def destroy
    @bookmark.destroy
    redirect_to searches_path
  end

  private
    def bookmark_params
      params.require(:bookmark).permit(
        :name,
        :url,
        :user_id,
        :logo,
        :category_bookmark_ids => []
        )
    end

    def set_bookmark
      @bookmark = Bookmark.find_by(id: params[:id])
    end

    def set_categorybookmarks
      @categorybookmark = CategoryBookmark.find_by_id params[:id]
    end

    def set_user
      @user = User.find params[:user_id]
    end

    def ensure_correct_user_for_bookmarks
      bookmark = Bookmark.find params[:id]
      unless bookmark.user.id == session[:user_id]
        redirect_to user_bookmarks_path(current_user)
      end
    end

end
