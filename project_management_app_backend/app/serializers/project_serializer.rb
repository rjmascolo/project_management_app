class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :name, :project_type, :description, :image, :completed, :get_users, :campaign_id

  has_many :deliverables
  has_many :revisions

end
