class Friend < ApplicationRecord

    belongs_to :user, class_name: :User, foreign_key: :user_id, optional: true
    belongs_to :friend, class_name: :Friend, foreign_key: :friend_id, optional: true

    validates :user_id, :friend_id, presence: true
end
