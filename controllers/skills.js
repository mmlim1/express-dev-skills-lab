import { basketballTeams } from "../data/skill-data.js";

function index (req, res) {
  res.render('skills/index', {
    skills: basketballTeams
  })
}

export {
  index
}