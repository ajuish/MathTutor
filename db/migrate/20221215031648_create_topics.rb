class CreateTopics < ActiveRecord::Migration[7.0]
  def change
    create_table :topics do |t|
      t.string :concept
      t.string :review
      t.string :examples, array: true, default: []
      t.string :completed

      t.timestamps
    end
  end
end
