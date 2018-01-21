class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :name, :project_type, :description, :image, :completed, :get_users

  has_many :deliverables
  has_many :revisions
  belongs_to :campaign
  has_many :notifications

end
