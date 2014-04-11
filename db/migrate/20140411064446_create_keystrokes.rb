class CreateKeystrokes < ActiveRecord::Migration
  def change
    create_table :keystrokes do |t|
      t.integer :loop_id
      t.string :key
      t.float :time
    end
  end
end
