    const hambutton = document.querySelector('.ham');
    const mainnav = document.querySelector('.navigation')
   

    hambutton.addEventListener('click', () => {
        mainnav.classList.toggle('responsive')
    }, false);


    var date = new Date();
    var d = new Date();
    // document.getElementById("day").innerHTML = d.getDay();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"
    ];
    document.getElementById("day").innerHTML = days[d.getDay()];
    year = d.getFullYear();
    month = months[d.getMonth()];
    DayNum = d.getDate();
    date= DayNum + " " + month + " " + year;
    document.getElementById('date').textContent = date;

    const element = document.getElementById("banner");
    if (days[d.getDay()]=="Friday"){
        element.classList.add("showme");
    } else {
        element.classList.add("hideme");
    }

    function myFunction(x) {
        x.classList.toggle("change");
    }

