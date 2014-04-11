class CreateOrders < ActiveRecord::Migration
  def change
    create_table :orders, :id => false do |t|
      t.integer :order
      t.integer :track_id
      t.integer :loop_id
    end
  end
end
