function getRandomFormation(options = {}) {
    const { excludeFormations = [], excludeLeagues = [] } = options;

    // Filter formations
    const eligibleFormations = Object.keys(FORMATIONS).filter(f => !excludeFormations.includes(f));
    if (eligibleFormations.length === 0) {
        return { error: "All formations are excluded. Adjust filters." };
    }

    // Filter leagues
    const allowedLeagues = LEAGUES.filter(l => !excludeLeagues.includes(l));
    if (allowedLeagues.length === 0) {
        return { error: "All leagues are excluded. Adjust filters." };
    }

    // Pick a formation
    const randomFormation = eligibleFormations[Math.floor(Math.random() * eligibleFormations.length)];
    const positions = FORMATIONS[randomFormation];

    // Assign leagues
    const assignedLeagues = positions.map(position => {
        const rnd = Math.floor(Math.random() * allowedLeagues.length);
        return { position, league: allowedLeagues[rnd] };
    });

    return { formation: randomFormation, assignedLeagues, allowedLeagues };
}

function generateBench(allowedLeagues, count = 7) {
    return Array.from({ length: count }, () => {
        const randomLeague = allowedLeagues[Math.floor(Math.random() * allowedLeagues.length)];
        return randomLeague;
    });
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
     "4-2-3-1": [
        {pos:"GK", x:50, y:92},
        {pos:"RB", x:82, y:70}, {pos:"CB", x:62, y:72}, {pos:"CB", x:38, y:72}, {pos:"LB", x:18, y:70},
        {pos:"CDM", x:72, y:52}, {pos:"CDM", x:28, y:52},
        {pos:"CAM", x:70, y:30}, {pos:"CAM", x:50, y:35}, {pos:"CAM", x:30, y:30},
        {pos:"ST", x:50, y:12}
    ],
    "4-2-3-1(2)": [
        {pos:"GK", x:50, y:92},
        {pos:"RB", x:82, y:70}, {pos:"CB", x:62, y:72}, {pos:"CB", x:38, y:72}, {pos:"LB", x:18, y:70},
        {pos:"CDM", x:66, y:52}, {pos:"CDM", x:34, y:52},
        {pos:"RM", x:82, y:44}, {pos:"LM", x:18, y:44}, {pos:"CAM", x:50, y:35},
        {pos:"ST", x:50, y:12}
    ],
    "4-2-4": [
        {pos:"GK", x:50, y:92},
        {pos:"RB", x:82, y:70}, {pos:"CB", x:62, y:72}, {pos:"CB", x:38, y:72}, {pos:"LB", x:18, y:70},
        {pos:"CM", x:62, y:46}, {pos:"CM", x:38, y:46},
        {pos:"RW", x:78, y:23}, {pos:"LW", x:22, y:23},
        {pos:"ST", x:62, y:12}, {pos:"ST", x:38, y:12}
    ],
    "4-3-1-2": [
        {pos:"GK", x:50, y:92},
        {pos:"RB", x:82, y:70}, {pos:"CB", x:62, y:72}, {pos:"CB", x:38, y:72}, {pos:"LB", x:18, y:70},
        {pos:"CM", x:70, y:46}, {pos:"CM", x:50, y:52}, {pos:"CM", x:30, y:46},
        {pos:"CAM", x:50, y:32},
        {pos:"ST", x:62, y:12}, {pos:"ST", x:38, y:12}
    ],
    "4-3-2-1": [
        {pos:"GK", x:50, y:92},
        {pos:"RB", x:82, y:70}, {pos:"CB", x:62, y:72}, {pos:"CB", x:38, y:72}, {pos:"LB", x:18, y:70},
        {pos:"CM", x:70, y:48}, {pos:"CM", x:50, y:52}, {pos:"CM", x:30, y:48},
        {pos:"CAM", x:70, y:25}, {pos:"CAM", x:30, y:25},
        {pos:"ST", x:50, y:12}
    ],
    "4-3-3": [
        {pos:"GK", x:50, y:92},
        {pos:"RB", x:82, y:70}, {pos:"CB", x:62, y:72}, {pos:"CB", x:38, y:72}, {pos:"LB", x:18, y:70},
        {pos:"CM", x:70, y:46}, {pos:"CM", x:50, y:50}, {pos:"CM", x:30, y:46},
        {pos:"RW", x:78, y:23}, {pos:"ST", x:50, y:12}, {pos:"LW", x:22, y:23}
    ],
    "4-3-3(2)": [
        {pos:"GK", x:50, y:92},
        {pos:"RB", x:82, y:70}, {pos:"CB", x:62, y:72}, {pos:"CB", x:38, y:72}, {pos:"LB", x:18, y:70},
        {pos:"CDM", x:50, y:54}, {pos:"CM", x:70, y:46}, {pos:"CM", x:30, y:46},
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
    "4-4-1-1": [
        {pos:"GK", x:50, y:92},
        {pos:"RB", x:82, y:70}, {pos:"CB", x:62, y:72}, {pos:"CB", x:38, y:72}, {pos:"LB", x:18, y:70},
        {pos:"RM", x:82, y:44}, {pos:"CM", x:62, y:50}, {pos:"CM", x:38, y:50}, {pos:"LM", x:18, y:44},
        {pos:"CAM", x:50, y:32},
        {pos:"ST", x:50, y:12}
    ],
    "4-4-2": [
        {pos:"GK", x:50, y:92},
        {pos:"RB", x:82, y:70}, {pos:"CB", x:62, y:72}, {pos:"CB", x:38, y:72}, {pos:"LB", x:18, y:70},
        {pos:"RM", x:82, y:44}, {pos:"CM", x:62, y:46}, {pos:"CM", x:38, y:46}, {pos:"LM", x:18, y:44},
        {pos:"ST", x:62, y:12}, {pos:"ST", x:38, y:12}
    ],
    "4-4-2(2)": [
        {pos:"GK", x:50, y:92},
        {pos:"RB", x:82, y:70}, {pos:"CB", x:62, y:72}, {pos:"CB", x:38, y:72}, {pos:"LB", x:18, y:70},
        {pos:"RM", x:82, y:44}, {pos:"CDM", x:62, y:52}, {pos:"CDM", x:38, y:52}, {pos:"LM", x:18, y:44},
        {pos:"ST", x:62, y:12}, {pos:"ST", x:38, y:12}
    ],
    "4-5-1": [
        {pos:"GK", x:50, y:92},
        {pos:"RB", x:82, y:70}, {pos:"CB", x:62, y:72}, {pos:"CB", x:38, y:72}, {pos:"LB", x:18, y:70},
        {pos:"RM", x:82, y:44}, {pos:"CM", x:50, y:46}, {pos:"LM", x:18, y:44},
        {pos:"CAM", x:70, y:25}, {pos:"CAM", x:30, y:25},
        {pos:"ST", x:50, y:12}
    ],
    "4-5-1(2)": [
        {pos:"GK", x:50, y:92},
        {pos:"RB", x:82, y:70}, {pos:"CB", x:62, y:72}, {pos:"CB", x:38, y:72}, {pos:"LB", x:18, y:70},
        {pos:"RM", x:82, y:38}, {pos:"CM", x:68, y:46}, {pos:"CM", x:50, y:50}, {pos:"CM", x:32, y:46}, {pos:"LM", x:18, y:38},
        {pos:"ST", x:50, y:12}
    ],
    // 5-back formations
    "5-2-1-2": [
        {pos:"GK", x:50, y:92},
        {pos:"RB", x:86, y:68}, {pos:"CB", x:68, y:71}, {pos:"CB", x:50, y:74}, {pos:"CB", x:32, y:71}, {pos:"LB", x:14, y:68},
        {pos:"CM", x:62, y:48}, {pos:"CM", x:38, y:48},
        {pos:"CAM", x:50, y:31},
        {pos:"ST", x:62, y:12}, {pos:"ST", x:38, y:12}
    ],
    "5-2-3": [
        {pos:"GK", x:50, y:92},
        {pos:"RB", x:86, y:68}, {pos:"CB", x:68, y:71}, {pos:"CB", x:50, y:74}, {pos:"CB", x:32, y:71}, {pos:"LB", x:14, y:68},
        {pos:"CM", x:62, y:46}, {pos:"CM", x:38, y:46},
        {pos:"RW", x:78, y:23}, {pos:"ST", x:50, y:12}, {pos:"LW", x:22, y:23}
    ],
    "5-3-2": [
        {pos:"GK", x:50, y:92},
        {pos:"RB", x:86, y:68}, {pos:"CB", x:68, y:71}, {pos:"CB", x:50, y:74}, {pos:"CB", x:32, y:71}, {pos:"LB", x:14, y:68},
        {pos:"CDM", x:50, y:54}, {pos:"CM", x:70, y:46}, {pos:"CM", x:30, y:46},
        {pos:"ST", x:62, y:12}, {pos:"ST", x:38, y:12}
    ],
    "5-4-1": [
        {pos:"GK", x:50, y:92},
        {pos:"RB", x:86, y:68}, {pos:"CB", x:68, y:71}, {pos:"CB", x:50, y:74}, {pos:"CB", x:32, y:71}, {pos:"LB", x:14, y:68},
        {pos:"RM", x:82, y:44}, {pos:"CM", x:62, y:46}, {pos:"CM", x:38, y:46}, {pos:"LM", x:18, y:44},
        {pos:"ST", x:50, y:12}
    ]
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

        const { formation, assignedLeagues, allowedLeagues } = result;

        const bench = generateBench(allowedLeagues, 7);

        const pitchHTML = renderFormationPitch(formation, assignedLeagues);

        const benchHTML = `
        <div class="section-label mt-3">Substitutes</div>
        <ul class="assignments list-unstyled">
            ${bench.map(league => `
                <li><span class="badge bg-warning text-dark me-2">SUB</span>${league}</li>
            `).join("")}
        </ul>`;

        out.innerHTML = `
        <div class="formation-name">${formation}</div>
        ${pitchHTML}
        ${benchHTML}
        `;
    });
});

// Export the function so Jest can test it
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { getRandomFormation };
}