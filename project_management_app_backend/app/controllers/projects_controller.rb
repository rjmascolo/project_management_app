class ProjectsController < ApplicationController
  before_action :set_project, only: [:show, :update, :destroy, :edit_project_users]

  # GET /projects
  def index
    @projects = Project.all

    render json: @projects
  end

  # GET /projects/1
  def show
    render json: @project, includes: '**'
  end

  def edit_project_users
    users = UserProject.all.where('project_id IN (?)', @project.id)
    users.each{ |user|
      if !params[:userIds].include?(user.user_id)
        user.destroy
      end
    }
    current_ids = @project.users.map{ |x| x.id }
    params[:userIds].each{ |id|
      if !current_ids.include?(id)
        UserProject.create(project_type: "client", user_id: id, project_id: @project.id)
      end
    }
    project_users = Project.find(@project.id).get_users
    render json: project_users
  end

  # POST /projects
  def create
    project = params[:project]
    @project = Project.new( {name: project[:projectName], description: project[:projectDescription], image: project[:projectImage], project_type: project[:projectType], campaign_id: project[:projectCampaign] })
    if @project.save
      newRevision = Revision.new({ revision_type: "creative brief", description: project[:creativeDeliverables], project: @project })

      newRevision.save

      project[:deliverables].each{ |deliverable| Deliverable.create( {description: deliverable[:description], date: Date.parse(deliverable[:date]), project: @project}) }

      project[:projectUsers].each{ |i| UserProject.create( {user_id: i , project: @project, project_type:"client" } )}

      Notification.create({project: @project, user_id: params[:user_id], notification_type: "project"})

      render json: @project, status: :created, location: @project
    else
      render json: @project.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /projects/1
  def update
    if @project.update(project_params)
      render json: @project, include: '**'
    else
      render json: @project.errors, status: :unprocessable_entity
    end
  end

  # DELETE /projects/1
  def destroy
    @project.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_project
      @project = Project.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def project_params
      params.require(:project).permit(:name, :description, :image, :project_type, :completed)
    end
end
