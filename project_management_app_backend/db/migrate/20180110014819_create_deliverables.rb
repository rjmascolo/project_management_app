class CreateDeliverables < ActiveRecord::Migration[5.1]
  def change
    create_table :deliverables do |t|
      t.string :description
      t.date :date
      t.boolean :done, default: false
      t.belongs_to :project, foreign_key: true

      t.timestamps
    end
  end
end
