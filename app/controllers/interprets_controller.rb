class InterpretsController < ApplicationController

  def food 
    @interprets = Interpret.all
    render json: @interprets.where(tag: "Food"), status: :ok
  end

  def beauty 
    @interprets = Interpret.all
    render json: @interprets.where(tag: "Beauty"), status: :ok
  end

  def fashion 
    @interprets = Interpret.all
    render json: @interprets.where(tag: "Fashion"), status: :ok
  end

  def tech
    @interprets = Interpret.all
    render json: @interprets.where(tag: "Tech"), status: :ok
  end

  def podcast 
    @interprets = Interpret.all
    render json: @interprets.where(tag: "Podcast"), status: :ok
  end

  def books 
    @interprets = Interpret.all
    render json: @interprets.where(tag: "Books"), status: :ok
  end

  def movies
    @interprets = Interpret.all
    render json: @interprets.where(tag: "Movies"), status: :ok
  end

end
