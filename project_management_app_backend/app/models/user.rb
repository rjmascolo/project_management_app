class User < ApplicationRecord
  has_secure_password

  belongs_to :company

  has_many :comments
  has_many :user_projects
  has_many :projects, through: :user_projects
  has_many :campaigns, through: :projects

  def current_campaigns
    self.projects.map{ |project| project.campaign }.uniq
  end

end
