class RevisionItem < ApplicationRecord
  has_attached_file :file_upload

  validates_attachment_content_type :file_upload, :content_type => ["image/jpg", "image/jpeg", "image/png", "image/gif", "application/pdf", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "application/vnd.openxmlformats-officedocument.presentationml.presentation"]
  # has_attached_file :file_upload
  # validates :file_upload, attachment_presence: true

  belongs_to :revision

  # def s3_credentials
  #   {:bucket => "project-management-app-user-uploads-ryan-mascolo", :access_key_id => ENV['aws_access_key_id'], :secret_access_key => ENV['aws_secret_key']}
  # end

  def file_url
    "http://s3.us-east-2.amazonaws.com/project-management-app-user-uploads-ryan-mascolo#{self.file_upload.path}"

  end


end
