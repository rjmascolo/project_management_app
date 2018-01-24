class CampaignsController < ApplicationController
  before_action :set_campaign, only: [:show, :update, :destroy, :get_campaign_users]

  # GET /campaigns
  def index
    @campaigns = Campaign.all

    render json: @campaigns
  end

  # GET /campaigns/1
  def show
    render json: @campaign, includes: '**'
  end

  def get_campaign_users
    users = @campaign.companies.map{ |company| company.users.map{ |user| user.slice(:id, :email, :first_name, :last_name, :position, :image, :company_id)} }.flatten
    render json: users
  end

  # POST /campaigns
  def create
    @campaign = Campaign.new(campaign_params)

    if @campaign.save

      CompanyCampaign.create({campaign: @campaign, company_id:params[:current_company], company_type: "client" })
      params[:campaignCompanies].each{ |id| CompanyCampaign.create({campaign: @campaign, company_id: id, company_type: "creative" }) }

      render json: @campaign, status: :created, location: @campaign
    else
      render json: @campaign.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /campaigns/1
  def update
    if @campaign.update(campaign_params)
      render json: @campaign
    else
      render json: @campaign.errors, status: :unprocessable_entity
    end
  end

  # DELETE /campaigns/1
  def destroy
    @campaign.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_campaign
      @campaign = Campaign.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def campaign_params
      params.require(:campaign).permit(:name, :description, :launch_date, :end_date)
    end
end
