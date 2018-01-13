class RevisionSerializer < ActiveModel::Serializer
  attributes :id, :description, :revision_type, :project_id

  has_many :revision_items
  has_many :comments

end
