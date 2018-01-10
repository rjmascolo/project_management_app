require 'faker'
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ryan = User.create({email: "ryan@email.com", password_digest: "123", first_name: "Ryan", last_name: "Mascolo", position:"Coordinator", image: "https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAkiAAAAJDhiMWMxOTMzLTA3YzEtNGQyMS1iYzc3LWNjMjUwZDczY2I2YQ.jpg"} )


q1_banner_ads = Project.create({name: "Q1 Awareness Campaign Banners", description: "Banner advertisements for our Q1 campaign."})

UserProject.create({project_type: "client", user:ryan, project: q1_banner_ads})

["Director of Digital", "Senior Copywriter", "Marketing Manager", "Marketing Strategist ", "Data Scientist", "UX Designer"].map{ |position|
  user = User.create({email: Faker::Internet.email, password_digest: "123", first_name: Faker::Name.first_name , last_name: Faker::Name.last_name , position: position, image: Faker::Avatar.image} )
  UserProject.create({project_type: "client", user:user, project: q1_banner_ads})
}

# CreativeBrief to partners
Deliverable.create({description: "2-3 creative mocks for the Q1 awareness banners", date: Date.new(2018,2,3), project: q1_banner_ads })
Deliverable.create({description: "Refined mock up of one Q1 banner asset", date: Date.new(2018,2,7), project: q1_banner_ads })
Deliverable.create({description: "First iteration of built out Q1 banners", date: Date.new(2018,2,13), project: q1_banner_ads })
Deliverable.create({description: "Approval on final implementation of the Q1 awareness banner mocks", date: Date.new(2018,2,16), project: q1_banner_ads })


creative_brief_banners = Revision.create({revision_type:"creative brief", description:"Creative brief for the Q1 awareness campaign banners", project: q1_banner_ads })
RevisionItem.create({file:"yyz.jpeg", item_type:"file", revision: creative_brief_banners})

round1_banners = Revision.create({revision_type:"creative", description:"3 creative mocks for the Q1 awareness campaign banners", project: q1_banner_ads })
RevisionItem.create({file:"round1.jpeg", item_type:"file", revision: round1_banners})

round2_banners = Revision.create({revision_type:"creative", description:"Refined mock up of one Q1 banner asset", project: q1_banner_ads })
RevisionItem.create({file:"round2.jpeg", item_type:"file", revision: round2_banners})

round3_banners = Revision.create({revision_type:"creative", description:"First iteration of built out Q1 banners", project: q1_banner_ads })
RevisionItem.create({file:"round3.jpeg", item_type:"file", revision: round3_banners})

round4_banners = Revision.create({revision_type:"creative", description:"Approval on final implementation of the Q1 awareness banner mocks", project: q1_banner_ads })
RevisionItem.create({file:"round4.jpeg", item_type:"file", revision: round4_banners})
