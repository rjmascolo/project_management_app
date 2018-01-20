class CampaignSerializer < ActiveModel::Serializer
  attributes :id , :name, :description, :launch_date, :end_date, :agencies

end
