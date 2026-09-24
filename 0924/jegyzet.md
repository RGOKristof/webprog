# 09.24.
* CSS
  * [Attribute Selectors](#Attribute-Selectors)
  * [Best grid-template-coloumn Setup](#Best-grid-template-coloumn-Setup)
  * [prefers-reduced-motion](#prefers-reduced-motion)

## CSS
### Attribute Selectors

>Példa:
```CSS
.classington[aria-pressed="true"]{...}
```
>Az element query-je utan irjuk a kockas zarojelbe az atributum filtert.

---
### Best grid-template-coloumn Setup
>Ez a setup egy nagyon clean, szinte mar flex szeru grid flowt csinaln neked.
```CSS
grid-template-columns:repeat(auto-fit, minmax(min(100%,16rem), 1fr));
```
>`auto-fit`: annyi coloumn-ot csinal amennyit tud.

>`auto-fill` meg ures grideket is letrehoz csak hogy consistens maradjon.

---
### prefers-reduced-motion
>Ezt csak straight up nem tudom hogy kene megjegyeznem ember meg szint sem valt ez a buzi ha jol irod, konkretan nem tudod ha jol mukodik... amugy gondolom browser settingsbol szedi az infot
>Azert itt egy pelda:
```CSS
@media (prefers-reduced-motion: reduce) {
    *{
        transition: .01s !important;
        animation-duration: .01s !important;
    }
}
```


