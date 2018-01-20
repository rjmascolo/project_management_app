class CampaignSerializer < ActiveModel::Serializer
  attributes :id , :name, :description, :launch_date, :end_date

  has_many :companies, through: :company_campaigns
  has_many :projects  

end
