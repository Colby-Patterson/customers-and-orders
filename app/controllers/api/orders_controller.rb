class Api::OrdersController < ApplicationController
  before_action :set_customer
  before_action :set_order, only: [:show, :update, :destroy]

  def index
    render json: @customer.orders
  end

  def show
    render json: @order
  end

  def update
    if @order.update(order_params)
      render json: @order
    else
      render json: @order.errors.full_messages, status: 422
    end
  end

  def create
    @order = @customer.orders.new(order_params)
    if @order.save
      render json: @order
    else
      render json: @order.errors.full_messages, status: 422
    end
  end

  def destroy
    render json: @order.destroy
  end

  private

  def set_customer
    @customer = Customer.find(params[:customer_id])
  end

  def set_order
    @order = @customer.orders.find(params[:id])
  end

  def order_params
    params.require(:order).permit(:product_name, :quantity, :total_price)
  end
end
