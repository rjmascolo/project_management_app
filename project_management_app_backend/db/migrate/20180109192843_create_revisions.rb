class CreateRevisions < ActiveRecord::Migration[5.1]
  def change
    create_table :revisions do |t|
      t.string :revision_type
      t.string :description
      t.belongs_to :project, foreign_key: true

      t.timestamps
    end
  end
end
