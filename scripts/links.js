const baseURL = "https://github.com/knowledgeispowerful/wdd230/";
const linksURL = "https://github.com/knowledgeispowerful/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);
}


const displayLinks = (weeks) => {

    const cardElement = document.querySelector(".card");

    weeks.lesson.forEach((week) => {
        let card = document.createElement("div");

        let lesson = document.createElement("h3");
        lesson.textContent = ` Lesson ${week.lesson} `;
        card.appendChild(lesson);
        
        week.links.forEach((link) => {
            let anchor = document.createElement("a");
            anchor.href = link.url.startsWith('http') ? link.url : baseURL + link.url;
            anchor.textContent = ` - ${link.title} `;
            lesson.appendChild(anchor)
        });
        
        cardElement.appendChild(card)
    });

}   

getLinks();
