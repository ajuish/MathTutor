class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :email
      t.string :password_digest
      t.string :addition, array: true, default: [0, 0]
      t.string :subtraction, array: true, default: [0, 0]
      t.string :multiplication, array: true, default: [0, 0]
      t.string :division, array: true, default: [0, 0]

      t.timestamps
    end
  end
end
