class Post < ApplicationRecord

    validates :body,:author_id, :profile_id, presence: true

    belongs_to :author, class_name: :User, foreign_key: :author_id

    belongs_to :user_profile, class_name: :User, foreign_key: :profile_id
end
