class ProblemSerializer < ActiveModel::Serializer
  attributes :id, :question, :answer, :solution, :topic_id
  # :user_id
end
