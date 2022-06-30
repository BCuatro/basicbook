class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.string "author_id", null: false
      t.string "profile_id", null: false
      t.text "body", null: false

      t.timestamps
    end
      add_index :posts, :author_id
      add_index :posts, :profile_id
  end
end
