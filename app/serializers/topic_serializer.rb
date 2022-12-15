class TopicSerializer < ActiveModel::Serializer
  attributes :concept, :review, :examples, :completed
end
