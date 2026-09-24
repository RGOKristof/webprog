const workshops = [
  { title: "Defektjavítás tíz perc alatt", category: "basics", label: "Alapok",
    date: "szeptember 23., kedd 17:00", seats: 4,
    text: "Belső cseréje és foltozása, felni-ellenőrzés, szeleptípusok." },
  { title: "Fékbeállítás: felni és tárcsa", category: "repair", label: "Szerelés",
    date: "szeptember 25., csütörtök 18:00", seats: 2,
    text: "Fékpofa-csere, bowden utánhúzás, súrlódó tárcsafék javítása." },
  { title: "Váltóhangolás nulláról", category: "repair", label: "Szerelés",
    date: "szeptember 30., kedd 17:30", seats: 6,
    text: "Ütközőcsavarok, bowdenfeszesség, lánckopás mérése." },
  { title: "Téli bringázás felszerelése", category: "touring", label: "Túra",
    date: "október 7., kedd 17:00", seats: 9,
    text: "Lámpák, sárvédő, gumiválasztás, láncápolás sóval szemben." },
  { title: "Csomagolás több napos túrához", category: "touring", label: "Túra",
    date: "október 11., szombat 11:00", seats: 0,
    text: "Táskarendszerek, súlyelosztás, szerszámkészlet útra." },
  { title: "Első bringa vásárlás előtt", category: "basics", label: "Alapok",
    date: "október 18., szombat 10:30", seats: 12,
    text: "Használt kerékpár átvizsgálása vásárlás előtt, pontról pontra." }
];
// Orai munka:
/*
const grid = document.querySelector("#card-grid")
const resuls = document.querySelector("#results")
const filters = document.querySelector("#filters")

function render(list){
  grid.replaceChildren();
  list.forEach(item => {
    console.log(item[title])
  });
}
*/
// Ahogy én megoldanám(categoryt nem nagyon ertem hova kene):
/*
const grid = document.querySelector("#card-grid")
  grid.innerHTML = "";
workshops.forEach(element => {
  grid.innerHTML +=
  `
  <li class="card">
      <span class="card-tag">${element["label"]}</span>
      <h3 class="card-title">${element["title"]}</h3>
      <p class="card-date">${element["date"]}</p>
      <p>${element["text"]}</p>
      <p class="card-seats">${element["seats"]} szabad hely</p>
  </li>
  `;
});
*/
//Cleancode:
