class RevisionItem < ApplicationRecord
  has_attached_file :file_upload

  validates_attachment_content_type :file_upload, :content_type => ["image/jpg", "image/jpeg", "image/png", "image/gif", "application/pdf", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "application/vnd.openxmlformats-officedocument.presentationml.presentation"]


  belongs_to :revision

  def file_url
    "http://s3.us-east-2.amazonaws.com/project-management-app-user-uploads-ryan-mascolo#{self.file_upload.path}"
  end


end
