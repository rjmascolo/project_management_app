class Project < ApplicationRecord
  has_many :user_projects
  has_many :users, through: :user_projects
  has_many :revisions
  has_many :deliverables


  # belongs_to :campaign

  def get_users
    self.users.map{ |person| person.slice(:id, :first_name, :last_name, :position, :image)}
  end

end
