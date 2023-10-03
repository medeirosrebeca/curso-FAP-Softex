// Funcao typescript - Sem retorno e parametros
function funcao01(): void {
    console.log("Minha primeira funcao");
}
funcao01();

//Funcao typescript - com retorno e sem parametro
function funcao02(): string {
    return "Minha segunda funcao";
}
console.log(funcao02());

//Funcao typescript - sem retorno e com parametro
function funcao03(nome: string): void {
    console.log("Bom dia, " + nome);
}
funcao03("Rebeca");

//Funcao typescript - com retorno e com parametro
function funcao04(num1: number, num2: number): number {
    return num1 + num2;
}
console.log(funcao04(4,6));