class RevisionItemController < ApplicationController
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
      render json: @revision_item, status: :created, location: @revision_item
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
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_revision_item
      @revision_item = RevisionItem.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def revision_item_params
      params.require(:revision_item).permit(:file, :revision_id)
    end
end
