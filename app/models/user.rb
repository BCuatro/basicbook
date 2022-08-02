class User < ApplicationRecord
    
    validates :username, presence: true, uniqueness: {case_sensitive: false}
    validates :first_name, :last_name, :password_digest, :session_token, presence: true
    validates :first_name, :last_name, format: { with: /\A[^0-9`!@#\$%\^&*+_=]+\z/}
    validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }, presence: true, uniqueness: {case_sensitive: false}
    validates :password, length: {minimum: 6}, allow_nil: true
    
    

    attr_reader :password
    before_validation :ensure_session_token

    has_one_attached :profile_photo

    has_one_attached :cover_photo

    has_many :posts, class_name: :Post, foreign_key: :author_id, dependent: :delete_all
    
    has_many :profile_posts, class_name: :Post, foreign_key: :profile_id, dependent: :delete_all

    has_many :comments, class_name: :Comment, foreign_key: :author_id, dependent: :delete_all

    has_many :friends, class_name: :Friend, foreign_key: :user_id

    has_many :friendships, class_name: :Friend, foreign_key: :friend_id

    has_many :liked_comments, through: :likes, source: :likeable, source_type: :Comment

    has_many :liked_posts, through: :likes, source: :likeable, source_type: :Post
            



   

    def self.find_by_credentials(username, password)
        @user = User.find_by(username: username)
        if @user && @user.is_password?(password)
            @user
        else
            nil
        end
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token!
        self.session_token = SecureRandom::urlsafe_base64
        self.save!
        self.session_token
    end
    def full_name
        "#{first_name} #{last_name}"
    end


    private
    def ensure_session_token
        self.session_token ||= SecureRandom::urlsafe_base64
    end
end
