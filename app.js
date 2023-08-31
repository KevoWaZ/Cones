let rayon = document.getElementById("rayon")
let diametre = document.getElementById("diametre")
let perimetre = document.getElementById("perimetre")
let aireBase = document.getElementById("aireBase")
let hauteur = document.getElementById("hauteur")
let apotheme = document.getElementById("apotheme")
let aireLaterale = document.getElementById("aireLaterale")
let aireTotale = document.getElementById("aireTotale")
let volume = document.getElementById("volume")
let btnReset = document.getElementById("btnReset")
let Tau = Math.PI * 2
let modal = document.getElementById('modal')
let numVerif = {
    rayon: rayon.value,
    diametre: diametre.value,
    perimetre: perimetre.value,
    aireBase: aireBase.value
}
let numVerif2 = {
    hauteur: hauteur.value,
    apotheme: apotheme.value,
    aireLaterale: aireLaterale.value,
    aireTotale: aireTotale.value,
    volume: volume.value
}
let isBelowZero = (currentValue) => currentValue <= 0




function rayonF() {
    let number = Number(rayon.value)

    if (number <= 0) {
        rayon.classList.replace("is-link", "is-danger")
        modal.classList.add("is-active")
    } else {
        diametre.value = (number * 2).toFixed(3)
        perimetre.value = (diametre.value * Math.PI).toFixed(3)
        aireBase.value = (Math.PI * Math.pow(number, 2)).toFixed(3)

        resetEquation()
        rayonE()
        updateNumbers()
        dangerToLink()
    }
}

function diametreF() {
    let number = Number(diametre.value)

    if (number <= 0) {
        diametre.classList.replace("is-link", "is-danger")
        modal.classList.add("is-active")
    } else {
        rayon.value = (number / 2).toFixed(3)
        perimetre.value = (diametre.value * Math.PI).toFixed(3)
        aireBase.value = (Math.PI * Math.pow(rayon.value, 2)).toFixed(3)

        resetEquation()
        diametreE()
        updateNumbers()
        dangerToLink()
    }
}

function perimetreF() {
    let number = Number(perimetre.value)

    if (number <= 0) {
        perimetre.classList.replace("is-link", "is-danger")
        modal.classList.add("is-active")
    } else {
        diametre.value = (number / Math.PI).toFixed(3)
        rayon.value = (diametre.value / 2).toFixed(3)
        aireBase.value = (Math.PI * Math.pow(rayon.value, 2)).toFixed(3)

        resetEquation()
        perimetreE()
        updateNumbers()
        dangerToLink()
    }
}

function aireBaseF() {
    let number = Number(aireBase.value)

    if (number <= 0) {
        aireBase.classList.replace("is-link", "is-danger")
        modal.classList.add("is-active")
    } else {
        rayon.value = Math.sqrt(number / Math.PI).toFixed(3)
        diametre.value = (rayon.value * 2).toFixed(3)
        perimetre.value = (diametre.value * Math.PI).toFixed(3)

        resetEquation()
        aireBaseE()
        updateNumbers()
        dangerToLink()
    }
}



function hauteurF() {
    let number2 = Number(hauteur.value)

    if (Object.values(numVerif).some(isBelowZero)) {
        modal2.classList.add("is-active")
        hauteur.classList.replace("is-link", "is-danger")
    } else if (number2 <= 0) {
        modal.classList.add("is-active")
    } else {
        apotheme.value = Math.sqrt(Math.pow(hauteur.value, 2) + Math.pow(rayon.value, 2)).toFixed(3)
        aireLaterale.value = (Math.PI * rayon.value * apotheme.value).toFixed(3)
        aireTotale.value = (Number(aireLaterale.value) + Number(aireBase.value)).toFixed(3)
        volume.value = ((1 / 3) * aireBase.value * number2).toFixed(3)

        resetEquation2()
        hauteurE()
        updateNumbers2()
        dangerToLink()
    }
}

function apothemeF() {
    let number = Number(apotheme.value)

    if (Object.values(numVerif).some(isBelowZero)) {
        modal2.classList.add("is-active")
        apotheme.classList.replace("is-link", "is-danger")
    } else if (number <= 0) {
        modal.classList.add("is-active")
    } else {
        aireLaterale.value = (Math.PI * rayon.value * number).toFixed(3)
        aireTotale.value = (Number(aireLaterale.value) + Number(aireBase.value)).toFixed(3)
        hauteur.value = Math.sqrt(Math.pow(number, 2) - Math.pow(rayon.value, 2)).toFixed(3)
        volume.value = ((1 / 3) * aireBase.value * hauteur.value).toFixed(3)

        resetEquation2()
        apothemeE()
        updateNumbers2()
        dangerToLink()
    }
}

function aireLateraleF() {
    let number = Number(aireLaterale.value)

    if (Object.values(numVerif).some(isBelowZero)) {
        modal2.classList.add("is-active")
        aireLaterale.classList.replace("is-link", "is-danger")
    } else if (number <= 0) {
        modal.classList.add("is-active")
    } else {
        aireTotale.value = (Number(number) + Number(aireBase.value)).toFixed(3)
        apotheme.value = (number / (Math.PI * rayon.value)).toFixed(3)
        hauteur.value = Math.sqrt(Math.pow(apotheme.value, 2) - Math.pow(rayon.value, 2)).toFixed(3)
        volume.value = ((1 / 3) * aireBase.value * hauteur.value).toFixed(3)

        resetEquation2()
        aireLateraleE()
        updateNumbers2()
        dangerToLink()
    }
}

function aireTotaleF() {
    let number = Number(aireTotale.value)

    if (Object.values(numVerif).some(isBelowZero)) {
        modal2.classList.add("is-active")
        aireTotale.classList.replace("is-link", "is-danger")
    } else if (number <= 0) {
        modal.classList.add("is-active")
    } else {
        aireLaterale.value = (number - aireBase.value).toFixed(3)
        apotheme.value = (aireLaterale.value / (Math.PI * rayon.value)).toFixed(3)
        hauteur.value = (Math.sqrt(Math.pow(apotheme.value, 2) - Math.pow(rayon.value, 2))).toFixed(3)
        volume.value = ((1 / 3) * aireBase.value * hauteur.value).toFixed(3)

        resetEquation2()
        aireTotaleE()
        updateNumbers2()
        dangerToLink()
    }
}

function volumeF() {
    let number = Number(volume.value)

    if (Object.values(numVerif).some(isBelowZero)) {
        modal2.classList.add("is-active")
        volume.classList.replace("is-link", "is-danger")
    } else if (number <= 0) {
        modal.classList.add("is-active")
    } else {
        hauteur.value = 3 * (volume.value / aireBase.value).toFixed(3)
        apotheme.value = Math.sqrt(Math.pow(hauteur.value, 2) + Math.pow(rayon.value, 2)).toFixed(3)
        aireLaterale.value = (Math.PI * rayon.value * apotheme.value).toFixed(3)
        aireTotale.value = (Number(aireLaterale.value) + Number(aireBase.value)).toFixed(3)

        resetEquation2()
        volumeE()
        updateNumbers2()
        dangerToLink()
    }
}

rayon.onchange = function () {
    rayonF()
}

diametre.onchange = function () {
    diametreF()
}

perimetre.onchange = function () {
    perimetreF()
}

aireBase.onchange = function () {
    aireBaseF()
}





hauteur.onchange = function () {
    hauteurF()
}

apotheme.onchange = function () {
    apothemeF()
}

aireLaterale.onchange = function () {
    aireLateraleF()
}

aireTotale.onchange = function () {
    aireTotaleF()
}

volume.onchange = function () {
    volumeF()
}

btnReset.onclick = function () {
    rayon.value = ""
    diametre.value = ""
    perimetre.value = ""
    aireBase.value = ""
    hauteur.value = ""
    apotheme.value = ""
    aireLaterale.value = ""
    aireTotale.value = ""
    volume.value = ""
    updateNumbers()
    updateNumbers2()
    dangerToLink()
    resetEquation()
    resetEquation2()
}

function dangerToLink() {
    rayon.classList.replace("is-danger", "is-link")
    diametre.classList.replace("is-danger", "is-link")
    aireBase.classList.replace("is-danger", "is-link")
    diametre.classList.replace("is-danger", "is-link")
    hauteur.classList.replace("is-danger", "is-link")
    apotheme.classList.replace("is-danger", "is-link")
    aireLaterale.classList.replace("is-danger", "is-link")
    aireTotale.classList.replace("is-danger", "is-link")
    volume.classList.replace("is-danger", "is-link")
}

function updateNumbers() {
    numVerif.rayon = rayon.value
    numVerif.diametre = diametre.value
    numVerif.perimetre = perimetre.value
    numVerif.aireBase = aireBase.value
}

function updateNumbers2() {
    numVerif2.hauteur = hauteur.value,
        numVerif2.apotheme = apotheme.value,
        numVerif2.aireLaterale = aireLaterale.value,
        numVerif2.aireTotale = aireTotale.value,
        numVerif2.volume = volume.value
}

function resetEquation() {
    ajout = document.querySelector('.equation')
    ajout.innerHTML = ""
}

function resetEquation2() {
    ajout2 = document.querySelector('.equation2')
    ajout2.innerHTML = ""
}