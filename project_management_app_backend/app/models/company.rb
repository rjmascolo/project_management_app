class Company < ApplicationRecord
  has_many :users
  has_many :company_campaigns
  has_many :campaigns, through: :company_campaigns

  def user_details
    self.users.map{ |person| person.slice(:id,:first_name, :last_name, :image, :position)}
  end

end
