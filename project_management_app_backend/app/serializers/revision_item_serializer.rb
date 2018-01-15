class RevisionItemSerializer < ActiveModel::Serializer
  attributes :id, :file_name, :file_url, :item_type, :revision_id

  # belongs_to :revision

end
