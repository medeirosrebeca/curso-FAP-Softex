//1. verificar o dia da semana com base em 1 a 7.

let dia;
dia = 2;

switch (dia) {
    case 1:
        console.log ("Domingo");
        break;
    case 2:
        console.log ("Segunda");
        break;
    case 3:
        console.log ("Terça");
       break;
    case 4:
        console.log ("Quarta");
        break;
    case 5:
        console.log ("Quinta");
        break;
    case 6:
        console.log ("Sexta");
        break;
    case 7:
        console.log ("Sábado");
        break;
    default:
        console.log ("Dia inexistente");
}


//2. converter numero de mês em seu nome correspondente.

let mes;
mes = 9;

switch (mes) {
    case 1:
        console.log ("Janeiro");
        break;
    case 2:
        console.log ("Fevereiro");
        break;
    case 3:
        console.log ("Março");
        break;
    case 4:
        console.log ("Abril");
        break;
    case 5:
        console.log ("Maio");
        break;
    case 6:
        console.log ("Junho");
        break;
    case 7:
        console.log ("Julho");
        break;
    case 8:
        console.log ("Agosto");
        break;
    case 9:
        console.log ("Setembro");
        break;
    case 10:
        console.log ("Outubro");
        break;
    case 11:
        console.log ("Novembro");
        break;
    case 12:
        console.log ("Dezembro");
        break;
    default:
        console.log ("Mês inexistente");
    }


//3. exibir mensagem de acordo com o estado civil: "solteiro", "casado", "divorciado" ou "outro".

let estado_Civil;
estado_Civil = "outro";

switch (estado_Civil) {
    case "solteiro":
        console.log ("Você é solteiro");
        break;
    case "casado":
        console.log ("Você é casado");
        break;
    case "divorciado":
        console.log ("Você é divorciado");
        break;
    default:
        console.log ("Outro");
}

//4. exibir mensagem dependendo do tipo do animal: "cachorro", "gato", "passaro" ou "outro".

let animal;
animal = "gato";

switch (animal) {
    case "cachorro":
        console.log ("Animal: cachorro");
        break;
    case "gato":
        console.log ("Animal: gato");
        break;
    case "passaro":
        console.log ("Animal: passaro");
        break;
    default:
        console.log ("Animal: outro");
}

//5. calcular o valor de uma operação matemática com base em um operador: soma, subtração, multiplicação ou divisão.


let num1, num2, operador;
num1 = 10;
num2 = 2;
operador = 'div';

switch (operador) {
    case "soma":
        console.log ("A soma é: " , num1 + num2);
        break;
    case "subt":
        console.log ("A subtração é: " + (num1 - num2));
        break;
    case "multipl":
        console.log ("A multiplicação é: ", num1 * num2);
        break;
    case "div":
        console.log ("A divisão é: ", num1 / num2);
        break;
}