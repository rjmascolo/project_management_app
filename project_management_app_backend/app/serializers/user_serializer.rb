class UserSerializer < ActiveModel::Serializer
  attributes :id , :email, :first_name, :last_name, :position, :image, :current_campaigns

  has_many :projects
  belongs_to :company
  has_many :comments

end
