class Revision < ApplicationRecord
  has_many :comments
  has_many :revision_items
  belongs_to :project

end
