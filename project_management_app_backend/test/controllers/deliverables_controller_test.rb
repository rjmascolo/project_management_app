require 'test_helper'

class DeliverablesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @deliverable = deliverables(:one)
  end

  test "should get index" do
    get deliverables_url, as: :json
    assert_response :success
  end

  test "should create deliverable" do
    assert_difference('Deliverable.count') do
      post deliverables_url, params: { deliverable: { date: @deliverable.date, description: @deliverable.description, project_id: @deliverable.project_id } }, as: :json
    end

    assert_response 201
  end

  test "should show deliverable" do
    get deliverable_url(@deliverable), as: :json
    assert_response :success
  end

  test "should update deliverable" do
    patch deliverable_url(@deliverable), params: { deliverable: { date: @deliverable.date, description: @deliverable.description, project_id: @deliverable.project_id } }, as: :json
    assert_response 200
  end

  test "should destroy deliverable" do
    assert_difference('Deliverable.count', -1) do
      delete deliverable_url(@deliverable), as: :json
    end

    assert_response 204
  end
end
