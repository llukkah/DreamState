class InterpretsController < ApplicationController
  before_action :set_interpret, only: [:show, :update, :destroy]

  # GET /interprets
  def index
    @interprets = Interpret.all

    render json: @interprets
  end

  # GET /interprets/1
  def show
    render json: @interpret
  end

  # POST /interprets
  def create
    @interpret = Interpret.new(interpret_params)

    if @interpret.save
      render json: @interpret, status: :created, location: @interpret
    else
      render json: @interpret.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /interprets/1
  def update
    if @interpret.update(interpret_params)
      render json: @interpret
    else
      render json: @interpret.errors, status: :unprocessable_entity
    end
  end

  # DELETE /interprets/1
  def destroy
    @interpret.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_interpret
      @interpret = Interpret.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def interpret_params
      params.require(:interpret).permit(:name, :image_url, :description, :tag)
    end
end
