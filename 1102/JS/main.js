//1
function jegy(pontszam) {
    if (pontszam < 0 || pontszam > 100 || pontszam.isNaN) {throw new Error("Érvénytelen pontszám")}
    else if (pontszam <= 49) {return 1}
    else if (pontszam <= 59){return 2}
    else if (pontszam <= 74){return 3}
    else if (pontszam <= 89){return 4}
    else {return 5}
}
let tries = [82,45,120]
for (let i = 0; i < tries.length; i++) {
    try {
        jegy(tries[i])
    } catch (e) {
        console.log(e)
    }
    
}
let megfeleloseg = jegy(82) > 1 ? "Megfelelt" : "Nem felelt meg";
console.log(megfeleloseg)

//2
for (let i = 0; i < 30; i++) {
  if (i % 5 == 0) {
    continue
  }
  if (i % 3 == 0) {
    console.log(i)
  }
}

let sum = 0
let currentNumber = 0
while (sum <= 100) {
  currentNumber++
  sum += currentNumber
}
console.log(`Ennyi szamot adtam ossze: ${currentNumber} a szazat meghalado szam: ${sum}`)

//3
const jegyek = [4, 5, 2, 5, 3, 1, 4, 5, 2];

function atlag(tomb,tizedes) {
  let counter = 0
  let sum = 0
  tomb.forEach((item) => {
    sum += item;
    counter++
  })
  return Math.round(((sum/counter) + Number.EPSILON) * Math.pow(10,tizedes)) / Math.pow(10,tizedes)
}
console.log(`A jegyek atlaga: ${atlag(jegyek,2)}`)

let harmasnalNagyobbak = jegyek.filter((szam) => szam > 3)

let mapFormalas = new Map();
jegyek.forEach((jegy) => {
  mapFormalas.set(`Jegy: ${jegy}`)
})
console.log(`KJANVIUBAIVUBAUIDVBIUBAV ${mapFormalas}`)
console.log(mapFormalas)


let novekvobenEgyediek = new Set(jegyek.sort((a, b) => a - b))
console.log(jegyek.slice(0,3))
console.log(jegyek)
console.log(jegyek.includes(1) ? "Van bukás" : "Nincs bukás")

//4
const tanulok = [
  { nev: "Anna", osztaly: "10.A", jegyek: [5, 4, 5] },
  { nev: "Bence", osztaly: "10.B", jegyek: [3, 4, 2] },
  { nev: "Csilla", osztaly: "10.A", jegyek: [5, 5, 4] },
  { nev: "Dávid", osztaly: "10.B", jegyek: [2, 3, 3] },
  { nev: "Emma", osztaly: "10.A", jegyek: [4, 4, 5] }
];

for (const {nev, jegyek} of tanulok) {
  console.log(`${nev}: ${atlag(jegyek,2)}`)
}

const letszam = new Map()

for (const {osztaly} of tanulok) {
  letszam.set(osztaly,(letszam.get(osztaly) ?? 0) + 1)
}

for (const [osztaly,db] of letszam) {
  console.log(`${osztaly}: ${db}db`)
}
for (const [kulcs,ertek] of Object.entries(tanulok[0])) {
  console.log(`${kulcs}: ${ertek}`)
}

const masolat = {...tanulok[0], email : undefined}

//5
const osszeg = (...szamok) => {
  let sum = 0
  for (let i = 0; i < szamok.length; i++) {
    sum += szamok[i]
  }
  return sum
}

osszeg(1, 2, 3, 4)
osszeg()

function udvozol(nev = "vendeg") {
  return `Szia, ${nev}!`
}
udvozol("Matyi")
udvozol()

let szamlalo = {
  ertek: 0,
  novel() {
    this.ertek++
  },
  kiir() {
    console.log(this.ertek)
  }
}
for (let i = 0; i < 3; i++) {
  szamlalo.novel()
}
szamlalo.kiir()