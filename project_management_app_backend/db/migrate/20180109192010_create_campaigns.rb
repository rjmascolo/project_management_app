class CreateCampaigns < ActiveRecord::Migration[5.1]
  def change
    create_table :campaigns do |t|
      t.string :name
      t.string :description
      t.date :date

      t.timestamps
    end
  end
end
