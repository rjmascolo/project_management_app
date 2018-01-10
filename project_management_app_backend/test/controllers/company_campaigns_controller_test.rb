require 'test_helper'

class CompanyCampaignsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @company_campaign = company_campaigns(:one)
  end

  test "should get index" do
    get company_campaigns_url, as: :json
    assert_response :success
  end

  test "should create company_campaign" do
    assert_difference('CompanyCampaign.count') do
      post company_campaigns_url, params: { company_campaign: { campaign_id: @company_campaign.campaign_id, company_id: @company_campaign.company_id } }, as: :json
    end

    assert_response 201
  end

  test "should show company_campaign" do
    get company_campaign_url(@company_campaign), as: :json
    assert_response :success
  end

  test "should update company_campaign" do
    patch company_campaign_url(@company_campaign), params: { company_campaign: { campaign_id: @company_campaign.campaign_id, company_id: @company_campaign.company_id } }, as: :json
    assert_response 200
  end

  test "should destroy company_campaign" do
    assert_difference('CompanyCampaign.count', -1) do
      delete company_campaign_url(@company_campaign), as: :json
    end

    assert_response 204
  end
end
