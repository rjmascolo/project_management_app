class ProjectsController < ApplicationController
  before_action :set_project, only: [:show, :update, :destroy]

  # GET /projects
  def index
    @projects = Project.all

    render json: @projects
  end

  # GET /projects/1
  def show
    render json: @project
  end

  # POST /projects
  def create
    project = params[:project]
    @project = Project.new( {name: project[:projectName], description: project[:projectDescription], image: project[:projectImage], project_type: project[:projectType] })
    if @project.save
      newRevision = Revision.new({ revision_type: "creative brief", description: project[:creativeDeliverables], project: @project })

      newRevision.save

      project[:deliverables].each{ |deliverable| Deliverable.create( {description: deliverable[:description], date: Date.parse(deliverable[:date]), project: @project}) }

      project[:projectUsers].each{ |i| UserProject.create( {user_id: i , project: @project, project_type:"client" } )}


      render json: @project, status: :created, location: @project
    else
      render json: @project.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /projects/1
  def update
    if @project.update(project_params)
      render json: @project
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
      params.require(:project).permit(:name, :description, :image, :project_type)
    end
end
