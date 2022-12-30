class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :email
      t.string :password_digest
      t.string :addition, array: true, default: []
      t.string :subtraction, array: true, default: []
      t.string :multiplication, array: true, default: []
      t.string :division, array: true, default: []

      t.timestamps
    end
  end
end
