const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");
let el = document.getElementById("close-button");

const chaptersArray = getChapterList() || [];

button.addEventListener("click", () => {
    const chapter = input.value.trim();
    if (chapter !== "") {
        chaptersArray.push(chapter);
        setChapterList();
        displayList(chapter);
        input.value = "";
    } else {
        alert("Please enter a Book and a Chapter");
    }
    input.focus();
});

el.ariaLabel = "Close dialog";

chaptersArray.forEach(displayList);

function displayList(chapter) {
    const li = document.createElement("li");
    const deleteButton = document.createElement("button");

    li.textContent = chapter;
    deleteButton.textContent = "❌";

    li.appendChild(deleteButton);
    list.appendChild(li);

    deleteButton.addEventListener("click", () => {
        list.removeChild(li);
        deleteChapter(chapter);
        input.focus();
    });
}

function setChapterList() {
    localStorage.setItem("list", JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem("list"));
}

function deleteChapter(chapter) {
    const index = chaptersArray.indexOf(chapter);
    if (index > -1) {
        chaptersArray.splice(index, 1);
        setChapterList();
    }
}
