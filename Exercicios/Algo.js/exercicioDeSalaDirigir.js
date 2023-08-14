//nao pode, pode com autorizacao, dirige.

let dirige;
dirige = 19;
if (dirige < 16){
    console.log("Você não pode dirigir.");
} else if (dirige >= 16 & dirige < 18) { 
    console.log("Você só pode dirigir com autorização.");
} else if (dirige > 18) {
    console.log("Você pode dirigir.")
}