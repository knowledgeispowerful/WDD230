const baseURL = "https://knowledgeispowerful.github.io/wdd230/";
const linksURL = "https://knowledgeispowerful.github.io/wdd230/data/links.json";

async function getLinkData() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.lessons);
}

const displayLinks = (weeks) => {
    const linksList = document.querySelector(".links-box");

    weeks.forEach ((week) => {
        let currentItem = document.createElement("li");
        currentItem.textContent = `Week ${week.lesson}: `;

        let list = document.createElement("span");

        week.links.forEach((link, index) => {
            let linkAnchor = document.createElement("a");

            linkAnchor.href = link.url;
            linkAnchor.textContent = link.title;

            if (index < week.links.length - 1) {
                linkAnchor.textContent +=", ";
            }

            list.appendChild(linkAnchor)
        })

        currentItem.appendChild(list);
        linksList.appendChild(currentItem);

    })
    
}

getLinkData();
