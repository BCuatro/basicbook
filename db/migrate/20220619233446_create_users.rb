class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string "username", null: false
      t.string "first_name", null: false
      t.string "last_name", null: false
      t.string "email", null: false
      t.date "birth_date", null: false
      t.string "password_digest", null: false
      t.string "session_token", null: false
      t.string "gender"
      t.text "bio"
      t.string "location"

      t.timestamps
    end
      add_index :users, :username
      add_index :users, :first_name
      add_index :users, :last_name
  end
end
