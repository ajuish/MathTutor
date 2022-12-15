class CreateProblems < ActiveRecord::Migration[7.0]
  def change
    create_table :problems do |t|
      t.string :question
      t.string :answer
      t.string :solution, array: true, default: []
      # t.integer :user_id
      t.integer :topic_id
      t.timestamps
    end
  end
end
