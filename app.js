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




function rayonF() {
        let number = Number(rayon.value)

        diametre.value = number * 2
        perimetre.value = diametre.value * Math.PI
        aireBase.value = Math.PI * Math.pow(number, 2)
}

function diametreF() {
        let number = Number(diametre.value)

        rayon.value = number / 2
        perimetre.value = diametre.value * Math.PI
        aireBase.value = Math.PI * Math.pow(rayon.value, 2)
}

function perimetreF() {
        let number = Number(perimetre.value)

        diametre.value = number / Math.PI
        rayon.value = diametre.value / 2
        aireBase.value = Math.PI * Math.pow(rayon.value, 2)
}

function aireBaseF() {
        let number = Number(aireBase.value)

        rayon.value = Math.sqrt(number / Math.PI)
        diametre.value = rayon.value * 2
        perimetre.value = diametre.value * Math.PI
}



function hauteurF() {
        let number2 = Number(hauteur.value)

        apotheme.value = Math.sqrt(Math.pow(hauteur.value, 2) + Math.pow(rayon.value, 2)).toFixed(12)
        aireLaterale.value = Math.PI * rayon.value * apotheme.value
        aireTotale.value = (Number(aireLaterale.value) + Number(aireBase.value)).toFixed(12)
        volume.value = (1/3) * aireBase.value * number2
}

function apothemeF() {
        let number = Number(apotheme.value)

        aireLaterale.value = Math.PI * rayon.value * number
        aireTotale.value = (Number(aireLaterale.value) + Number(aireBase.value)).toFixed(12)
        hauteur.value = Math.sqrt(Math.pow(number, 2) - Math.pow(rayon.value, 2))
        volume.value = (1/3) * aireBase.value * hauteur.value
}

function aireLateraleF() {
        let number = Number(aireLaterale.value)

        aireTotale.value = (Number(number) + Number(aireBase.value)).toFixed(12)
        apotheme.value = number / (Math.PI * rayon.value)
        hauteur.value = Math.sqrt(Math.pow(apotheme.value, 2) - Math.pow(rayon.value, 2))
        volume.value = (1/3) * aireBase.value * hauteur.value
}

function aireTotaleF() {
        let number = Number(aireTotale.value)

        aireLaterale.value = (number - aireBase.value).toFixed(12)
        apotheme.value = (aireLaterale.value / (Math.PI * rayon.value)).toFixed(12)
        hauteur.value = (Math.sqrt(Math.pow(apotheme.value, 2) - Math.pow(rayon.value, 2))).toFixed(12)
        volume.value = ((1/3) * aireBase.value * hauteur.value).toFixed(12)
}

function volumeF() {
        let number = Number(volume.value)

        hauteur.value = 3 * (volume.value / aireBase.value)
        apotheme.value = Math.sqrt(Math.pow(hauteur.value, 2) + Math.pow(rayon.value, 2)).toFixed(12)
        aireLaterale.value = Math.PI * rayon.value * apotheme.value
        aireTotale.value = (Number(aireLaterale.value) + Number(aireBase.value)).toFixed(12)
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

btnReset.onclick = function() {
    rayon.value = ""
    diametre.value = ""
    perimetre.value = ""
    aireBase.value = ""
    hauteur.value = ""
    apotheme.value = ""
    aireLaterale.value = ""
    aireTotale.value = ""
    volume.value = ""
}