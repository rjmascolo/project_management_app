class CampaignSerializer < ActiveModel::Serializer
  attributes :id , :name, :description, :launch_date, :end_date

  has_many :projects

end
