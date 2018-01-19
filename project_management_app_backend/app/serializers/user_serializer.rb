class UserSerializer < ActiveModel::Serializer
  attributes :id , :email, :first_name, :last_name, :position, :image, :company

  has_many :projects
  has_many :comments

end
