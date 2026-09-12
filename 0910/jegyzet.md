# 09.10.
## CSS

Igy donti el a css hogy mit valtoztasson a HTML-ben:

szabaly     |id |class|tag|suly
--          |-- |--   |-- |--
.card p     |0  |1    |1  |0-1-1
.card . text|0  |2    |0  |0-2-0
article p   |0  |0    |2  |0-0-2

## Breakpoints
Egy jo oldal ami megmutatja az idealis breakpointokat egy oldalon: [Breakpoints](https://getbootstrap.com/docs/5.3/layout/grid/#example)

## Feladat
Mondjuk meg mit adnak vissza az alabbiak
* `type of null => obj`
* `"5" + 3 => "53"`
* `"5" - 3 => 2` **Ez lett jo csak**
* `0.1 + 0.2 === 0.3 => false` ***(mert szar a float)***
* `[1,2,3]+[4,5] => "1,2,3,4,5"`


## Markdown

# Cimsor
### Kisebb Cimsor (mar nem csinal vonalat)

Vonal incoming (ezt nem egy cim vonal csinalja)
---

_dolt_ vagy *dolt*

**felkover**

**_dolt felkover_** vagy ***dolt felkover***

hi
### Felsorolás
---

**Unordered:**
* alma
* cigo

**Ordered:**
1. en
2. mindenki mas
    * unordered
    * inside
    * ordered

### Hivatkozas
---

[Google](www.google.com)

### Kép
---

![title](https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e2/Mudi_portrait.jpg/330px-Mudi_portrait.jpg?utm_source=hu.wikipedia.org&utm_campaign=parser&utm_content=thumbnail)

### Beljebb kezdes (haszontalan)
---

>hello
    >>hi

### Tablazat
---

id    |name
--    |--
138654|alex
135325|levi

### code block
---

```JavaScript
[1,2,3]+[4,5] = "1,2,3,4,5"
```

### Mermaid
---

```mermaid
A[start]--->B[f]
B--->[yes]C[finish]
```