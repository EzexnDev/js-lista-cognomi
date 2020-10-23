
var surnames = ["Bianchi","Rossi","Duzioni","Balsano","Verdi"];
var userSurname = prompt("cognome?");
surnames.push(userSurname);
surnames.sort();
var lista = document.getElementById("surnamesList");

 for (var i = 0 ; i < surnames.length ; i ++){
    lista.innerHTML += "<li>" + surnames[i] + "</li>"
    if (surnames[i] == userSurname){
        document.getElementById("position").innerHTML = "La tua posizione e'"+ i;
    }
}  


// Sort Manuale
/*
for (var i = 0 ; i < surnames.length ; i ++){
    var surname = surnames[i];
    for (var j = 0 ; j < surnames.length ; j ++){
        if (surname < surnames[j]){
            var temp = surnames[j];
            surnames[j] = surname;
            surnames[i] = temp;
            surname = temp;
        }
    }
}
*/

console.log(surnames)

