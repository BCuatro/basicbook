class Like < ApplicationRecord
    belongs_to :likeable, polymorphic: true
    belongs_to :liker, class_name: :User, foreign_key: :user_id

    validates :liker_id, presence: :true, :uniqueness => { :scope => [:likeable_type, :likeable_id] }
end
