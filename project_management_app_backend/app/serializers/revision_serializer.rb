class RevisionSerializer < ActiveModel::Serializer
  attributes :id, :description, :revision_type, :project_id, :created_at

  has_many :revision_items
  has_many :comments

end
