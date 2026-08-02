/**
 * @jest-environment jsdom
 */

const { getRandomFormation } = require('../generator.js');

describe("Random Formation Generator", () => {
    it("should return a valid formation from the list", () => {
        const { formation } = getRandomFormation();  // Destructure formation

        expect(FORMATIONS).toContain(formation); // Formation should be one of the options
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

    // Test excluded formations
    it("should return an error when every formation is excluded", () => {
        const result = getRandomFormation({
            excludeFormations: Object.keys(FORMATIONS)
        });

        expect(result.error).toBeDefined();
    });

    // Test excluded leagues
    it("should return an error when every league is excluded", () => {
        const result = getRandomFormation({
            excludeLeagues: Object.keys(LEAGUES)
        });

        expect(result.error).toBeDefined();
    });

    // Test if the league is randomly selected from the list of leagues
    test("should assign a league from the leagues array", () => {
        const { assignedLeagues } = getRandomFormation(); // Correct destructuring
        assignedLeagues.forEach(({ league }) => {
            expect(LEAGUES).toContain(league); // Ensure the assigned league is one of the predefined leagues
        });
    });
});

