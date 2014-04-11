class CreateLoops < ActiveRecord::Migration
  def change
    create_table :loops do |t|
      t.string :name
      t.string :colour
      t.integer :user_id
      t.timestamps
    end
  end
end
