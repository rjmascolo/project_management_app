class CreateCampaigns < ActiveRecord::Migration[5.1]
  def change
    create_table :campaigns do |t|
      t.string :name
      t.string :description
      t.date :launch_date
      t.date :end_date

      t.timestamps
    end
  end
end
