interface Smartphone {
  numeroTelefono: string;
  carica: number;
  numeroChiamate: number;

  ricarica(unaRicarica: number): void;
  chiamata(minutiDurata: number): void;
}

class User implements Smartphone {
  nome: string;
  cognome: string;
  numeroTelefono: string;
  carica: number = 0;
  numeroChiamate: number;

  constructor(
    nome: string,
    cognome: string,
    numeroTelefono: string,
    carica: number,
    numeroChiamate: number
  ) {
    this.nome = nome;
    this.cognome = cognome;
    this.numeroTelefono = numeroTelefono;
    this.carica = carica;
    this.numeroChiamate = numeroChiamate;
  }

  ricarica(unaRicarica: number): void {
    this.carica += unaRicarica;
    console.log(
      `Ricarica effettuata. Nuovo saldo carica: €${this.carica.toFixed(2)}`
    );
  }

  chiamata(minutiDurata: number): void {
    if (this.carica >= minutiDurata) {
      const costoChiamata = minutiDurata * 0.2;
      this.carica -= costoChiamata;
      this.numeroChiamate++;
      console.log(`Chiamata effettuata per ${minutiDurata} minuti.`);
      console.log(`Costo della chiamata: €${costoChiamata.toFixed(2)}`);
      console.log(`Saldo carica rimanente: €${this.carica.toFixed(2)}`);
    } else {
      console.log(`Saldo carica insufficiente per effettuare la chiamata.`);
    }
  }

  numero404(): void {
    console.log(`Credito residuo: ${this.carica}€`);
  }

  getNumeroChiamate(): void {
    console.log(`Cronologia chiamate: ${this.numeroChiamate}`);
  }

  azzeraChiamate(): void {
    this.numeroChiamate = 0;
    console.log(`Cronologia chiamate cancellata.`);
  }
}

const FirstUser = new User("John", "Doe", "123-456-7890", 0, 12);
console.log(`User: ${FirstUser.nome} ${FirstUser.cognome}`);
FirstUser.chiamata(5);
console.log(`Cronologia chiamate: ${FirstUser.getNumeroChiamate()}`);
FirstUser.azzeraChiamate();

const credit = document.getElementById("credit") as HTMLTextAreaElement;

function addcredit(amount: number): void {
  FirstUser.carica = FirstUser.carica + amount;
  credit.innerText = FirstUser.carica.toString();
  FirstUser.numero404();
}
