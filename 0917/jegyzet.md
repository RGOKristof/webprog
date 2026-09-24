# 09.17.

* Aria
  * [aria-label](#aria-label)
  * [aria-labelledby](#aria-labelledby)
  * [aria-pressed](#aria-pressed)
  * [aria-live](#aria-live)
* CSS
  * [flex-wrap](#flex-wrap)
  * [ch](#ch)
* JS
  * [defer](#defer)
  * [type](#type)
  * [data-category](#data-category)

## Aria
### aria-label
>Ad egy nem lathato label-t egy elementnek. Inkabb az ***[aria-labelledby](#aria-labelledby)***-t hasznald!

*(string)*

---
### aria-labelledby
>Egy masik element label-jet referencialja es hasznalja, ez sem lathato de legtobbszor egy lathato elementet referencial. 

*(string)*

---
### aria-pressed
>Egy toggle button-ra alakitja a sima buttont kinda haszontalan meg jobb is a sima buttont hasznalni ilyenre javascriptel. ***Nem biztos info, Dufkat meg kell kerdezni!*** 

*(true/false/mixed[full bs])*
---
### aria-live
>Ha valtozas tortenik az oldalon amit pont nem fokuszal a user akkor ez elmondja a usernek hogy mi valtozott es akkor amikor akarod pl. polite (a szoveg vegen mondja). Akkor trigger-elodik ha valtozas tortenik egy elemben aminek atributuma az `area-live` 

```HTML
<div aria-live="polite"></div>
``` 
>Ha beleirunk valamit a div-be (JS-el) triggerel.

*(off,assertive,polite)*

---

## CSS
### flex-wrap
>Tegyuk fel van az egesz oldalon ket teglalap egymas melett es kitoltik az egesz oldalt ha *nowrap*-et hasznalsz az oldal szelesseget kicsinyitve egyre jobban osszenyomodnak a teglalapok ameddig csak ket csik nem lesz. Viszont ha a *wrap*-et hasznalod akkor a breakpoint-jukon ebben az esetben `min-width`-en egymas ala bemennek igy nem nyomodnak ossze nevetsegesen.

*(nowrap,wrap)*

---
### ch
>Ez a unit az adott font-nak a "0" karakter szelesseget veszi alapul. Ezt akkor jo hasznalni ha egy szoveget tartalmazo doboznak akarunk allitani paddinget vagy barmi ilyet.

---
## JS
### defer
>A JavaScript filet eloszor csak gyorstarba rakja majd a DOM betoltese utan tolti be.

---
### type
>Valoszinuleg a leghaszontalanabb dolog ever. ***Meg kell kerdezni Dufkat minek letezik!***

*(submit,reset,button)*

---
### data-category
>Hosszu tortenet...[MDN data-category](https://developer.mozilla.org/en-US/docs/Web/HTML/How_to/Use_data_attributes)