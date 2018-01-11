require 'faker'
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Deliverable.destroy_all
RevisionItem.destroy_all
Comment.destroy_all
Revision.destroy_all
UserProject.destroy_all
User.destroy_all
Project.destroy_all

user_positions = ["Director of Digital", "Senior Copywriter", "Marketing Manager", "Marketing Strategist ", "Data Scientist", "UX Designer"]

projects =[

            {
              name: "Q1 Awareness Campaign Banners",
              description: "Banner advertisements for our Q1 campaign.",
              project_type: "Display Media",
              deliverables: [
                {description: "2-3 creative mocks for the Q1 awareness banners", date: Date.new(2018,2,3)},
                {description: "Refined mock up of one Q1 banner asset", date: Date.new(2018,2,7)},
                {description: "First iteration of built out Q1 banners", date: Date.new(2018,2,13)},
                {description: "Approval on final implementation of the Q1 awareness banner mocks", date: Date.new(2018,2,16)}
              ],
              revisions: [
                { revision_type:"creative brief",
                  description:"Creative brief for the Q1 awareness campaign banners",
                  revision_items: [
                    {file:"Q1_Banner_Creative_Brief.doc", item_type:"file"}
                    ]
                 }
              ]
            },
            {
              name: "Twitch Native Content",
              description: "Custom livestream with Twitch influencers and custom media assets",
              project_type: "Custom Content",
              deliverables: [
                {description: "Brand guidelines and talking points for livestream", date: Date.new(2018,2,1)},
                {description: "Set design mocks and gameplan for the flow in the livestream", date: Date.new(2018,2,3)},
                {description: "Brand campaign files and assets sent to Publisher to create custom media assets", date: Date.new(2018,2,18)},
                {description: "Approval on all assets", date: Date.new(2018,2,21)}
              ],
              revisions: [
                { revision_type:"creative brief",
                  description:"Specs and outline on assets needed",
                  revision_items: [
                    {file:"Twitch_custom_media_specs.pptx", item_type:"file"},
                    {file:"Twitch_influencer_list.pptx", item_type:"file"}
                    ]
                 }
              ]
            },
            {
              name: "YouTube Masthead",
              description: "10 second promotional video to appear on the YouTube homepage",
              project_type: "Display Media",
              deliverables: [
                {description: "2-3 creative mocks ", date: Date.new(2018,2,5)},
                {description: "Refined mock up of the creative direction chosen", date: Date.new(2018,2,7)},
                {description: "First iteration of built out create direction", date: Date.new(2018,2,18)},
                {description: "Approval on final implementation", date: Date.new(2018,2,21)}
              ],
              revisions: [
                { revision_type:"creative brief",
                  description:"Specs and outline on assets needed",
                  revision_items: [
                    {file:"YouTube_Masthead_Creative_Brief.doc", item_type:"file"},
                    {file:"Twitch_custom_media_specs.pptx", item_type:"file"}
                    ]
                 }
              ]
            },
            {
              name: "Buzzfeed Custom Videos",
              description: "2 custom content videos produced by Buzzfeed's editoral team",
              project_type: "Custom Content",
              deliverables: [
                {description: "2 draft scripts and set design mocks", date: Date.new(2018,2,3)},
                {description: "Scripts in final form for shooting and approved set design mocks", date: Date.new(2018,2,7)},
                {description: "1st creative iteration of videos", date: Date.new(2018,2,13)},
                {description: "Final creative iteration of videos", date: Date.new(2018,2,16)}
              ],
              revisions: [
                { revision_type:"creative brief",
                  description:"Specs and outline on assets needed",
                  revision_items: [
                    {file:"Buzzfeed_Custom_Videos_Creative_Brief.doc", item_type:"file"}
                    ]
                }
              ]
            },
            {
              name: "Spotify Audio Spots",
              description: "2 audio spots produced by Spotify's audio team",
              project_type: "Display Media",
              deliverables: [
                {description: "Demos of possible VO actors", date: Date.new(2018,2,3)},
                {description: "2 final audio scripts and voice actors selected", date: Date.new(2018,2,7)},
                {description: "1st iteration of audio spot", date: Date.new(2018,2,13)},
                {description: "Final iteration of audio spot", date: Date.new(2018,2,16)}
              ],
              revisions: [
                { revision_type:"creative brief",
                  description:"Specs and outline on assets needed",
                  revision_items: [
                    {file:"Spotify_audio_script_template.doc", item_type:"file"},
                    {file:"Spotify_custom_media_specs.pptx", item_type:"file"}
                    ]
                  }
              ]
            },
            {
              name: "College Humor Custom Video",
              description: "Custom video created by College Humor's editorial team with assets",
              project_type: "Custom Content",
              deliverables: [
                {description: "2 draft scripts and set design mocks", date: Date.new(2018,2,3)},
                {description: "Scripts in final form for shooting and approved set design mocks", date: Date.new(2018,2,7)},
                {description: "1st creative iteration of videos", date: Date.new(2018,2,13)},
                {description: "Final creative iteration of videos", date: Date.new(2018,2,16)}
              ],
              revisions: [
                { revision_type:"creative brief",
                  description:"Specs and outline on assets needed",
                  revision_items: [
                    {file:"Electus_Custom_Videos_Creative_Brief.doc", item_type:"file"}
                    ]
                }
              ]
            },
            {
              name: "Bustle Custom Content",
              description: "3 custom articles and 3 social media posts ",
              project_type: "Custom Content",
              deliverables: [
                {description: "3 drafts of custom articles", date: Date.new(2018,2,3)},
                {description: "3 custom social media posts", date: Date.new(2018,2,7)},
                {description: "Final custom articles", date: Date.new(2018,2,13)},
                {description: "Final custom social media posts", date: Date.new(2018,2,16)}
              ],
              revisions: [
                { revision_type: "creative brief",
                  description: "Specs and outline on assets needed",
                  revision_items: [
                    {file:"Bustle_Custom_Content_Creative_Brief.doc", item_type:"file"},
                    {file:"Bustle_custom_media_specs.pptx", item_type:"file"}
                    ]
                }
              ]
            }
          ]

# q1_banner_ads = Project.create({name: "Q1 Awareness Campaign Banners", description: "Banner advertisements for our Q1 campaign."})
#
# UserProject.create({project_type: "client", user:ryan, project: q1_banner_ads})

def create_projects(projects, userArray)
  ryan = User.create({email: "ryan@email.com", password: "123", first_name: "Ryan", last_name: "Mascolo", position:"Coordinator", image: "https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAkiAAAAJDhiMWMxOTMzLTA3YzEtNGQyMS1iYzc3LWNjMjUwZDczY2I2YQ.jpg"} )
  users = createUsers(userArray)
  users.unshift(ryan)
  projects.map{ |project|
    newProject = Project.create({name: project[:name], description: project[:description], project_type: project[:project_type]})
    createUserProjects(users, newProject)
    project[:deliverables].map{ |deliverable| Deliverable.create({ description: deliverable[:description], date: deliverable[:date], project: newProject})}
    project[:revisions].map{ |revision|
      newRevision = Revision.new({revision_type:revision[:revision_type], description: revision[:description], project: newProject})
      revision[:revision_items].map{ |item| RevisionItem.create({file: item[:file], item_type: item[:item_type], revision: newRevision})}
    }
  }
end

def createUsers(userTitleArray)
  userTitleArray.map{ |position| User.create({email: Faker::Internet.email, password: "123", first_name: Faker::Name.first_name , last_name: Faker::Name.last_name , position: position, image: Faker::Avatar.image}) }
end

def createUserProjects(users, project)
  users.map{ |user| UserProject.create({project_type: "client", user: user, project: project}) }
end

create_projects(projects, user_positions)

# CreativeBrief to partners
# Deliverable.create({description: "2-3 creative mocks for the Q1 awareness banners", date: Date.new(2018,2,3), project: q1_banner_ads })
# Deliverable.create({description: "Refined mock up of one Q1 banner asset", date: Date.new(2018,2,7), project: q1_banner_ads })
# Deliverable.create({description: "First iteration of built out Q1 banners", date: Date.new(2018,2,13), project: q1_banner_ads })
# Deliverable.create({description: "Approval on final implementation of the Q1 awareness banner mocks", date: Date.new(2018,2,16), project: q1_banner_ads })
#
#
# creative_brief_banners = Revision.create({revision_type:"creative brief", description:"Creative brief for the Q1 awareness campaign banners", project: q1_banner_ads })
# RevisionItem.create({file:"yyz.jpeg", item_type:"file", revision: creative_brief_banners})
#
# round1_banners = Revision.create({revision_type:"creative", description:"3 creative mocks for the Q1 awareness campaign banners", project: q1_banner_ads })
# RevisionItem.create({file:"round1.jpeg", item_type:"file", revision: round1_banners})
#
# round2_banners = Revision.create({revision_type:"creative", description:"Refined mock up of one Q1 banner asset", project: q1_banner_ads })
# RevisionItem.create({file:"round2.jpeg", item_type:"file", revision: round2_banners})
#
# round3_banners = Revision.create({revision_type:"creative", description:"First iteration of built out Q1 banners", project: q1_banner_ads })
# RevisionItem.create({file:"round3.jpeg", item_type:"file", revision: round3_banners})
#
# round4_banners = Revision.create({revision_type:"creative", description:"Approval on final implementation of the Q1 awareness banner mocks", project: q1_banner_ads })
# RevisionItem.create({file:"round4.jpeg", item_type:"file", revision: round4_banners})
