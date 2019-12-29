class ItemsController < ApplicationController
    
    def index
        @items = Item.all

        render json: @items
    end

    def show
        @item = Item.find(params[:id])

        render json: @item
    end

    def create
        @item = Item.new(
            name: params[:name],
            sku: params[:sku],
            image_url: params[:image_url],
            description: params[:description],
            category: params[:category],
            id: params[:id]
        )

        render json: @item
    end

    def destroy
        @item = Item.find(params[:id])
        @item.destroy

    end

    def carts
        @carts = Cart.all

        render json: @carts, include: :items
    end

end
