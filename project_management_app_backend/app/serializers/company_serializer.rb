class CompanySerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :user_details

  has_many :campaigns

end
