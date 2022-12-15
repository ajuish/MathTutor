class Topic < ApplicationRecord
    has_many :problems
    has_many :users, through: :problems
end
