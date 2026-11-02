function jegy(pontszam) {
    if (pontszam < 0 || pontszam > 100 || pontszam.isNaN == NaN) {throw new Error("Érvénytelen pontszám")}
    else if (pontszam <= 49) {return 1}
    else if (pontszam <= 59){return 2}
    else if (pontszam <= 74){return 3}
    else if (pontszam <= 89){return 4}
    else if (pontszam <= 100){return 5}
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