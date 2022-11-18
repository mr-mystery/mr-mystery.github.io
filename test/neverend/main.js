const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            entry.target.classList.toggle("show", entry.isIntersecting)
            // if (entry.isIntersecting) observer.unobserve(entry.target) //Only play animation once
        })
        // console.log(entries)
    },
    {
        threshold: 1,
        // 0 - 1
        // 0 = 0% of elem on screen before animation play (just about to enter screen)
        // 1 = 100% of elem on screen before animation play (fully entered screen)
    }
)

const cards = document.querySelectorAll(".card")
cards.forEach(card => {
    observer.observe(card)
})



const lastCardObserver = new IntersectionObserver(
    entries => {
        const lastCard = entries[0]
        if (!lastCard.isIntersecting) return
        loadNewCards()
        lastCardObserver.unobserve(lastCard.target)
        lastCardObserver.observe(document.querySelector(".card:last-child"))
    },
    {
        rootMargin: "100px",
        // Changes root element's bounding box
        // 50px makes the code run 50px before entering screen 
        // -50px makes the code run 50px after entering screen 
    }
)

const cardContainer = document.querySelector(".card-container")
function loadNewCards() {
    for (let i = 0; i < 10; i++) {
        let card = document.createElement("div")
        card.textContent = "Not even close"
        card.classList.add("card")
        observer.observe(card)
        cardContainer.append(card)
    }
}

lastCardObserver.observe(document.querySelector(".card:last-child"))