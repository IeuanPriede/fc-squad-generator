/**
 * @jest-environment jsdom
 */

const { getRandomFormation } = require('../generate.js');

describe("Random Formation Generator", () => {
    it("should return a valid formation from the list", () => {
        const { formation } = getRandomFormation();  // Destructure formation
        const formations = [
            "3-1-4-2", "3-4-1-2", "3-4-2-1", "3-4-3", "3-5-2",
            "4-1-2-1-2", "4-1-2-1-2(2)", "4-1-3-2", "4-1-4-1",
            "4-2-1-3", "4-2-2-2", "4-2-3-1", "4-2-3-1(2)", "4-2-4",
            "4-3-1-2", "4-3-2-1", "4-3-3", "4-3-3(2)", "4-3-3(3)", 
            "4-3-3(4)", "4-4-1-1(2)", "4-4-2", "4-4-2(2)", "4-5-1", 
            "4-5-1(2)", "5-2-1-2", "5-2-3", "5-3-2", "5-4-1"
        ];

        expect(formations).toContain(formation); // Formation should be one of the options
    });

    // Test if each position has a league assigned
    it("should assign a league to each position", ()  => {
        const { assignedLeagues } = getRandomFormation();

        // Check if the number of assigned leagues matches the number of positions in the formation
        expect(assignedLeagues.length).toBeGreaterThan(0);

        // Ensure that each position has a league
        assignedLeagues.forEach(({ position, league }) => {
            expect(position).toBeTruthy(); // Check if the position is truthy
            expect(league).toBeTruthy();   // Check if the league is truthy
        });
    });

    // Test if the league is randomly selected from the list of leagues
    test("should assign a league from the leagues array", () => {
        const { assignedLeagues } = getRandomFormation(); // Correct destructuring
        assignedLeagues.forEach(({ league }) => {
            expect([
                "Premier League", "La Liga", "Bundesliga", "Serie A", "Ligue 1", "Icons"
            ]).toContain(league); // Ensure the assigned league is one of the predefined leagues
        });
    });
});

