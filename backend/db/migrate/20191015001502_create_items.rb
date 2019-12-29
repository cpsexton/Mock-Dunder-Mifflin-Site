class CreateItems < ActiveRecord::Migration[6.0]
  def change
    create_table :items do |t|
      t.string :name
      t.integer :sku
      t.string :image_url
      t.string :description
      t.string :category
      t.references :cart, null: false, foreign_key: true

      t.timestamps
    end
  end
end
