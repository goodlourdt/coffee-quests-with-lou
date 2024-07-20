document.addEventListener('DOMContentLoaded', () => {
    const rankingDiv = document.getElementById('ranking');

    const coffeeShop = {
        name: "single origin",
        rank: 1
        favorite drink: flat white
             };
     const coffeeShop = {
        name: "deuces",
        rank: 2
        favorite drink: seasalt caramel latte
             };
     const coffeeShop = {
        name: "candid coffee",
        rank: 3
        favorite drink: vietnamese latte
             };
     const coffeeShop = {
        name: "sspace coffee + bar",
        rank: 4
        favorite drink: spanish latte
             };
     const coffeeShop = {
        name: "salakot",
        rank: 5
        favorite drink: spanish latte
             };
    rankingDiv.innerHTML = `
        <p><strong>${coffeeShop.name}</strong> is ranked #${coffeeShop.rank} in ${coffeeShop.year}!</p>
    `;
});
