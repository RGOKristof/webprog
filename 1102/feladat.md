# JavaScript gyakorlati dolgozat (45 perc)

## Tudnivalók

Időkeret: 45 perc. Elérhető pontszám: 50 pont.

Név: ______________________   Osztály: ________

- Minden megoldás egyetlen `dolgozat.js` fájlba kerüljön, a feladatokat kommenttel válaszd el (pl. `// 1. feladat`).
- Az eredményeket `console.log`-gal írd ki; a program Node.js-ben vagy a böngésző konzoljában is fusson hiba nélkül.
- Használj `let`-et és `const`-ot, `var`-t ne.
- Részpont jár a részben működő, de jó irányba haladó megoldásra is.
- Segédeszköz: a tanár döntése szerint (pl. MDN dokumentáció); internetes keresés és MI-eszköz nem használható.

## Feladatok

### 1. Jegyszámító – elágazások és hibakezelés (8 pont)

1. Írj egy `jegy(pontszam)` függvényt, amely `if` / `else if` / `else` szerkezettel visszaadja az érdemjegyet: 0–49 → 1, 50–59 → 2, 60–74 → 3, 75–89 → 4, 90–100 → 5. (3 pont)
2. Ha a paraméter nem szám, vagy 0-nál kisebb, illetve 100-nál nagyobb, a függvény dobjon hibát `throw new Error("Érvénytelen pontszám")` utasítással. (2 pont)
3. Hívd meg a függvényt a `82`, `45` és `120` értékekkel egy `try...catch` blokkban; hiba esetén a hibaüzenetet írd ki. (2 pont)
4. A ternáris operátorral írd ki egy változóba, hogy a 82 pont „Megfelelt” vagy „Nem felelt meg” (a határ: 2-es jegy). (1 pont)

### 2. Ciklusok (7 pont)

1. `for` ciklussal írd ki 1 és 30 között a 3-mal osztható számokat, de az 5-tel is oszthatókat a `continue` segítségével hagyd ki. (3 pont)
2. `while` vagy `do...while` ciklussal add össze a pozitív egész számokat 1-től kezdve addig, amíg az összeg meg nem haladja a 100-at. Írd ki, hány számot adtál össze, és mennyi lett az összeg. (4 pont)

### 3. Tömbök (12 pont)

Adott a következő tömb:

```js
const jegyek = [4, 5, 2, 5, 3, 1, 4, 5, 2];
```

1. Számold ki és írd ki a jegyek átlagát két tizedesjegyre kerekítve (`for...of` vagy `forEach`). (2 pont)
2. A `filter` metódussal készíts új tömböt a 3-asnál jobb jegyekből. (2 pont)
3. A `map` metódussal készíts új tömböt, amelyben minden elem `"Jegy: 4"` formájú szöveg. (2 pont)
4. Set segítségével állítsd elő az egyedi jegyeket növekvő sorrendben, tömbként. (3 pont)
5. A `slice` metódussal írd ki az első három jegyet, majd igazold kiírással, hogy az eredeti tömb nem változott. (2 pont)
6. Az `includes` metódussal döntsd el, van-e 1-es a jegyek között, és írd ki: „Van bukás” vagy „Nincs bukás”. (1 pont)

### 4. Objektumok és Map (12 pont)

Adott a következő tömb:

```js
const tanulok = [
  { nev: "Anna", osztaly: "10.A", jegyek: [5, 4, 5] },
  { nev: "Bence", osztaly: "10.B", jegyek: [3, 4, 2] },
  { nev: "Csilla", osztaly: "10.A", jegyek: [5, 5, 4] },
  { nev: "Dávid", osztaly: "10.B", jegyek: [2, 3, 3] },
  { nev: "Emma", osztaly: "10.A", jegyek: [4, 4, 5] }
];
```

1. `for...of` ciklussal és destrukturálással (`const { nev, jegyek } = ...`) írd ki minden tanuló nevét és átlagát két tizedesjegyre, pl. `Anna: 4.67`. (4 pont)
2. Készíts egy Map-et, amely osztályonként tárolja a tanulók számát (kulcs: osztály, érték: létszám), majd járd be és írd ki. (4 pont)
3. Az `Object.entries()` segítségével írd ki az első tanuló összes tulajdonságát `kulcs: érték` formában. (2 pont)
4. Spread operátorral készíts másolatot az első tanulóról, amely egy új `email` tulajdonságot is tartalmaz. Az eredeti objektum nem változhat. (2 pont)

### 5. Függvények (11 pont)

1. Írj egy `osszeg` nevű nyílfüggvényt rest paraméterrel, amely tetszőleges számú szám összegét adja vissza. Hívd meg `osszeg(1, 2, 3, 4)` és `osszeg()` formában. (3 pont)
2. Írj egy `udvozol(nev)` függvénydeklarációt, amelynek paramétere alapértelmezésben `"Vendég"`, és `"Szia, <név>!"` szöveget ad vissza. Hívd meg paraméterrel és paraméter nélkül. (2 pont)
3. Készíts egy `szamlalo` objektumot `ertek: 0` tulajdonsággal, valamint `novel()` és `kiir()` metódusokkal, amelyek a `this` kulcsszót használják. Hívd meg háromszor a `novel()`-t, majd a `kiir()`-t. (4 pont)
4. Kommentben válaszolj: miért nem működne helyesen a `novel()` metódus, ha nyílfüggvényként írnád meg? (2 pont)
