/**
 * @jest-environment jsdom
 */

const { getRandomFormation } = require('../generate');

describe("Random Formation Generator", () => {
    test("should return a valid formation from the list", () => {
        const formations = [
            "3-1-4-2", "3-4-1-2", "3-4-2-1", "3-4-3", "3-5-2",
            "4-1-2-1-2", "4-1-2-1-2(2)", "4-1-3-2", "4-1-4-1",
            "4-2-1-3", "4-2-2-2", "4-2-3-1", "4-2-3-1(2)", "4-2-4",
            "4-3-1-2", "4-3-2-1", "4-3-3", "4-3-3(2)", "4-3-3(3)", 
            "4-3-3(4)", "4-4-1-1(2)", "4-4-2", "4-4-2(2)", "4-5-1", 
            "4-5-1(2)", "5-2-1-2", "5-2-3", "5-3-2", "5-4-1"
        ];

        const formation = getRandomFormation();
        expect(formations).toContain(formation); // Formation should be one of the options
    });
});

