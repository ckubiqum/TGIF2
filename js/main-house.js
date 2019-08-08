//hacer el loop para recojer data del house.js y insertarlo en el documento html


var myArray = data.results[0].members

printTable(myArray, "myTable");


function printTable(array, id) {
    var tbody = document.getElementById(id);
    for (var i = 0; i < myArray.length; i++) {
        let row = document.createElement("tr");
        let full_name = document.createElement("td");
        let party = document.createElement("td");
        let total_votes = document.createElement("td");

        if (array[i].middle_name == null) {
            array[i].middle_name = ""
        };
        var fullnamelink = array[i].first_name + " " + array[i].middle_name + " " + array[i].last_name;
        full_name.innerHTML = fullnamelink.link(array[i].url)
        party.innerHTML = array[i].party;
        total_votes.innerHTML = array[i].total_votes;

        tbody.append(row);
        row.append(full_name, party, total_votes);
    }
}

//<<<