const requestURL = 'data/rentals.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject); // temporary checking for valid response and data parsing

        const rentals = jsonObject['rentals'];

        for (let i = 0; i < rentals.length; i++) {

            let item = document.createElement('article');
            let info = document.createElement('card');
            let h1 = document.createElement('h1');
            let type = document.createElement('h3');
            let description = document.createElement('h3');
            let image = document.createElement('img');

            type.textContent = rentals[i].type;
            h1.textContent = rentals[i].name;
            console.log("name " + rentals[i].name);
            description.textContent = rentals[i].description + "\n";

            image.setAttribute('src', "images/" + rentals[i].photo);
            image.setAttribute('alt', rentals[i].name + ' picture');
            info.appendChild(h1);
            info.appendChild(description);
        

            item.appendChild(info);
            item.appendChild(image);
            document.querySelector('div.items').appendChild(item);

        }
    });


const path = 'data/rentals.json';

fetch(path)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);

        const rentals = jsonObject['rentals'];

        let table = document.createElement('table');
        let tr= document.createElement('tr');
        let trow= document.createElement('th');
        let row= document.createElement('td');
        
        tr = table.insertRow(0);
        trow = tr.insertCell(0);
        trow.innerHTML = "Rental Type";
        trow = tr.insertCell(1);
        trow.innerHTML = "Max People";
        trow = tr.insertCell(2);
        trow.innerHTML = "Reservation";
        trow.colSpan = 2;
        trow = tr.insertCell(3);
        trow.innerHTML = "Walk-In";
        trow.colSpan = 2;

        
        for (let i = 0; i < rentals.length; i++) {
            tr = table.insertRow(1);

            row = tr.insertCell(0);
            row.innerHTML = rentals[i].name;
            row = tr.insertCell(1);
            row.innerHTML = rentals[i].people;
            row = tr.insertCell(2);
            row.innerHTML = rentals[i].reservation[0].time + " " + rentals[i].reservation[0].price;
            row = tr.insertCell(3);
            row.innerHTML = rentals[i].reservation[1].time + " " + rentals[i].reservation[1].price;
            row = tr.insertCell(4);
            row.innerHTML = rentals[i].walkin[0].time + " " + rentals[i].walkin[0].price;
            row = tr.insertCell(5);
            row.innerHTML = rentals[i].walkin[1].time + " " + rentals[i].walkin[1].price;            
        }
        

        document.querySelector('div.chart').appendChild(table);
    });