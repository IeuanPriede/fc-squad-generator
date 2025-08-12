function getRandomFormation(options = {}) {
    const { excludeFormations = [], excludeLeagues = [] } = options;

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

    const allLeagues = ["Premier League","La Liga","Bundesliga","Serie A","Ligue 1","Icons","ROW"];

    // Filter formations
    const eligibleFormations = Object.keys(formations).filter(f => !excludeFormations.includes(f));
    if (eligibleFormations.length === 0) {
        return { error: "All formations are excluded. Adjust filters." };
    }

    // Filter leagues
    const allowedLeagues = allLeagues.filter(l => !excludeLeagues.includes(l));
    if (allowedLeagues.length === 0) {
        return { error: "All leagues are excluded. Adjust filters." };
    }

    // Pick a formation
    const randomFormation = eligibleFormations[Math.floor(Math.random() * eligibleFormations.length)];
    const positions = formations[randomFormation];

    // Assign leagues
    const assignedLeagues = positions.map(position => {
        const rnd = Math.floor(Math.random() * allowedLeagues.length);
        return { position, league: allowedLeagues[rnd] };
    });

    return { formation: randomFormation, assignedLeagues };
}

    // Formation slot coordinates (percent from left/top). Add more as needed.
    const formationSlots = {
    // 3-back formations
    "3-1-4-2": [
        {pos:"GK", x:50, y:92},
        {pos:"CB", x:70, y:72}, {pos:"CB", x:50, y:72}, {pos:"CB", x:30, y:72},
        {pos:"CDM", x:50, y:52},
        {pos:"RM", x:82, y:44}, {pos:"CM", x:62, y:46}, {pos:"CM", x:38, y:46}, {pos:"LM", x:18, y:44},
        {pos:"ST", x:62, y:12}, {pos:"ST", x:38, y:12}
    ],
    "3-4-1-2": [
        {pos:"GK", x:50, y:92},
        {pos:"CB", x:70, y:72}, {pos:"CB", x:50, y:72}, {pos:"CB", x:30, y:72},
        {pos:"RM", x:82, y:44}, {pos:"CM", x:62, y:46}, {pos:"CM", x:38, y:46}, {pos:"LM", x:18, y:44},
        {pos:"CAM", x:50, y:35},
        {pos:"ST", x:62, y:12}, {pos:"ST", x:38, y:12}
    ],
    "3-4-2-1": [
        {pos:"GK", x:50, y:92},
        {pos:"CB", x:70, y:72}, {pos:"CB", x:50, y:72}, {pos:"CB", x:30, y:72},
        {pos:"RM", x:82, y:44}, {pos:"CM", x:62, y:46}, {pos:"CM", x:38, y:46}, {pos:"LM", x:18, y:44},
        {pos:"CAM", x:70, y:25}, {pos:"CAM", x:30, y:25},
        {pos:"ST", x:50, y:12}
    ],
    "3-4-3": [
        {pos:"GK", x:50, y:92},
        {pos:"CB", x:70, y:72}, {pos:"CB", x:50, y:72}, {pos:"CB", x:30, y:72},
        {pos:"RM", x:82, y:44}, {pos:"CM", x:62, y:46}, {pos:"CM", x:38, y:46}, {pos:"LM", x:18, y:44},
        {pos:"RW", x:78, y:23}, {pos:"ST", x:50, y:12}, {pos:"LW", x:22, y:23}
    ],
    "3-5-2": [
        {pos:"GK", x:50, y:92},
        {pos:"CB", x:70, y:72}, {pos:"CB", x:50, y:72}, {pos:"CB", x:30, y:72},
        {pos:"RM", x:82, y:44}, {pos:"CDM", x:62, y:52}, {pos:"CAM", x:50, y:35}, {pos:"CDM", x:38, y:52}, {pos:"LM", x:18, y:44},
        {pos:"ST", x:62, y:12}, {pos:"ST", x:38, y:12}
    ],
    // 4-back formations
    "4-1-2-1-2": [
        {pos:"GK", x:50, y:92},
        {pos:"RB", x:82, y:70}, {pos:"CB", x:62, y:72}, {pos:"CB", x:38, y:72}, {pos:"LB", x:18, y:70},
        {pos:"CDM", x:50, y:54},
        {pos:"RM", x:82, y:44}, {pos:"LM", x:18, y:44},
        {pos:"CAM", x:50, y:32},
        {pos:"ST", x:62, y:12}, {pos:"ST", x:38, y:12}
    ],
    "4-1-2-1-2(2)": [
        {pos:"GK", x:50, y:92},
        {pos:"RB", x:82, y:70}, {pos:"CB", x:62, y:72}, {pos:"CB", x:38, y:72}, {pos:"LB", x:18, y:70},
        {pos:"CDM", x:50, y:54},
        {pos:"CM", x:70, y:46}, {pos:"CM", x:30, y:46},
        {pos:"CAM", x:50, y:32},
        {pos:"ST", x:62, y:12}, {pos:"ST", x:38, y:12}
    ],
    "4-1-3-2": [
        {pos:"GK", x:50, y:92},
        {pos:"RB", x:82, y:70}, {pos:"CB", x:62, y:72}, {pos:"CB", x:38, y:72}, {pos:"LB", x:18, y:70},
        {pos:"CDM", x:50, y:58},
        {pos:"RM", x:82, y:44}, {pos:"CM", x:50, y:42}, {pos:"LM", x:18, y:44},
        {pos:"ST", x:62, y:12}, {pos:"ST", x:38, y:12}
    ],
    "4-1-4-1": [
        {pos:"GK", x:50, y:92},
        {pos:"RB", x:82, y:70}, {pos:"CB", x:62, y:72}, {pos:"CB", x:38, y:72}, {pos:"LB", x:18, y:70},
        {pos:"CDM", x:50, y:58},
        {pos:"RM", x:82, y:44}, {pos:"CM", x:62, y:42}, {pos:"CM", x:38, y:42}, {pos:"LM", x:18, y:44},
        {pos:"ST", x:50, y:12}
    ],
    "4-2-1-3": [
        {pos:"GK", x:50, y:92},
        {pos:"RB", x:82, y:70}, {pos:"CB", x:62, y:72}, {pos:"CB", x:38, y:72}, {pos:"LB", x:18, y:70},
        {pos:"CDM", x:72, y:52}, {pos:"CDM", x:28, y:52},
        {pos:"CAM", x:50, y:35},
        {pos:"RW", x:78, y:23}, {pos:"ST", x:50, y:12}, {pos:"LW", x:22, y:23}
    ],
    "4-2-2-2": [
        {pos:"GK", x:50, y:92},
        {pos:"RB", x:82, y:70}, {pos:"CB", x:62, y:72}, {pos:"CB", x:38, y:72}, {pos:"LB", x:18, y:70},
        {pos:"CDM", x:72, y:52}, {pos:"CDM", x:28, y:52},
        {pos:"CAM", x:70, y:32}, {pos:"CAM", x:30, y:32},
        {pos:"ST", x:62, y:12}, {pos:"ST", x:38, y:12}
    ],
    "4-3-3": [
        {pos:"GK", x:50, y:92},
        {pos:"RB", x:82, y:70}, {pos:"CB", x:62, y:72}, {pos:"CB", x:38, y:72}, {pos:"LB", x:18, y:70},
        {pos:"CM", x:70, y:46}, {pos:"CM", x:50, y:46}, {pos:"CM", x:30, y:46},
        {pos:"RW", x:78, y:23}, {pos:"ST", x:50, y:12}, {pos:"LW", x:22, y:23}
    ],
    "4-3-3(2)": [
        {pos:"GK", x:50, y:92},
        {pos:"RB", x:82, y:70}, {pos:"CB", x:62, y:72}, {pos:"CB", x:38, y:72}, {pos:"LB", x:18, y:70},
        {pos:"CDM", x:50, y:52}, {pos:"CM", x:70, y:46}, {pos:"CM", x:30, y:46},
        {pos:"RW", x:78, y:23}, {pos:"ST", x:50, y:12}, {pos:"LW", x:22, y:23}
    ],
    "4-3-3(3)": [
        {pos:"GK", x:50, y:92},
        {pos:"RB", x:82, y:70}, {pos:"CB", x:62, y:72}, {pos:"CB", x:38, y:72}, {pos:"LB", x:18, y:70},
        {pos:"CM", x:50, y:46}, {pos:"CDM", x:72, y:52}, {pos:"CDM", x:28, y:52},
        {pos:"RW", x:78, y:23}, {pos:"ST", x:50, y:12}, {pos:"LW", x:22, y:23}
    ],
    "4-3-3(4)": [
        {pos:"GK", x:50, y:92},
        {pos:"RB", x:82, y:70}, {pos:"CB", x:62, y:72}, {pos:"CB", x:38, y:72}, {pos:"LB", x:18, y:70},
        {pos:"CM", x:70, y:46}, {pos:"CM", x:30, y:46}, {pos:"CAM", x:50, y:35},
        {pos:"RW", x:78, y:23}, {pos:"ST", x:50, y:12}, {pos:"LW", x:22, y:23}
    ],
    "4-4-2": [
        {pos:"GK", x:50, y:92},
        {pos:"RB", x:82, y:70}, {pos:"CB", x:62, y:72}, {pos:"CB", x:38, y:72}, {pos:"LB", x:18, y:70},
        {pos:"RM", x:82, y:44}, {pos:"CM", x:62, y:46}, {pos:"CM", x:38, y:46}, {pos:"LM", x:18, y:44},
        {pos:"ST", x:62, y:12}, {pos:"ST", x:38, y:12}
    ],
    "4-2-3-1": [
        {pos:"GK", x:50, y:92},
        {pos:"RB", x:82, y:70}, {pos:"CB", x:62, y:72}, {pos:"CB", x:38, y:72}, {pos:"LB", x:18, y:70},
        {pos:"CDM", x:72, y:52}, {pos:"CDM", x:28, y:52},
        {pos:"CAM", x:70, y:30}, {pos:"CAM", x:50, y:35}, {pos:"CAM", x:30, y:30},
        {pos:"ST", x:50, y:12}
    ],
    // 5-back formations
    "5-3-2": [
        {pos:"GK", x:50, y:92},
        {pos:"RB", x:82, y:70}, {pos:"CB", x:60, y:72}, {pos:"CB", x:50, y:72}, {pos:"CB", x:40, y:72}, {pos:"LB", x:18, y:70},
        {pos:"CM", x:62, y:53}, {pos:"CM", x:50, y:53}, {pos:"CM", x:38, y:53},
        {pos:"ST", x:56, y:28}, {pos:"ST", x:44, y:28}
    ],
    "5-2-1-2": [
        {pos:"GK", x:50, y:92},
        {pos:"RB", x:82, y:70}, {pos:"CB", x:60, y:72}, {pos:"CB", x:50, y:72}, {pos:"CB", x:40, y:72}, {pos:"LB", x:18, y:70},
        {pos:"CM", x:58, y:58}, {pos:"CM", x:42, y:58}, {pos:"CAM", x:50, y:55},
        {pos:"ST", x:56, y:28}, {pos:"ST", x:44, y:28}
    ],
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
        const excludedLeagues = Array.from(document.querySelectorAll('.league-filter:checked')).map(cb => cb.value);
        const excludedFormations = Array.from(document.querySelectorAll('#exclude-formations option:checked')).map(o => o.value);

        const result = getRandomFormation({
        excludeFormations: excludedFormations,
        excludeLeagues: excludedLeagues
        });

        const out = document.getElementById("formation-output");

        if (result.error) {
        out.innerHTML = `<div class="alert alert-warning mb-0">${result.error}</div>`;
        return;
        }

        const { formation, assignedLeagues } = result;

        const pitchHTML = renderFormationPitch(formation, assignedLeagues);
        const listHTML = `
        <div class="section-label">Assigned Leagues</div>
        <ul class="assignments list-unstyled">
            ${assignedLeagues.map(({ position, league }) => `
            <li><span class="badge bg-secondary me-2">${position}</span>${league}</li>
            `).join("")}
        </ul>`;

        out.innerHTML = `
        <div class="formation-name">${formation}</div>
        ${pitchHTML || listHTML}
        `;
    });
});

// Export the function so Jest can test it
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { getRandomFormation };
}