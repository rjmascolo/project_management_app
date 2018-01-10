class Revision < ApplicationRecord
  has_many :comments
  has_many :revision_datas
  belongs_to :project

end
