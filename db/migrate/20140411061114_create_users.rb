class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :username
      t.text :email
      t.text :image
      t.timestamps
    end
  end
end
