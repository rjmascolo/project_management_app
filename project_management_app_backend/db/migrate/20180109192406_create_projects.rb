class CreateProjects < ActiveRecord::Migration[5.1]
  def change
    create_table :projects do |t|
      t.string :name
      t.string :project_type
      t.string :description
      t.string :image
      t.boolean :completed, default: false
      t.belongs_to :campaign, foreign_key: true

      t.timestamps
    end
  end
end
