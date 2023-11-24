var User = /** @class */ (function () {
    function User(nome, cognome, numeroTelefono, carica, numeroChiamate) {
        this.carica = 0;
        this.nome = nome;
        this.cognome = cognome;
        this.numeroTelefono = numeroTelefono;
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
    }
    User.prototype.ricarica = function (unaRicarica) {
        this.carica += unaRicarica;
        console.log("Ricarica effettuata. Nuovo saldo carica: \u20AC".concat(this.carica.toFixed(2)));
    };
    User.prototype.chiamata = function (minutiDurata) {
        if (this.carica >= minutiDurata) {
            var costoChiamata = minutiDurata * 0.2;
            this.carica -= costoChiamata;
            this.numeroChiamate++;
            console.log("Chiamata effettuata per ".concat(minutiDurata, " minuti."));
            console.log("Costo della chiamata: \u20AC".concat(costoChiamata.toFixed(2)));
            console.log("Saldo carica rimanente: \u20AC".concat(this.carica.toFixed(2)));
        }
        else {
            console.log("Saldo carica insufficiente per effettuare la chiamata.");
        }
    };
    User.prototype.numero404 = function () {
        console.log("Credito residuo: ".concat(this.carica, "\u20AC"));
    };
    User.prototype.getNumeroChiamate = function () {
        console.log("Cronologia chiamate: ".concat(this.numeroChiamate));
    };
    User.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
        console.log("Cronologia chiamate cancellata.");
    };
    return User;
}());
var FirstUser = new User("John", "Doe", "123-456-7890", 0, 12);
console.log("User: ".concat(FirstUser.nome, " ").concat(FirstUser.cognome));
FirstUser.chiamata(5);
console.log("Cronologia chiamate: ".concat(FirstUser.getNumeroChiamate()));
FirstUser.azzeraChiamate();
var credit = document.getElementById("credit");
function addcredit(amount) {
    FirstUser.carica = FirstUser.carica + amount;
    credit.innerText = FirstUser.carica.toString();
    FirstUser.numero404();
}
