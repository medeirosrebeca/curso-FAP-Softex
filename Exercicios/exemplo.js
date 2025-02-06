var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Carro = /** @class */ (function () {
    function Carro(modelo, cor) {
        this.modelo = modelo;
        this.cor = cor;
    }
    Carro.prototype.getModelo = function () {
        return this.modelo;
    };
    Carro.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    Carro.prototype.getCor = function () {
        return this.cor;
    };
    Carro.prototype.setCor = function (cor) {
        this.cor = cor;
    };
    return Carro;
}());
var CarroEsportivo = /** @class */ (function (_super) {
    __extends(CarroEsportivo, _super);
    function CarroEsportivo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CarroEsportivo.prototype.acelerarRapido = function () {
    };
    CarroEsportivo.prototype.reproduzirSim = function () {
    };
    return CarroEsportivo;
}(Carro));
var Exemplo10 = new Carro("Civic", "Branco");
console.log(Exemplo10);
