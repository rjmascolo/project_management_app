class CreateCompanyCampaigns < ActiveRecord::Migration[5.1]
  def change
    create_table :company_campaigns do |t|
      t.string :company_type
      t.belongs_to :campaign, foreign_key: true
      t.belongs_to :company, foreign_key: true

      t.timestamps
    end
  end
end
