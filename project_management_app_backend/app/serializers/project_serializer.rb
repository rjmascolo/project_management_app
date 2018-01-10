class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :name, :project_type, :description, :revisions, :deliverables, :users

  has_many :revisions
  has_many :deliverables
  has_many :users

end
