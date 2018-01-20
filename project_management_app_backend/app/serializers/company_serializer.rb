class CompanySerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :user_details

end
