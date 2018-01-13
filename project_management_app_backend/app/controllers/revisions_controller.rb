class RevisionsController < ApplicationController
  before_action :set_revision, only: [:show, :update, :destroy]

  # GET /revisions
  def index
    @revisions = Revision.all

    render json: @revisions
  end

  # GET /revisions/1
  def show
    render json: @revision
  end

  # POST /revisions
  def create
    @revision = Revision.new(revision_params)
    if @revision.save
      render json: @revision, status: :created, location: @revision
    else
      render json: @revision.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /revisions/1
  def update
    if @revision.update(revision_params)
      render json: @revision
    else
      render json: @revision.errors, status: :unprocessable_entity
    end
  end

  # DELETE /revisions/1
  def destroy
    @revision.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_revision
      @revision = Revision.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def revision_params
      params.require(:revision).permit(:revision_type, :description, :project_id)
    end
end
