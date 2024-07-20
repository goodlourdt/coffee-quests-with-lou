document.addEventListener('DOMContentLoaded', () => {
    const rankingDiv = document.getElementById('ranking');

    const coffeeShop = {
        name: "single origin",
        rank: 1
        favorite drink: flat white
        name: "deuces",
        rank: 2
        favorite drink: seasalt caramel latte
        name: "sspace",
        rank: 3
        favorite drink: flat white
        name: "candid coffee",
        rank: 4
        favorite drink: vietnamese latte
        name: "salakot",
        rank: 5
        favorite drink: spanish latte
    };

    rankingDiv.innerHTML = `
        <p><strong>${coffeeShop.name}</strong> is ranked #${coffeeShop.rank} in ${coffeeShop.year}!</p>
    `;
});
