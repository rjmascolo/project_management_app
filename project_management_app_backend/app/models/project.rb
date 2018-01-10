class Project < ApplicationRecord
  has_many :user_projects
  has_many :revisions
  has_many :deliverables

  # belongs_to :campaign
end
