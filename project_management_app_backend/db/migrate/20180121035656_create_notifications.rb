class CreateNotifications < ActiveRecord::Migration[5.1]
  def change
    create_table :notifications do |t|
      t.string :notification_type
      t.belongs_to :user, foreign_key: true
      t.belongs_to :project, foreign_key: true

      t.timestamps
    end
  end
end
