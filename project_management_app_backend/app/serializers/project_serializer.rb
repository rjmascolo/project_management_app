class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :name, :project_type, :description, :image, :revisions, :deliverables, :users

  has_many :revisions
  has_many :deliverables
  has_many :users

end
