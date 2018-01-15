class CreateRevisionItems < ActiveRecord::Migration[5.1]
  def change
    create_table :revision_items do |t|
      t.attachment :file_upload
      t.string :file_name
      t.string :item_type
      t.belongs_to :revision, foreign_key: true

      t.timestamps
    end
  end
end
