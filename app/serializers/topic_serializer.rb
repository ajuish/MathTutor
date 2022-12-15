class TopicSerializer < ActiveModel::Serializer
  attributes :id, :concept, :review, :examples, :completed

  has_many :problems
end
