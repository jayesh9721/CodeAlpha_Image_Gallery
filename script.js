//select all filter buttons and filterable cards
const filterButtons = document.querySelectorAll(".filter_buttons button" );
const filterableCards = document.querySelectorAll(".filterable_cards .card" );

//define the filterCards function
const filterCards = e => {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");

// iterate over each filterable card
filterableCards.forEach(card =>{
    card.classList.add("hide");
});
};

filterButtons.forEach(button => button.addEventListener("click",filterCards));