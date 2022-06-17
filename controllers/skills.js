import { Skill } from "../models/skills.js";
// import { skills } from "../data/skill-data.js"

// function index (req, res) {
//   Skill.find({})
//   res.render('skills/index', {
//     skills: basketballTeams
//   })
// }

function index(req, res) {
  Skill.find({})
  .then(skills => {
    res.render('skills/index', {
      skills: skills,
      time: req.time
    })
  })
  .catch(error => {
    res.redirect('/')
  })
}

function newSkill(req, res) {
  res.render('skills/new')
}

function create(req, res) {
  Skill.create(req.body)
  .then(skill => {
    console.log(skill)
    res.redirect('/skills')
  })
  .catch(error => {
    res.redirect('/skills')
  })
} 

function show(req, res) {
  Skill.findById(req.params.id)
  .then(skill => {
    res.render('skills/show', {
      skill: skill
    })
  })
  .catch(error => {
    res.redirect('/skills')
  }) 
}

function deleteSkill(req, res) {
  Skill.findByIdAndDelete(req.params.id)
  .then(skill => {
    res.redirect('/skills')
  })
  .catch(error => {
    res.redirect('/skills')
  })
} 

export {
  index,
  newSkill as new,
  create,
  show,
  deleteSkill as delete,
}