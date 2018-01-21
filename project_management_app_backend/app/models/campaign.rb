class Campaign < ApplicationRecord
  has_many :projects
  has_many :company_campaigns
  has_many :companies, through: :company_campaigns

  def agencies
    self.companies.map{ |company| company.slice(:name, :description, :image)}
  end

end
