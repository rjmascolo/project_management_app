# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180121035656) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "campaigns", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.date "launch_date"
    t.date "end_date"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "comments", force: :cascade do |t|
    t.json "content"
    t.bigint "user_id"
    t.bigint "revision_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["revision_id"], name: "index_comments_on_revision_id"
    t.index ["user_id"], name: "index_comments_on_user_id"
  end

  create_table "companies", force: :cascade do |t|
    t.string "name"
    t.string "image"
    t.string "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "company_campaigns", force: :cascade do |t|
    t.string "company_type"
    t.bigint "campaign_id"
    t.bigint "company_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["campaign_id"], name: "index_company_campaigns_on_campaign_id"
    t.index ["company_id"], name: "index_company_campaigns_on_company_id"
  end

  create_table "deliverables", force: :cascade do |t|
    t.string "description"
    t.date "date"
    t.boolean "done", default: false
    t.bigint "project_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["project_id"], name: "index_deliverables_on_project_id"
  end

  create_table "notifications", force: :cascade do |t|
    t.string "notification_type"
    t.bigint "user_id"
    t.bigint "project_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["project_id"], name: "index_notifications_on_project_id"
    t.index ["user_id"], name: "index_notifications_on_user_id"
  end

  create_table "projects", force: :cascade do |t|
    t.string "name"
    t.string "project_type"
    t.string "description"
    t.string "image"
    t.boolean "completed", default: false
    t.bigint "campaign_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["campaign_id"], name: "index_projects_on_campaign_id"
  end

  create_table "revision_items", force: :cascade do |t|
    t.string "file_upload_file_name"
    t.string "file_upload_content_type"
    t.integer "file_upload_file_size"
    t.datetime "file_upload_updated_at"
    t.string "file_name"
    t.string "item_type"
    t.bigint "revision_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["revision_id"], name: "index_revision_items_on_revision_id"
  end

  create_table "revisions", force: :cascade do |t|
    t.string "revision_type"
    t.string "description"
    t.bigint "project_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["project_id"], name: "index_revisions_on_project_id"
  end

  create_table "user_projects", force: :cascade do |t|
    t.string "project_type"
    t.bigint "user_id"
    t.bigint "project_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["project_id"], name: "index_user_projects_on_project_id"
    t.index ["user_id"], name: "index_user_projects_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email"
    t.string "password_digest"
    t.string "first_name"
    t.string "last_name"
    t.string "position"
    t.string "image"
    t.bigint "company_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["company_id"], name: "index_users_on_company_id"
  end

  add_foreign_key "comments", "revisions"
  add_foreign_key "comments", "users"
  add_foreign_key "company_campaigns", "campaigns"
  add_foreign_key "company_campaigns", "companies"
  add_foreign_key "deliverables", "projects"
  add_foreign_key "notifications", "projects"
  add_foreign_key "notifications", "users"
  add_foreign_key "projects", "campaigns"
  add_foreign_key "revision_items", "revisions"
  add_foreign_key "revisions", "projects"
  add_foreign_key "user_projects", "projects"
  add_foreign_key "user_projects", "users"
end
