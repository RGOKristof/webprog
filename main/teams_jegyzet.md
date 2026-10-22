# JavaScript feladatok

A feladatlap két részből áll:

1. **Clean Code**: jegyzet készítése a mellékelt cikk alapján
2. **Dolgozat-felkészülés**: jegyzet a JavaScript alapjairól

Mindkét jegyzetet el kell elkészíteni.

---

## 1. feladat: Mi az a Clean Code?

### Cél

A feladat célja, hogy megismerd a **tiszta kód (Clean Code)** fogalmát, és megértsd, miért fontos, hogy a kódot ne csak a gép, hanem más emberek (és a jövőbeli önmagad) is könnyen olvassák és módosítsák.

### Forrás

Olvasd el figyelmesen a mellékelt cikket:

> 📎 **Cikk:** *[https://frontendtanfolyam.hu/mi-az-a-clean-code-es-hogyan-hasznaljuk-a-gyakorlatban/]*

### Teendők

1. **Olvasd el** a cikket az elejétől a végéig. Első olvasásra csak a fő gondolatmenetet kövesd.
2. **Olvasd el újra**, és közben jelöld ki (vagy írd ki) a kulcsfogalmakat, szabályokat.
3. Készíts **saját jegyzetet** Markdown formátumban (`clean_code_jegyzet.md` néven) a cikk alapján.

### A jegyzet kötelező tartalma

A jegyzetnek **saját szavaiddal** megfogalmazva kell tartalmaznia az alábbiakat:

#### 1.1 Definíció
- Mit jelent a *clean code* kifejezés?
- Miért van rá szükség? Milyen problémákat okoz a „piszkos” kód?

#### 1.2 Alapelvek
Gyűjtsd össze a cikkben szereplő alapelveket, és mindegyikhez írj 1–2 mondatos magyarázatot. Például (ha a cikk említi):
- beszédes elnevezések (változók, függvények, osztályok),
- rövid, egy dolgot csináló függvények,
- ismétlés kerülése (DRY),
- egyszerűségre törekvés (KISS),
- megjegyzések helyes használata,
- következetes formázás,
- hibakezelés.

#### 1.3 Példák
- Legalább **2 rossz ↔ jó példa** kódrészlet (JavaScriptben), amely bemutat egy-egy alapelvet.
- Minden példa alatt röviden indokold, miért jobb a javított változat.

```js
// ❌ Rossz
function f(a, b) { return a * b * 0.27; }

// ✅ Jó
const VAT_RATE = 0.27;
function calculateVat(price, quantity) {
  return price * quantity * VAT_RATE;
}
```

#### 1.4 Saját vélemény / összegzés
- 3–5 mondatban: mi volt számodra a legfontosabb tanulság, és mit fogsz ebből a saját kódjaidban alkalmazni?


## 2. feladat: Jegyzetkészítés a JavaScript dolgozatra

### Cél

A dolgozatra való felkészülés során készíts egy **saját, áttekinthető jegyzetet**, amely összefoglalja a JavaScript alapjait. A jegyzet akkor jó, ha a dolgozat előtt elég csak ezt átolvasnod az ismétléshez.

### Általános követelmények

- Minden témakörhöz tartozzon:
  - rövid **magyarázat saját szavaiddal**,
  - legalább egy **működő kódpélda**,
  - ahol érdemes: **tipikus hibák / buktatók**.
- A kódpéldákat próbáld is ki (böngésző konzol)!

### 2.1 JavaScript típusok

Dolgozd fel az alábbiakat:

- **Primitív típusok:** `number`, `string`, `boolean`, `undefined`, `null`, `bigint`,
- **Referencia (objektum) típusok:** `object`, tömb, függvény
- A `typeof` operátor használata – és a meglepő eredmények (pl. `typeof null`, `typeof []`)
- Változódeklaráció: `var`, `let`, `const` – különbségek (hatókör, újradeklarálás, újraértékadás)
- **Típuskonverzió:** automatikus (implicit) és kézi (explicit) – pl. `Number()`, `String()`, `parseInt()`
- `==` és `===` közötti különbség
- *Truthy* és *falsy* értékek felsorolása
- Speciális értékek: `NaN`, `Infinity`

### 2.2 Vezérlési szerkezetek

- **Elágazások:** `if`, `else if`, `else`; `switch` (a `break` szerepe)
- **Feltételes (ternáris) operátor:** `feltétel ? a : b`
- **Logikai operátorok:** `&&`, `||`, `!`, valamint `??` és `?.`
- **Ciklusok:**
  - `for`
  - `while`, `do...while` (mi a különbség?)
  - `for...of` (mire való?)
  - `for...in` (mire való, és miért nem ajánlott tömbökre?)
- `break` és `continue` használata
- Hibakezelés: `try...catch...finally`, `throw`

### 2.3 Adatszerkezetek

#### Tömbök (Array)
- Létrehozás, elemek elérése, `length`
- **Módosító metódusok:** `push`, `pop`, `shift`, `unshift`, `splice`, `sort`, `reverse`
- **Nem módosító metódusok:** `slice`, `concat`, `includes`, `indexOf`, `join`
- **Magasabb rendű függvények** (callback-et kapnak):
  `forEach`, `map`, `filter`,
- Készíts **táblázatot**: metódus neve – mit csinál – mit ad vissza – módosítja-e az eredeti tömböt
- Spread operátor (`...`) és destrukturálás tömbökkel

#### Set
- Mi a Set, mikor érdemes használni? (egyedi értékek)
- Metódusok: `add`, `has`, `delete`, `clear`, `size`
- Bejárás `for...of`-fal
- Példa: duplikátumok kiszűrése egy tömbből

#### Map
- Mi a Map, miben különbözik az objektumtól?
- Metódusok: `set`, `get`, `has`, `delete`, `clear`, `size`
- Bejárás: `for...of`, `keys()`, `values()`, `entries()`

#### Object
- Objektum létrehozása literállal, tulajdonságok elérése (`.` és `[]` jelöléssel)
- Tulajdonság hozzáadása, módosítása, törlése (`delete`)
- `Object.keys()`, `Object.values()`, `Object.entries()`
- Objektum bejárása
- Destrukturálás és spread objektumokkal
- Metódus az objektumban, a `this` alapjai


### 2.4 Függvény létrehozási lehetőségek

Mutasd be mindegyik módot példával:

- **Függvénydeklaráció:** `function osszeg(a, b) { ... }`
- **Függvénykifejezés:** `const osszeg = function (a, b) { ... };`
- **Nyílfüggvény (arrow function):** `const osszeg = (a, b) => a + b;`
  - rövidített írásmódok (egy paraméter, egysoros visszatérés)
- **Metódus objektumban**

Térj ki ezekre is:
- Paraméterek: **alapértelmezett érték**, **rest paraméter** (`...args`)
- `return` – mit ad vissza a függvény, ha nincs `return`?
- A nyílfüggvény és a hagyományos függvény különbsége a `this` szempontjából (alapszinten)

### Önellenőrző kérdések

A jegyzet végére írd meg a válaszokat ezekre:

1. Mi a különbség a `let` és a `const` között?
2. Mit ad vissza a `typeof null`, és miért furcsa ez?
3. Mikor használnál `for...of`, és mikor `for...in` ciklust?
4. Mi a különbség a `map` és a `forEach` között?
5. Hogyan szűrnéd ki egy tömbből az ismétlődő elemeket egyetlen sorban?
6. Mikor választanál Map-et Object helyett?
