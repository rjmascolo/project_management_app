require 'test_helper'

class RevisionDataControllerTest < ActionDispatch::IntegrationTest
  setup do
    @revision_datum = revision_data(:one)
  end

  test "should get index" do
    get revision_data_url, as: :json
    assert_response :success
  end

  test "should create revision_datum" do
    assert_difference('RevisionDatum.count') do
      post revision_data_url, params: { revision_datum: { file: @revision_datum.file, revision_id: @revision_datum.revision_id } }, as: :json
    end

    assert_response 201
  end

  test "should show revision_datum" do
    get revision_datum_url(@revision_datum), as: :json
    assert_response :success
  end

  test "should update revision_datum" do
    patch revision_datum_url(@revision_datum), params: { revision_datum: { file: @revision_datum.file, revision_id: @revision_datum.revision_id } }, as: :json
    assert_response 200
  end

  test "should destroy revision_datum" do
    assert_difference('RevisionDatum.count', -1) do
      delete revision_datum_url(@revision_datum), as: :json
    end

    assert_response 204
  end
end
