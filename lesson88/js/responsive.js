
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById("hamburgerBtn");
x.onclick = toggleMenu;



const date = new Date();


const currentDate = document.getElementById('currentDate');

const fulldate = new Intl.DateTimeFormat('en-Us',{
    dateStyle: "full"
}).format(date);


currentDate.innerHTML = fulldate;




	 