class ChangeTypeForFriendshipStatusInFriendsTable < ActiveRecord::Migration[5.2]
  def change
    change_column :friends, :friendship_status, :text, using: "friendship_status::text"
  end
end
