class CommentSerializer < ActiveModel::Serializer
  attributes :id, :content, :revision_id, :user_id
end
