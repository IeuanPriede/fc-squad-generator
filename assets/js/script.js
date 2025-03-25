document.addEventListener('DOMContentLoaded', function() {
    const formations = [
        "3-1-4-2", "3-4-1-2", "3-4-2-1", "3-4-3", "3-5-2",
        "4-1-2-1-2", "4-1-2-1-2(2)", "4-1-3-2", "4-1-4-1",
        "4-2-1-3", "4-2-2-2", "4-2-3-1", "4-2-3-1(2)", "4-2-4",
        "4-3-1-2", "4-3-2-1", "4-3-3", "4-3-3(2)", "4-3-3(3)", 
        "4-3-3(4)", "4-4-1-1(2)", "4-4-2", "4-4-2(2)", "4-5-1", 
        "4-5-1(2)", "5-2-1-2", "5-2-3", "5-3-2", "5-4-1"
    ];

    const button = document.querySelector('.btn');
    // Selecting the paragraph for displaying formation
    const output = document.getElementById("formation-output");

    button.addEventListener('click', function() {
        const randomFormation = formations[Math.floor(Math.random() * formations.length)];
        output.textContent = randomFormation;
    });
});