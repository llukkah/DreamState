class DreamsController < ApplicationController
  before_action :set_dream, only: [:show, :update, :destroy]

  # GET /dreams
  def index
    @dreams = Dream.all

    render json: @dreams
  end

  # GET /dreams/1
  def show
    render json: @dream
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_dream
      @dream = Dream.find(params[:id])
    end

end
