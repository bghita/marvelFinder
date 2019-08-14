
const profiles = require("../app/constants/constants.js").profiles;
const path = require("path");

module.exports = {
    homePage: (req, res) => {
        res.sendFile(path.join(__dirname, "../app/public/home.html"));
    },
    surveyPage: (req, res) => {
        res.sendFile(path.join(__dirname, "../app/public/survey.html"));
    },
    friendsData: (req, res) => {
        res.json(profiles);
    },
    compareScores: (req, res) => {
        let newUser = req.body;
        let userOptions = [];
        profiles.forEach(user => {
            let scoreComparison = 0;
            for (let i = 0; i < user.scores.length; i++) {
                scoreComparison += Math.abs(user.scores[i] - newUser.scores[i]);
            }
            userOptions.push(scoreComparison);
        })
        let closestMatch = Math.min(...userOptions);
        let matchingProfile = userOptions.indexOf(closestMatch);
        let bestMatch = profiles[matchingProfile];
        profiles.push(newUser);
        res.send(bestMatch);
    }
}
