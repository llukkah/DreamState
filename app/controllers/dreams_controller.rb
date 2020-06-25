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

  #GET RANDOM DREAM
  def random_dream
    @dreams = Dream.all
    @random_dream = @dreams[rand(@dreams.size)]
    render json: @random_dream
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_dream
      @dream = Dream.find(params[:id])
    end

end
