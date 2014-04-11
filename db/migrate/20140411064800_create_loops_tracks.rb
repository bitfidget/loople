class CreateLoopsTracks < ActiveRecord::Migration
  def change
    create_table :loops_tracks, :id => false do |t|
      t.integer :loop_id
      t.integer :track_id
      t.integer :order
    end
  end
end
