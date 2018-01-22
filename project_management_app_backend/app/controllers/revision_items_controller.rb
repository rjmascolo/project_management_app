class RevisionItemsController < ApplicationController
  before_action :set_revision_item, only: [:show, :update, :destroy]

  # GET /revision_item
  def index
    @revision_item = RevisionItem.all

    render json: @revision_item
  end

  # GET /revision_item/1
  def show
    render json: @revision_item
  end

  # POST /revision_item
  def create
    @revision_item = RevisionItem.new(revision_item_params)

    if @revision_item.save
      newHash = {item: @revision_item}
      newHash[:notification] = Notification.create({project_id: params["revision_item"][:project_id], user_id: params["revision_item"][:user_id], notification_type: "file"})
      render json: newHash, status: :created, location: @revision_item
    else
      render json: @revision_item.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /revision_item/1
  def update
    if @revision_item.update(revision_item_params)
      render json: @revision_item
    else
      render json: @revision_item.errors, status: :unprocessable_entity
    end
  end

  # DELETE /revision_item/1
  def destroy
    @revision_item.destroy
    render json: @revision_item
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_revision_item
      @revision_item = RevisionItem.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def revision_item_params
      params.require(:revision_item).permit(:file_upload, :revision_id, :item_type,:file_name)
    end
end
