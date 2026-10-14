# 10.05. / Carousel Feladat

## Terv
>1. Javascript function letrehozasa ami kepes elemet genearalni.
>2. A carousel vazat a functinnel felepiteni
>3. A felepitett valzat appendelni a bodyba

### 1. Javascript Function Letrehozasa

```Javascript
function GenerateElement(elementName="div",elementAttributes,elementInnerText="") {
  const newElement = document.createElement(elementName)
  try {
      for (let i = 0; i < elementAttributes.length; i++) {
      newElement.setAttribute(elementAttributes[i][0],elementAttributes[i][1])
      }
  } catch (e) {console.log(`No attributes were set! Error: ${e}`)}
  newElement.innerText = elementInnerText
  return newElement
  }
```
> Csinaltam egy function-t ami bekeri az element nevet string-kent, attributumait listaban (```[[atr1name,atr1value],[atr2name,atr2value]]```) illetve az elementben talalhato szoveget string-kent.

### 2. Carousel Felepitese

>Minden elementet ami mar letezett vagy en hoztam letre azt egy const valtozoban taroltam el, illetve csinaltam egy listat a carousel kepeinek link-jevel.
```Javascript
const imageURLs = [...]
const body = document.querySelector("body")
const carouselExampleIndicators = GenerateElement("div",[["id","carouselExampleIndicators"],["class","carousel slide"],["data-ride","carousel"]])
```
>Itt mar lathatjuk is mukodesben a function-omet.
---
>Ezek utan elkezdem lemasolni a carouselt
```Javascript
const carouselIndicators = GenerateElement("ol",[["class","carousel-indicators"]])
for (let i = 0; i < 3; i++) {
    if (i == 0) {
        carouselIndicators.append(GenerateElement("li", [["data-target","#carouselExampleIndicators"],["data-slide-to",`${i}`],["class","active"]]))
    } else {
        carouselIndicators.append(GenerateElement("li", [["data-target","#carouselExampleIndicators"],["data-slide-to",`${i}`]]))
    }
}
carouselExampleIndicators.append(carouselIndicators)
```
>Pelda keppen betuztem, itt hoztam letre az elso reszet, az indicator-okat amik a kis csikok lent kozepen. Ehez egy for function-t hasznaltam hogy ne legyen mar az alapbol hosszu kodbol megtobb.

>Ameddig egy element-nek volt child element-je addig mindenhol variable-be raktam az parent element-et.

### 3. Carousel Hozzaadasa A Body-hoz
```Javascript
body.append(carouselExampleIndicators)
```
>Ennyi volt.

