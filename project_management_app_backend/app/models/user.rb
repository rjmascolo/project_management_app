class User < ApplicationRecord
  has_secure_password
  
  has_many :comments
  has_many :user_projects
  has_many :projects, through: :user_projects

end
