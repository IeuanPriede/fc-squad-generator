document.addEventListener('DOMContentLoaded', function() {
    // Event listener for button click to generate formation
    document.querySelector('.btn').addEventListener('click', function() {
        const { formation, assignedLeagues } = getRandomFormation();
        document.getElementById("formation-output").innerHTML = `
            ${formation} <br>
            Assigned Leagues: <br>
            ${assignedLeagues.map(item => `${item.position}: ${item.league}`).join("<br>")}
        `;
    });

    function getRandomFormation() {
        const formations = {
            "3-1-4-2": ["GK", "CB", "CB", "CB", "CDM", "RM", "CM", "CM", "LM", "ST", "ST"],
            "3-4-1-2": ["GK", "CB", "CB", "CB", "RM", "CM", "CM", "LM", "CAM", "ST", "ST"],
            "3-4-2-1": ["GK", "CB", "CB", "CB", "RM", "CM", "CM", "LM", "CAM", "CAM", "ST"],
            "3-4-3": ["GK", "CB", "CB", "CB", "RM", "CM", "CM", "LM", "RW", "ST", "LW"],
            "3-5-2": ["GK", "CB", "CB", "CB", "RM", "CDM", "CDM", "CAM", "LM", "ST", "ST"],
            "4-1-2-1-2": ["GK", "RB", "CB", "CB", "LB", "CDM", "RM", "LM", "CAM", "ST", "ST"],
            "4-1-2-1-2(2)": ["GK", "RB", "CB", "CB", "LB", "CDM", "CM", "CM", "CAM", "ST", "ST"],
            "4-1-3-2": ["GK", "RB", "CB", "CB", "LB", "CDM", "RM", "CM", "LM", "ST", "ST"],
            "4-1-4-1": ["GK", "RB", "CB", "CB", "LB", "CDM", "RM", "CM", "CM", "LM", "ST"],
            "4-2-1-3": ["GK", "RB", "CB", "CB", "LB", "CDM", "CDM", "CAM", "RW", "ST", "LW"],
            "4-2-2-2": ["GK", "RB", "CB", "CB", "LB", "CDM", "CDM", "CAM", "CAM", "ST", "ST"],
            "4-2-3-1": ["GK", "RB", "CB", "CB", "LB", "CDM", "CDM", "CAM", "CAM", "CAM", "ST"],
            "4-2-3-1(2)": ["GK", "RB", "CB", "CB", "LB", "CDM", "CDM", "RM", "LM", "CAM", "ST"],
            "4-2-4": ["GK", "RB", "CB", "CB", "LB", "CM", "CM", "RW", "LW", "ST", "ST"],
            "4-3-1-2": ["GK", "RB", "CB", "CB", "LB", "CM", "CM", "CM", "CAM", "ST", "ST"],
            "4-3-2-1": ["GK", "RB", "CB", "CB", "LB", "CM", "CM", "CM", "CAM", "CAM", "ST"],
            "4-3-3": ["GK", "RB", "CB", "CB", "LB", "CM", "CM", "CM", "RW", "ST", "LW"],
            "4-3-3(2)": ["GK", "RB", "CB", "CB", "LB", "CDM", "CM", "CM", "RW", "ST", "LW"],
            "4-3-3(3)": ["GK", "RB", "CB", "CB", "LB", "CDM", "CDM", "CM", "RW", "ST", "LW"],
            "4-3-3(4)": ["GK", "RB", "CB", "CB", "LB", "CM", "CM", "CAM", "RW", "ST", "LW"],
            "4-4-1-1(2)": ["GK", "RB", "CB", "CB", "LB", "RM", "CM", "CM", "LM", "CAM", "ST"],
            "4-4-2": ["GK", "RB", "CB", "CB", "LB", "RM", "CM", "CM", "LM", "ST", "ST"],
            "4-4-2(2)": ["GK", "RB", "CB", "CB", "LB", "RM", "CDM", "CDM", "LM", "ST", "ST"],
            "4-5-1": ["GK", "RB", "CB", "CB", "LB", "RM", "CM", "LM", "CAM", "CAM", "ST"],
            "4-5-1(2)": ["GK", "RB", "CB", "CB", "LB", "RM", "CM", "CM", "CM", "LM", "ST"],
            "5-2-1-2": ["GK", "RB", "CB", "CB", "CB", "LB", "CM", "CM", "CAM", "ST", "ST"],
            "5-2-3": ["GK", "RB", "CB", "CB", "CB", "LB", "CM", "CM", "RW", "ST", "LW"],
            "5-3-2": ["GK", "RB", "CB", "CB", "CB", "LB", "CDM", "CM", "CM", "ST", "ST"],
            "5-4-1": ["GK", "RB", "CB", "CB", "CB", "LB", "RM", "CM", "CM", "LM", "ST"]
        };

        // Convert object keys into an array
        const formationKeys = Object.keys(formations);

        // Get a random formation
        const randomFormation = formationKeys[Math.floor(Math.random() * formationKeys.length)];

        const positions = formations[randomFormation];

        const leagues = [
            "Premier League", "La Liga", "Bundesliga", "Serie A", "Ligue 1","Icons", "ROW"
        ];

        // Randomly assign a league to each position in the selected formation
        const assignedLeagues = positions.map(position => {
            const randomLeague = leagues[Math.floor(Math.random() * leagues.length)];
            return { position, league: randomLeague };
        });

        return { formation: randomFormation, assignedLeagues };
    }
});

// Export the function so Jest can test it
module.exports = { getRandomFormation };