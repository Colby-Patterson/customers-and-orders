class CreateOrders < ActiveRecord::Migration[7.0]
  def change
    create_table :orders do |t|
      t.string :product_name
      t.integer :quantity
      t.float :total_price
      t.belongs_to :customer, null: false, foreign_key: true

      t.timestamps
    end
  end
end
