class Company < ApplicationRecord
  has_many :users
  # has_many :company_campaigns
  # has_many :campaigns, through: :company_campaigns


end
