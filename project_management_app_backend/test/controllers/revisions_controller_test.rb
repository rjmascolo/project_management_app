require 'test_helper'

class RevisionsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @revision = revisions(:one)
  end

  test "should get index" do
    get revisions_url, as: :json
    assert_response :success
  end

  test "should create revision" do
    assert_difference('Revision.count') do
      post revisions_url, params: { revision: { description: @revision.description, project_id: @revision.project_id, type: @revision.type } }, as: :json
    end

    assert_response 201
  end

  test "should show revision" do
    get revision_url(@revision), as: :json
    assert_response :success
  end

  test "should update revision" do
    patch revision_url(@revision), params: { revision: { description: @revision.description, project_id: @revision.project_id, type: @revision.type } }, as: :json
    assert_response 200
  end

  test "should destroy revision" do
    assert_difference('Revision.count', -1) do
      delete revision_url(@revision), as: :json
    end

    assert_response 204
  end
end
