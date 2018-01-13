class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :name, :project_type, :description, :image, :get_users

  has_many :deliverables
  has_many :revisions

end
