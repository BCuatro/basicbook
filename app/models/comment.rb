class Comment < ApplicationRecord

    validates :body,:author_id, :post_id, presence: true

    belongs_to :comment_author, class_name: :User, foreign_key: :author_id

    belongs_to :post, class_name: :Post, foreign_key: :post_id

    has_many :likes, as: :likeable, dependent: :destroy

    has_many :likers, through: :likes, source: :liker
end
