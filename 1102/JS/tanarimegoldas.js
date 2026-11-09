console.log("1. feladat");

function jegy(pontszam) {
  if (typeof pontszam !== "number" || pontszam < 0 || pontszam > 100) {
    throw new Error("Érvénytelen pontszám");
  }
  if (pontszam >= 90) {
    return 5;
  } else if (pontszam >= 75) {
    return 4;
  } else if (pontszam >= 60) {
    return 3;
  } else if (pontszam >= 50) {
    return 2;
  } else {
    return 1;
  }
}

for (const pontszam of [82, 15, 120]) {
  try {
    console.log(jegy(pontszam));
  } catch (error) {
    console.error(error.message);
  }
}
const eredmeny = jegy(82) >= 2 ? "Megfelelt" : "Nem felelt meg";
console.log(eredmeny);

console.log("2. feladat");
const osszthatok = [];
for (let i = 0; i <= 30; i++) {
  if (i % 5 === 0) continue;
  if (i % 3 === 0) osszthatok.push(i);
}
console.log(osszthatok.join(", "));

let osszeg = 0;
let db = 0;
while (osszeg <= 100) {
  db++;
  osszeg += db;
}
console.log(`${db} szam, osszege: ${osszeg}`);

console.log("3. feladat");
const jegyek = [4, 5, 2, 5, 3, 1, 4, 5, 2];
let osszegSeged = 0;
for (let jegy of jegyek) {
  osszegSeged += jegy;
}
console.log(`Atlag: ${(osszegSeged / jegyek.length).toFixed(2)}`);

const jok = jegyek.filter((jegy) => jegy > 3);
console.log(`3-asnal jobbak: ${jok}`);

const szovegek = jegyek.map((j) => `Jegy: ${j}`);
console.log(szovegek);

const egyedi = [...new Set(jegyek)].sort((a, b) => a - b);
console.log(`Egyedi jegyek: ${egyedi}`);

console.log("4. feladat");
const tanulok = [
  { nev: "Anna", osztaly: "10.A", jegyek: [5, 4, 5] },
  { nev: "Bence", osztaly: "10.B", jegyek: [3, 4, 2] },
  { nev: "Csilla", osztaly: "10.A", jegyek: [5, 5, 4] },
  { nev: "Dávid", osztaly: "10.B", jegyek: [2, 3, 3] },
  { nev: "Emma", osztaly: "10.A", jegyek: [4, 4, 5] },
];

for (const tanulo of tanulok) {
  const { nev, jegyek } = tanulo;
  let s = 0;
  jegyek.forEach((j) => (s += j));
  console.log(`${nev}: ${(s / jegyek.length).toFixed(2)}`);
}
const letszam = new Map();
for (const { osztaly } of tanulok) {
  letszam.set(osztaly, (letszam.get(osztaly) ?? 0) + 1);
}
for (const [osztaly, fo] of letszam) {
  console.log(`${osztaly}: ${fo} fo`);
}
for (const [kulcs, ertek] of Object.entries(tanulok[0])) {
  console.log(`${kulcs}: ${ertek}`);
}

const masolat = { ...tanulok[0], email: "anna@blathy.info" };
console.log(`Masolat: ${masolat}`);
console.log("------------------------------");
console.log(`Eredeti: ${tanulok[0]}`);

const osszegFuggveny = (...szamok) => {
  let osszegSegedFuggvenyben = 0;
  for (const szam of szamok) {
    osszegSegedFuggvenyben += szam;
  }
  return osszegSegedFuggvenyben;
};
console.log(
  `Ertekekkel: ${osszegFuggveny(1, 2, 3, 4)}, Ures: ${osszegFuggveny()}`,
);

function udvozol(nev="Vendég"){
    return `Szia ${nev}!`
}
console.log(udvozol("Erik"));
console.log(udvozol());

const szamlalo = {
    ertek:0 ,
    novel(){
        this.ertek++;
    },
    kiir(){
        console.log(`Ertek: ${this.ertek}`);
    }
}
szamlalo.novel();
szamlalo.novel();
szamlalo.novel();
szamlalo.kiir();
