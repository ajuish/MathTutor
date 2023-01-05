class User < ApplicationRecord
    has_many :problems
    has_many :topics, through: :problems
    
    validates :email, presence: true

    has_secure_password
end
