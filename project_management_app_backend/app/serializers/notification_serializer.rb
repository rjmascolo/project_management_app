class NotificationSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :project_id, :notification_type, :created_at
end
