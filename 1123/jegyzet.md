# JavaScript feladatsor – Függvények és magasabb rendű függvények

## Általános tudnivalók

- Minden feladatban **pontosan a megadott nevű** függvényt kell elkészíteni, a megadott paraméterekkel.
- A függvények (ha a feladat mást nem mond) **magyar nyelvű szöveget adnak vissza**, ezt nem kiírni kell, hanem `return`-nel visszaadni.
- A visszaadott szövegeknek **karakterre pontosan** egyezniük kell a feladatban megadottakkal (szóközök, írásjelek is).
- A függvények **nem módosíthatják** a paraméterként kapott tömböket és objektumokat.
- Minden feladat végén példák vannak. Ezekkel (és saját további esetekkel) ellenőrizd a megoldásodat az 1. feladatban elkészített függvénnyel.

### Közös hibaüzenetek

Ahol a feladat tömböt vár, a bemenetet az alábbi sorrendben kell ellenőrizni, és az első hibánál vissza kell adni a hozzá tartozó üzenetet:

| Hiba | Visszaadott üzenet |
|---|---|
| A bemenet nem tömb | `A bemenet nem tömb!` |
| A tömb üres | `A tömb üres!` |
| Számokat váró feladatnál nem minden elem szám (a `NaN` sem számít számnak) | `A tömb csak számokat tartalmazhat!` |

Ahol a feladat függvényt vár paraméterként, és nem függvényt kap:

| Hiba | Visszaadott üzenet |
|---|---|
| A paraméter nem függvény | `A megadott paraméter nem függvény!` |

Ha egy függvénynek több paramétere van, az ellenőrzés a paraméterek sorrendjében történik.

---

## 1. feladat – `checkResult(actual, expected)`

Készíts egy függvényt, amely összehasonlít egy kapott eredményt az elvárt eredménnyel. Az összehasonlítás szigorú (típusnak és értéknek is egyeznie kell).

- Egyezés esetén: `Sikeres teszt`
- Eltérés esetén: `Sikertelen teszt – várt: <expected>, kapott: <actual>`

**Példák:**

| Hívás | Visszatérési érték |
|---|---|
| `checkResult(5, 5)` | `Sikeres teszt` |
| `checkResult("5", 5)` | `Sikertelen teszt – várt: 5, kapott: 5` |
| `checkResult(3, 4)` | `Sikertelen teszt – várt: 4, kapott: 3` |

---

## 2. feladat – `greetUser(name)`

Készíts egy függvényt, amely egy nevet kap, és köszönti a felhasználót. A név elején és végén lévő szóközöket hagyd figyelmen kívül.

- Ha a `name` nem szöveg, vagy a szóközök eltávolítása után üres: `Hibás név!`
- Egyébként: `Szia, <name>!`

**Példák:**

| Hívás | Visszatérési érték |
|---|---|
| `greetUser("Anna")` | `Szia, Anna!` |
| `greetUser("  Béla  ")` | `Szia, Béla!` |
| `greetUser("   ")` | `Hibás név!` |
| `greetUser(42)` | `Hibás név!` |

---

## 3. feladat – `sumNumbers(numbers)`

Készíts egy függvényt, amely egy számokból álló tömb elemeinek összegét adja meg.

- Siker esetén: `Az összeg: <összeg>`
- Hibás bemenetnél a közös hibaüzenetek érvényesek.

**Példák:**

| Hívás | Visszatérési érték |
|---|---|
| `sumNumbers([1, 2, 3, 4])` | `Az összeg: 10` |
| `sumNumbers([-5, 5, 10])` | `Az összeg: 10` |
| `sumNumbers([])` | `A tömb üres!` |
| `sumNumbers([1, "2", 3])` | `A tömb csak számokat tartalmazhat!` |
| `sumNumbers("123")` | `A bemenet nem tömb!` |

---

## 4. feladat – `getEvenNumbers(numbers)`

Készíts egy függvényt, amely kiválogatja egy számtömbből a páros számokat, eredeti sorrendjükben.

- Ha van páros szám: `Páros számok: <számok vesszővel és szóközzel elválasztva>`
- Ha nincs: `Nincs páros szám.`
- Hibás bemenetnél a közös hibaüzenetek érvényesek.

**Példák:**

| Hívás | Visszatérési érték |
|---|---|
| `getEvenNumbers([1, 2, 3, 4, 5, 6])` | `Páros számok: 2, 4, 6` |
| `getEvenNumbers([1, 3, 5])` | `Nincs páros szám.` |
| `getEvenNumbers([0, -2, 7])` | `Páros számok: 0, -2` |

---

## 5. feladat – `doubleValues(numbers)`

Készíts egy függvényt, amely egy számtömb minden elemének kétszeresét adja meg, az eredeti sorrendben. Az eredeti tömb nem változhat meg.

- Siker esetén: `Duplázott értékek: <értékek vesszővel és szóközzel elválasztva>`
- Hibás bemenetnél a közös hibaüzenetek érvényesek.

**Példák:**

| Hívás | Visszatérési érték |
|---|---|
| `doubleValues([1, 2, 3])` | `Duplázott értékek: 2, 4, 6` |
| `doubleValues([-1, 0, 2.5])` | `Duplázott értékek: -2, 0, 5` |
| `doubleValues([1, NaN])` | `A tömb csak számokat tartalmazhat!` |

---

## 6. feladat – `hasNegative(numbers)`

Készíts egy függvényt, amely eldönti, hogy van-e negatív szám a tömbben.

- Ha van: `Van negatív szám.`
- Ha nincs: `Nincs negatív szám.`
- Hibás bemenetnél a közös hibaüzenetek érvényesek.

**Példák:**

| Hívás | Visszatérési érték |
|---|---|
| `hasNegative([3, -1, 4])` | `Van negatív szám.` |
| `hasNegative([0, 1, 2])` | `Nincs negatív szám.` |

---

## 7. feladat – `allPassed(scores, limit)`

Készíts egy függvényt, amely eldönti, hogy a pontszámok tömbjében **minden** pontszám eléri-e a megadott határértéket (a határértékkel egyenlő pontszám is teljesítésnek számít).

- Ha a `limit` nem szám (vagy `NaN`): `A határérték nem szám!` (ezt a tömb ellenőrzése után kell vizsgálni)
- Ha mindenki teljesítette: `Mindenki teljesítette.`
- Egyébként: `Nem mindenki teljesítette.`
- A `scores` hibás értékénél a közös hibaüzenetek érvényesek.

**Példák:**

| Hívás | Visszatérési érték |
|---|---|
| `allPassed([60, 75, 90], 50)` | `Mindenki teljesítette.` |
| `allPassed([60, 45, 90], 50)` | `Nem mindenki teljesítette.` |
| `allPassed([50, 50], 50)` | `Mindenki teljesítette.` |
| `allPassed([60, 70], "50")` | `A határérték nem szám!` |

---

## 8. feladat – `findFirstGreater(numbers, limit)`

Készíts egy függvényt, amely megadja a tömb **első** olyan elemét, amely nagyobb a megadott határértéknél.

- Ha a `limit` nem szám (vagy `NaN`): `A határérték nem szám!`
- Ha van ilyen elem: `Első találat: <szám>`
- Ha nincs: `Nincs a határértéknél nagyobb szám.`
- A `numbers` hibás értékénél a közös hibaüzenetek érvényesek.

**Példák:**

| Hívás | Visszatérési érték |
|---|---|
| `findFirstGreater([4, 9, 12, 15], 10)` | `Első találat: 12` |
| `findFirstGreater([1, 2, 3], 10)` | `Nincs a határértéknél nagyobb szám.` |
| `findFirstGreater([5, 10], 10)` | `Nincs a határértéknél nagyobb szám.` |

---

## 9. feladat – `findLongestWord(words)`

Készíts egy függvényt, amely egy szavakból álló tömbből megkeresi a leghosszabb szót. Ha több azonos hosszúságú leghosszabb szó van, az elsőt kell visszaadni.

- Ha nem minden elem szöveg: `A tömb csak szövegeket tartalmazhat!`
- Siker esetén: `A leghosszabb szó: <szó> (<hossz> karakter)`
- A „nem tömb” és „üres tömb” esetekre a közös hibaüzenetek érvényesek.

**Példák:**

| Hívás | Visszatérési érték |
|---|---|
| `findLongestWord(["alma", "banán", "kiwi"])` | `A leghosszabb szó: banán (5 karakter)` |
| `findLongestWord(["ég", "fa", "tó"])` | `A leghosszabb szó: ég (2 karakter)` |
| `findLongestWord(["alma", 5])` | `A tömb csak szövegeket tartalmazhat!` |

---

## 10. feladat – `calculateAverageGrade(grades)`

Készíts egy függvényt, amely iskolai jegyek (1–5 közötti egész számok) átlagát számolja ki, két tizedesjegyre kerekítve.

- Ha bármelyik elem nem 1 és 5 közötti egész szám: `Érvénytelen jegy a tömbben!`
- Siker esetén: `Az átlag: <átlag két tizedesjeggyel>`
- A „nem tömb” és „üres tömb” esetekre a közös hibaüzenetek érvényesek.

**Példák:**

| Hívás | Visszatérési érték |
|---|---|
| `calculateAverageGrade([5, 4, 3, 5])` | `Az átlag: 4.25` |
| `calculateAverageGrade([2, 3, 3])` | `Az átlag: 2.67` |
| `calculateAverageGrade([5, 6])` | `Érvénytelen jegy a tömbben!` |
| `calculateAverageGrade([4, 4.5])` | `Érvénytelen jegy a tömbben!` |

---

## 11. feladat – `countAdults(people)`

Készíts egy függvényt, amely személyek tömbjét kapja. Minden személy egy objektum `name` és `age` tulajdonsággal. Számold meg, hány felnőtt (legalább 18 éves) személy van a tömbben.

- Siker esetén: `Felnőttek száma: <darabszám>`
- A „nem tömb” és „üres tömb” esetekre a közös hibaüzenetek érvényesek.

**Példák:**

```js
const people = [
  { name: "Anna", age: 17 },
  { name: "Béla", age: 34 },
  { name: "Csaba", age: 18 },
  { name: "Dóra", age: 12 }
];
```

| Hívás | Visszatérési érték |
|---|---|
| `countAdults(people)` | `Felnőttek száma: 2` |
| `countAdults([{ name: "Ede", age: 5 }])` | `Felnőttek száma: 0` |

---

## 12. feladat – `getAdultNames(people)`

Készíts egy függvényt, amely az előző feladatban leírt személyek tömbjéből visszaadja a felnőttek nevét **magyar ábécérendben**. Az eredeti tömb sorrendje nem változhat meg.

- Ha van felnőtt: `Felnőttek: <nevek vesszővel és szóközzel elválasztva>`
- Ha nincs: `Nincs felnőtt a listában.`
- A „nem tömb” és „üres tömb” esetekre a közös hibaüzenetek érvényesek.

**Példák:**

```js
const people = [
  { name: "Zoltán", age: 40 },
  { name: "Ádám", age: 22 },
  { name: "Csilla", age: 16 },
  { name: "Éva", age: 19 }
];
```

| Hívás | Visszatérési érték |
|---|---|
| `getAdultNames(people)` | `Felnőttek: Ádám, Éva, Zoltán` |
| `getAdultNames([{ name: "Ede", age: 5 }])` | `Nincs felnőtt a listában.` |

---

## 13. feladat – `sortProductsByPrice(products, direction)`

Készíts egy függvényt, amely termékek tömbjét kapja (minden termék egy objektum `name` és `price` tulajdonsággal), és ár szerint rendezi őket. A `direction` értéke `"asc"` (növekvő) vagy `"desc"` (csökkenő) lehet. Az eredeti tömb sorrendje nem változhat meg.

- Ha a `direction` értéke más: `Érvénytelen rendezési irány!`
- Siker esetén: `Rendezett termékek: <név> (<ár> Ft), <név> (<ár> Ft), ...`
- A „nem tömb” és „üres tömb” esetekre a közös hibaüzenetek érvényesek.

**Példák:**

```js
const products = [
  { name: "Tej", price: 520 },
  { name: "Kenyér", price: 450 },
  { name: "Sajt", price: 1890 }
];
```

| Hívás | Visszatérési érték |
|---|---|
| `sortProductsByPrice(products, "asc")` | `Rendezett termékek: Kenyér (450 Ft), Tej (520 Ft), Sajt (1890 Ft)` |
| `sortProductsByPrice(products, "desc")` | `Rendezett termékek: Sajt (1890 Ft), Tej (520 Ft), Kenyér (450 Ft)` |
| `sortProductsByPrice(products, "fel")` | `Érvénytelen rendezési irány!` |

---

## 14. feladat – `getTotalPrice(cart)`

Készíts egy függvényt, amely egy kosár tételeit kapja. Minden tétel egy objektum `name`, `price` (egységár) és `quantity` (darabszám) tulajdonsággal. Számold ki a kosár végösszegét.

- Siker esetén: `Végösszeg: <összeg> Ft`
- A „nem tömb” és „üres tömb” esetekre a közös hibaüzenetek érvényesek.

**Példák:**

```js
const cart = [
  { name: "Tej", price: 520, quantity: 2 },
  { name: "Kenyér", price: 450, quantity: 1 },
  { name: "Alma", price: 350, quantity: 5 }
];
```

| Hívás | Visszatérési érték |
|---|---|
| `getTotalPrice(cart)` | `Végösszeg: 3240 Ft` |
| `getTotalPrice([{ name: "Víz", price: 200, quantity: 3 }])` | `Végösszeg: 600 Ft` |

---

## 15. feladat – `groupByCategory(products)`

Készíts egy függvényt, amely termékek tömbjét kapja (minden termék egy objektum `name` és `category` tulajdonsággal), és kategóriák szerint csoportosítja a termékneveket. A kategóriák abban a sorrendben szerepeljenek, ahogy először előfordulnak a tömbben, és a kategórián belül is maradjon meg a termékek eredeti sorrendje.

- Siker esetén: `<kategória>: <nevek vesszővel és szóközzel> | <kategória>: <nevek> | ...`
- A „nem tömb” és „üres tömb” esetekre a közös hibaüzenetek érvényesek.

**Példák:**

```js
const products = [
  { name: "alma", category: "gyümölcs" },
  { name: "répa", category: "zöldség" },
  { name: "körte", category: "gyümölcs" },
  { name: "tej", category: "tejtermék" },
  { name: "brokkoli", category: "zöldség" }
];
```

| Hívás | Visszatérési érték |
|---|---|
| `groupByCategory(products)` | `gyümölcs: alma, körte \| zöldség: répa, brokkoli \| tejtermék: tej` |

*(A táblázatban a `\|` csak a Markdown miatt szerepel így, a valódi eredményben egyszerű `|` jel van.)*

---

## 16. feladat – `applyOperation(a, b, operation)`

Készíts egy függvényt, amely két számot és egy műveletet (függvényt) kap. A műveletet a két számra alkalmazza, és visszaadja az eredményt.

- Ha `a` vagy `b` nem szám (vagy `NaN`): `Mindkét értéknek számnak kell lennie!`
- Ha az `operation` nem függvény: `A megadott paraméter nem függvény!`
- Siker esetén: `Az eredmény: <eredmény>`

**Példák:**

| Hívás | Visszatérési érték |
|---|---|
| `applyOperation(6, 3, (x, y) => x + y)` | `Az eredmény: 9` |
| `applyOperation(6, 3, (x, y) => x * y)` | `Az eredmény: 18` |
| `applyOperation(6, "3", (x, y) => x - y)` | `Mindkét értéknek számnak kell lennie!` |
| `applyOperation(6, 3, "összeadás")` | `A megadott paraméter nem függvény!` |

---

## 17. feladat – `transformAll(items, transformer)`

Készíts egy függvényt, amely egy tömböt és egy átalakító függvényt kap. A tömb minden elemére alkalmazza az átalakító függvényt, és az eredményeket az eredeti sorrendben adja vissza. Az eredeti tömb nem változhat meg.

- Ha a `transformer` nem függvény: `A megadott paraméter nem függvény!`
- Siker esetén: `Átalakított elemek: <elemek vesszővel és szóközzel elválasztva>`
- A „nem tömb” és „üres tömb” esetekre a közös hibaüzenetek érvényesek.

**Példák:**

| Hívás | Visszatérési érték |
|---|---|
| `transformAll(["alma", "körte"], (s) => s.toUpperCase())` | `Átalakított elemek: ALMA, KÖRTE` |
| `transformAll([1, 2, 3], (n) => n * 10)` | `Átalakított elemek: 10, 20, 30` |
| `transformAll([1, 2], null)` | `A megadott paraméter nem függvény!` |

---

## 18. feladat – `filterBy(items, condition)`

Készíts egy függvényt, amely egy tömböt és egy feltételt megadó függvényt kap. Csak azokat az elemeket tartsd meg, amelyekre a feltétel igaz, az eredeti sorrendben.

- Ha a `condition` nem függvény: `A megadott paraméter nem függvény!`
- Ha van találat: `Találatok: <elemek vesszővel és szóközzel elválasztva>`
- Ha nincs: `Nincs találat.`
- A „nem tömb” és „üres tömb” esetekre a közös hibaüzenetek érvényesek.

**Példák:**

| Hívás | Visszatérési érték |
|---|---|
| `filterBy([5, 12, 8, 20], (n) => n > 10)` | `Találatok: 12, 20` |
| `filterBy(["Anna", "Béla", "Aladár"], (s) => s.startsWith("A"))` | `Találatok: Anna, Aladár` |
| `filterBy([1, 2, 3], (n) => n > 100)` | `Nincs találat.` |

---

## 19. feladat – `repeatAction(times, action)`

Készíts egy függvényt, amely egy pozitív egész számot és egy függvényt kap. Az `action` függvényt annyiszor kell meghívni, amennyi a `times` értéke; minden hívásnál a függvény az aktuális sorszámot kapja meg (1-től kezdve). A hívások visszatérési értékeit gyűjtsd össze.

- Ha a `times` nem pozitív egész szám: `Az ismétlések száma pozitív egész szám kell legyen!`
- Ha az `action` nem függvény: `A megadott paraméter nem függvény!`
- Siker esetén: `Eredmények: <értékek vesszővel és szóközzel elválasztva>`

**Példák:**

| Hívás | Visszatérési érték |
|---|---|
| `repeatAction(3, (n) => n * n)` | `Eredmények: 1, 4, 9` |
| `repeatAction(4, (n) => n + ". kör")` | `Eredmények: 1. kör, 2. kör, 3. kör, 4. kör` |
| `repeatAction(0, (n) => n)` | `Az ismétlések száma pozitív egész szám kell legyen!` |
| `repeatAction(2.5, (n) => n)` | `Az ismétlések száma pozitív egész szám kell legyen!` |
| `repeatAction(2, 5)` | `A megadott paraméter nem függvény!` |

---

## 20. feladat – `composeFunctions(first, second)`

Készíts egy függvényt, amely két függvényt kap, és **egy új függvényt ad vissza**. Az új függvény egy értéket kap, arra először a `first`, majd az eredményre a `second` függvényt alkalmazza, és ezt az értéket adja vissza.

- Ha bármelyik paraméter nem függvény, a `composeFunctions` ne függvényt, hanem ezt a szöveget adja vissza: `Mindkét paraméternek függvénynek kell lennie!`

**Példák:**

```js
const addThenDouble = composeFunctions((x) => x + 1, (x) => x * 2);
const shout = composeFunctions((s) => s.trim(), (s) => s.toUpperCase() + "!");
```

| Hívás | Visszatérési érték |
|---|---|
| `addThenDouble(3)` | `8` |
| `addThenDouble(0)` | `2` |
| `shout("  szia ")` | `SZIA!` |
| `composeFunctions((x) => x, 10)` | `Mindkét paraméternek függvénynek kell lennie!` |

---

## Bónusz

Írj minden feladathoz legalább **két saját tesztesetet** az 1. feladat `checkResult` függvényével, amelyek a példákban nem szereplő eseteket ellenőriznek (például: határeset, rossz típusú paraméter, üres tömb).