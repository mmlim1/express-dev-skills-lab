// import { Skill } from "../models/skills.js";
import { basketballTeams } from "../data/skill-data.js"

// function index (req, res) {
//   Skill.find({})
//   res.render('skills/index', {
//     skills: basketballTeams
//   })
// }

function index(req, res) {
  // basketballTeams.find({})
  // .then(skills => {
    res.render('skills/index', {
      skills: basketballTeams,
    })
  // })
  // .catch(error => {
    // console.log(error)
    // res.redirect('/')
  // })
}

export {
  index
}