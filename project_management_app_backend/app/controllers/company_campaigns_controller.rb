class CompanyCampaignsController < ApplicationController
  before_action :set_company_campaign, only: [:show, :update, :destroy]

  # GET /company_campaigns
  def index
    @company_campaigns = CompanyCampaign.all

    render json: @company_campaigns
  end

  # GET /company_campaigns/1
  def show
    render json: @company_campaign
  end

  # POST /company_campaigns
  def create
    @company_campaign = CompanyCampaign.new(company_campaign_params)

    if @company_campaign.save
      render json: @company_campaign, status: :created, location: @company_campaign
    else
      render json: @company_campaign.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /company_campaigns/1
  def update
    if @company_campaign.update(company_campaign_params)
      render json: @company_campaign
    else
      render json: @company_campaign.errors, status: :unprocessable_entity
    end
  end

  # DELETE /company_campaigns/1
  def destroy
    @company_campaign.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_company_campaign
      @company_campaign = CompanyCampaign.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def company_campaign_params
      params.require(:company_campaign).permit(:campaign_id, :company_id)
    end
end
