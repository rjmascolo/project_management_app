class RevisionItemSerializer < ActiveModel::Serializer
  attributes :id, :file, :item_type

  # belongs_to :revision

end
