class DeliverableSerializer < ActiveModel::Serializer
  attributes :id, :description, :date
  has_one :project
end
