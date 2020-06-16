require 'test_helper'

class InterpretsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @interpret = interprets(:one)
  end

  test "should get index" do
    get interprets_url, as: :json
    assert_response :success
  end

  test "should create interpret" do
    assert_difference('Interpret.count') do
      post interprets_url, params: { interpret: { description: @interpret.description, image_url: @interpret.image_url, name: @interpret.name, tag: @interpret.tag, website_url: @interpret.website_url } }, as: :json
    end

    assert_response 201
  end

  test "should show interpret" do
    get interpret_url(@interpret), as: :json
    assert_response :success
  end

  test "should update interpret" do
    patch interpret_url(@interpret), params: { interpret: { description: @interpret.description, image_url: @interpret.image_url, name: @interpret.name, tag: @interpret.tag, website_url: @interpret.website_url } }, as: :json
    assert_response 200
  end

  test "should destroy interpret" do
    assert_difference('Interpret.count', -1) do
      delete interpret_url(@interpret), as: :json
    end

    assert_response 204
  end
end
