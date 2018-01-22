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
Notification.destroy_all
Comment.destroy_all
Revision.destroy_all
UserProject.destroy_all
User.destroy_all
Project.destroy_all
CompanyCampaign.destroy_all
Company.destroy_all
Campaign.destroy_all


client_user_positions = ["Director of Digital", "Marketing Manager"]
creative_agency_user_positions = ["Marketing Strategist ", "Data Scientist", "UX Designer", "Copywriter"]
media_agency_user_positions = ["Digital Media Planner", "Integrated Media Manager", "Director of Media"]

projects =[

            {
              name: "Q1 Awareness Campaign Banners",
              description: Faker::Hipster.paragraph,
              project_type: "Display Media",
              image: 'https://adsolutions.yp.com/sites/default/files/styles/medium/public/icon-we-build-banner-ads.png?itok=ca7eODhg',
              deliverables: [
                {description: "2-3 creative mocks for the Q1 awareness banners", date: Date.new(2018,1,25)},
                {description: "Refined mock up of one Q1 banner asset", date: Date.new(2018,2,1)},
                {description: "First iteration of built out Q1 banners", date: Date.new(2018,2,13)},
                {description: "Approval on final implementation of the Q1 awareness banner mocks", date: Date.new(2018,2,26)}
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
              description: Faker::Hipster.paragraph,
              project_type: "Custom Content",
              image: 'https://pbs.twimg.com/profile_images/875860982937014272/FFXrxPK0_400x400.jpg',
              deliverables: [
                {description: "Brand guidelines and talking points for livestream", date: Date.new(2018,1,28)},
                {description: "Set design mocks and gameplan for the flow in the livestream", date: Date.new(2018,2,5)},
                {description: "Brand campaign files and assets sent to Publisher to create custom media assets", date: Date.new(2018,2,13)},
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
              description: Faker::Hipster.paragraph,
              project_type: "Display Media",
              image: 'https://www.youtube.com/yt/about/media/images/brand-resources/icons/YouTube_icon_full-color.svg',
              deliverables: [
                {description: "2-3 creative mocks ", date: Date.new(2018,2,1)},
                {description: "Refined mock up of the creative direction chosen", date: Date.new(2018,2,9)},
                {description: "First iteration of built out create direction", date: Date.new(2018,2,17)},
                {description: "Approval on final implementation", date: Date.new(2018,2,24)}
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
              description: Faker::Hipster.paragraph,
              project_type: "Custom Content",
              image: 'https://www.buzzfeed.com/static-assets/img/buzzfeed_arrow.e86a786d9e5e2250e1ed3e0ec95ba42d.png',
              deliverables: [
                {description: "2 draft scripts and set design mocks", date: Date.new(2018,1,30)},
                {description: "Scripts in final form for shooting and approved set design mocks", date: Date.new(2018,2,5)},
                {description: "1st creative iteration of videos", date: Date.new(2018,2,11)},
                {description: "Final creative iteration of videos", date: Date.new(2018,2,18)}
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
              description: Faker::Hipster.paragraph,
              project_type: "Display Media",
              image: 'https://pbs.twimg.com/profile_images/805119801660239872/_FtLaP8j.jpg',
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
              description: Faker::Hipster.paragraph,
              project_type: "Custom Content",
              image: 'http://2.media.collegehumor.cvcdn.com/40/31/fcae18a56d6fa5a826b10b0a003e539d.png',
              deliverables: [
                {description: "2 draft scripts and set design mocks", date: Date.new(2018,2,18)},
                {description: "Scripts in final form for shooting and approved set design mocks", date: Date.new(2018,2,26)},
                {description: "1st creative iteration of videos", date: Date.new(2018,3,1)},
                {description: "Final creative iteration of videos", date: Date.new(2018,3,4)}
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
              description: Faker::Hipster.paragraph,
              project_type: "Custom Content",
              image: 'https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/14433161_1436024763077752_3211430454327518092_n.png?oh=1f1033645aa8dc061b5d786e1a6ee756&oe=5B23A4B0',
              deliverables: [
                {description: "3 drafts of custom articles", date: Date.new(2018,2,2)},
                {description: "3 custom social media posts", date: Date.new(2018,2,7)},
                {description: "Final custom articles", date: Date.new(2018,2,17)},
                {description: "Final custom social media posts", date: Date.new(2018,2,28)}
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

def create_projects(projects, clientUsersArray, creativeUsersArray, mediaUsersArray)

  # create client positions
  clientCompany = Company.create({name:"Elivi's", description: "client", image:"https://assets.hongkiat.com/uploads/logo-parodies/levis_elvis.jpg"})
  ryan = User.create({email: "ryan@email.com", password: "123", first_name: "Ryan", last_name: "Mascolo", position:"Coordinator", image: "https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAkiAAAAJDhiMWMxOTMzLTA3YzEtNGQyMS1iYzc3LWNjMjUwZDczY2I2YQ.jpg", company: clientCompany} )
  client_users = createUsers(clientUsersArray, clientCompany)
  client_users.unshift(ryan)
  # create creative agency positions
  creativeCompany = Company.create({name:"SCDP", description: "creative agency", image:"https://stocklogos.com/sites/default/files/scdp-logo.jpg"})
  creative_users = createUsers(creativeUsersArray, creativeCompany)
  # create media agency users
  mediaCompany = Company.create({name:"UM Worldwide", description: "media agency", image:"https://dmexco.de/Conference/images/logos/logo_1500398512.jpg"})
  media_users = createUsers(mediaUsersArray, mediaCompany)


  campaign = Campaign.create({name: "Q1 Awareness Campaign", description: Faker::Hipster.paragraph, launch_date: Date.new(2018,1,29), end_date: Date.new(2018,4,15) })
  CompanyCampaign.create({ company: clientCompany, campaign: campaign, company_type:"client" })
  CompanyCampaign.create({ company: creativeCompany, campaign: campaign, company_type:"creative" })
  CompanyCampaign.create({ company: mediaCompany, campaign: campaign, company_type:"media" })

  projects.map{ |project|
    newProject = Project.create({name: project[:name], description: project[:description], project_type: project[:project_type], image: project[:image], campaign: campaign})
    createUserProjects(client_users, newProject)
    createUserProjects(creative_users, newProject)
    createUserProjects(media_users, newProject)

    project[:deliverables].map{ |deliverable| Deliverable.create({ description: deliverable[:description], date: deliverable[:date], project: newProject})}
    project[:revisions].map{ |revision|

      Revision.create({revision_type:revision[:revision_type], description: revision[:description], project: newProject})
      # revision[:revision_items].map{ |item| RevisionItem.create({file: item[:file], item_type: item[:item_type], revision: newRevision})}
    }
  }
  newUsers = []
  5.times { newUsers.push(Faker::Company.profession)}
  createUsers(newUsers, clientCompany)
end

def createUsers(userTitleArray, company)
  userTitleArray.map{ |position| User.create({email: Faker::Internet.email, password: "123", first_name: Faker::Name.first_name , last_name: Faker::Name.last_name , position: position, image: Faker::Avatar.image, company: company}) }
end

def createUserProjects(users, project)
  users.map{ |user| UserProject.create({project_type: "client", user: user, project: project}) }
end

create_projects(projects, client_user_positions, creative_agency_user_positions, media_agency_user_positions)

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
