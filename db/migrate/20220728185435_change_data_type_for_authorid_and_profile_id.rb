class ChangeDataTypeForAuthoridAndProfileId < ActiveRecord::Migration[5.2]
  def change
    change_column :posts, :author_id, :integer, using: "author_id::integer"
    change_column :posts, :profile_id, :integer, using: "profile_id::integer"
  end
end
