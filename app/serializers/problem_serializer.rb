class ProblemSerializer < ActiveModel::Serializer
  attributes :id, :question, :answer, :solution, :user_id, :topic_id
end
