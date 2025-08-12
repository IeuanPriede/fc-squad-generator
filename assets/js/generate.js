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

    // Formation slot coordinates (percent from left/top). Add more as needed.
    const formationSlots = {
    "4-3-3": [
        {pos:"GK", x:50, y:92},
        {pos:"RB", x:82, y:78}, {pos:"CB", x:62, y:80}, {pos:"CB", x:38, y:80}, {pos:"LB", x:18, y:78},
        {pos:"CM", x:70, y:58}, {pos:"CM", x:50, y:60}, {pos:"CM", x:30, y:58},
        {pos:"RW", x:78, y:32}, {pos:"ST", x:50, y:20}, {pos:"LW", x:22, y:32}
    ],
    "4-4-2": [
        {pos:"GK", x:50, y:92},
        {pos:"RB", x:82, y:78}, {pos:"CB", x:62, y:80}, {pos:"CB", x:38, y:80}, {pos:"LB", x:18, y:78},
        {pos:"RM", x:78, y:56}, {pos:"CM", x:58, y:58}, {pos:"CM", x:42, y:58}, {pos:"LM", x:22, y:56},
        {pos:"ST", x:58, y:28}, {pos:"ST", x:42, y:28}
    ],
    "3-5-2": [
        {pos:"GK", x:50, y:92},
        {pos:"CB", x:60, y:80}, {pos:"CB", x:50, y:78}, {pos:"CB", x:40, y:80},
        {pos:"RM", x:80, y:58}, {pos:"CDM", x:60, y:60}, {pos:"CM", x:50, y:56}, {pos:"CDM", x:40, y:60}, {pos:"LM", x:20, y:58},
        {pos:"ST", x:56, y:28}, {pos:"ST", x:44, y:28}
    ],
    "5-3-2": [
        {pos:"GK", x:50, y:92},
        {pos:"RB", x:82, y:78}, {pos:"CB", x:66, y:80}, {pos:"CB", x:50, y:82}, {pos:"CB", x:34, y:80}, {pos:"LB", x:18, y:78},
        {pos:"CM", x:62, y:58}, {pos:"CM", x:50, y:56}, {pos:"CM", x:38, y:58},
        {pos:"ST", x:56, y:28}, {pos:"ST", x:44, y:28}
    ],
    "4-2-3-1": [
        {pos:"GK", x:50, y:92},
        {pos:"RB", x:82, y:78}, {pos:"CB", x:62, y:80}, {pos:"CB", x:38, y:80}, {pos:"LB", x:18, y:78},
        {pos:"CDM", x:58, y:64}, {pos:"CDM", x:42, y:64},
        {pos:"CAM", x:70, y:50}, {pos:"CAM", x:50, y:48}, {pos:"CAM", x:30, y:50},
        {pos:"ST", x:50, y:24}
    ],
    "3-4-3": [
        {pos:"GK", x:50, y:92},
        {pos:"CB", x:62, y:80}, {pos:"CB", x:50, y:80}, {pos:"CB", x:38, y:80},
        {pos:"RM", x:78, y:60}, {pos:"CM", x:58, y:58}, {pos:"CM", x:42, y:58}, {pos:"LM", x:22, y:60},
        {pos:"RW", x:72, y:32}, {pos:"ST", x:50, y:22}, {pos:"LW", x:28, y:32}
    ],
    // map common variants to base
    "4-3-3(2)": "4-3-3",
    "4-3-3(3)": "4-3-3",
    "4-3-3(4)": "4-3-3",
    "4-2-3-1(2)": "4-2-3-1",
    "4-1-2-1-2": [
        {pos:"GK", x:50, y:92},
        {pos:"RB", x:82, y:78}, {pos:"CB", x:62, y:80}, {pos:"CB", x:38, y:80}, {pos:"LB", x:18, y:78},
        {pos:"CDM", x:50, y:66},
        {pos:"RM", x:72, y:54}, {pos:"LM", x:28, y:54},
        {pos:"CAM", x:50, y:42},
        {pos:"ST", x:56, y:26}, {pos:"ST", x:44, y:26}
    ],
    "4-1-2-1-2(2)": "4-1-2-1-2"
    };

    // Accept close equivalents (e.g., RW ↔ RM, LW ↔ LM)
    const slotAliases = {
    RW: ["RW","RM"], RM: ["RM","RW"],
    LW: ["LW","LM"], LM: ["LM","LW"],
    CM: ["CM"], CDM: ["CDM"], CAM: ["CAM"],
    ST: ["ST"], CF: ["ST","CF"],
    CB: ["CB"], RB: ["RB"], LB: ["LB"],
    RWB: ["RWB","RB"], LWB: ["LWB","LB"],
    GK: ["GK"], RWG: ["RW"] // extend if needed
    };

    function renderFormationPitch(formation, assignedLeagues) {
    const key = typeof formationSlots[formation] === "string"
        ? formationSlots[formation]
        : formation;
    const layout = formationSlots[key];
    if (!layout) return null;

    const pool = [...assignedLeagues]; // copy we can mutate

    const tokens = layout.map(slot => {
        const candidates = slotAliases[slot.pos] || [slot.pos];
        const idx = pool.findIndex(it => candidates.includes(it.position));
        if (idx === -1) return null; // missing; will skip
        const picked = pool.splice(idx, 1)[0];
        return `
        <div class="player" style="left:${slot.x}%; top:${slot.y}%">
            <div class="dot">${picked.position}</div>
            <div class="league">${picked.league}</div>
        </div>`;
    }).filter(Boolean).join("");

    return `<div class="pitch">${tokens}</div>`;
    }

    document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.btn').addEventListener('click', function () {
        const { formation, assignedLeagues } = getRandomFormation();

        // Try pitch; if not mapped, fall back to list
        const pitchHTML = renderFormationPitch(formation, assignedLeagues);
        const listHTML = `
        <div class="section-label">Assigned Leagues</div>
        <ul class="assignments list-unstyled">
            ${assignedLeagues.map(({ position, league }) => `
            <li><span class="badge bg-secondary me-2">${position}</span>${league}</li>
            `).join("")}
        </ul>`;

        document.getElementById("formation-output").innerHTML = `
        <div class="formation-name">${formation}</div>
        ${pitchHTML || listHTML}
        `;
    });
});

// Export the function so Jest can test it
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { getRandomFormation };
}