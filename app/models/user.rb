class User < ApplicationRecord
    has_many :problems
    has_many :topics, through: :problems

    has_secure_password
end
