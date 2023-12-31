let ajout = document.querySelector('.equation')

// PREMIERE PARTIE

function rayonE() {
    let ajout = document.querySelector('.equation')

    let diametre = document.createElement("h1")
    diametre.id = "diametre"
    diametre.innerHTML = `\\(D = r * 2\\)`
    ajout.appendChild(diametre)

    let perime = document.createElement("h1")
    perime.id = "perime"
    perime.innerHTML = `\\(P = D * \\pi\\)`
    ajout.appendChild(perime)

    let aireBase = document.createElement("h1")
    aireBase.id = "aireBase"
    aireBase.innerHTML = `\\(A_{b} = \\pi * r²\\)`
    ajout.appendChild(aireBase)

    MathJax.typesetPromise()
}

function diametreE() {
    let ajout = document.querySelector('.equation')

    let rayon = document.createElement("h1")
    rayon.id = "rayon"
    rayon.innerHTML = `\\(r = D / 2\\)`
    ajout.appendChild(rayon)

    let perime = document.createElement("h1")
    perime.id = "perime"
    perime.innerHTML = `\\(P = D * \\pi\\)`
    ajout.appendChild(perime)

    let aireBase = document.createElement("h1")
    aireBase.id = "aireBase"
    aireBase.innerHTML = `\\(A_{b} = \\pi * r² \\)`
    ajout.appendChild(aireBase)

    MathJax.typesetPromise()
}

function perimetreE() {
    let ajout = document.querySelector('.equation')

    let diametre = document.createElement("h1")
    diametre.id = "diametre"
    diametre.innerHTML = `\\(a = P / \\pi\\)`
    ajout.appendChild(diametre)

    let rayon = document.createElement("h1")
    rayon.id = "rayon"
    rayon.innerHTML = `\\(r = D / 2\\)`
    ajout.appendChild(rayon)

    let aireBase = document.createElement("h1")
    aireBase.id = "aireBase"
    aireBase.innerHTML = `\\(D = \\pi * r² \\)`
    ajout.appendChild(aireBase)

    MathJax.typesetPromise()
}

function aireBaseE() {
    let ajout = document.querySelector('.equation')

    let rayon = document.createElement("h1")
    rayon.id = "rayon"
    rayon.innerHTML = `\\(r = \\sqrt{A_{b} / \\pi}\\)`
    ajout.appendChild(rayon)

    let diametre = document.createElement("h1")
    diametre.id = "diametre"
    diametre.innerHTML = `\\(D = r * 2\\)`
    ajout.appendChild(diametre)

    let perimetre = document.createElement("h1")
    perimetre.id = "perimetre"
    perimetre.innerHTML = `\\(P = D * \\pi\\)`
    ajout.appendChild(perimetre)

    MathJax.typesetPromise()
}


////// DEUXIEMME PARTIE

function hauteurE() {
    let ajout2 = document.querySelector('.equation2')

    let apotheme = document.createElement("h1")
    apotheme.id = "apotheme"
    apotheme.innerHTML = `\\(a = \\sqrt{H² + r²}\\)`
    ajout2.appendChild(apotheme)

    let aireLaterale = document.createElement("h1")
    aireLaterale.id = "aireLaterale"
    aireLaterale.innerHTML = `\\(A_{l} = \\pi * r * a\\)`
    ajout2.appendChild(aireLaterale)

    let aireTotale = document.createElement("h1")
    aireTotale.id = "aireTotale"
    aireTotale.innerHTML = `\\(A_{t} = A_{b} + A_{l}\\)`
    ajout2.appendChild(aireTotale)

    let volume = document.createElement("h1")
    volume.id = "volume"
    volume.innerHTML = `\\(V = \\frac{1}{3} / A_{b} * H\\)`
    ajout2.appendChild(volume)

    MathJax.typesetPromise()
}

function apothemeE() {
    let ajout2 = document.querySelector('.equation2')

    let aireLaterale = document.createElement("h1")
    aireLaterale.id = "aireLaterale"
    aireLaterale.innerHTML = `\\(A_{l} = \\pi * r * a\\)`
    ajout2.appendChild(aireLaterale)

    let aireTotale = document.createElement("h1")
    aireTotale.id = "aireTotale"
    aireTotale.innerHTML = `\\(A_{t} = A_{b} + A_{l}\\)`
    ajout2.appendChild(aireTotale)

    let hauteur = document.createElement("h1")
    hauteur.id = "hauteur"
    hauteur.innerHTML = `\\(H = \\sqrt{a² - r²}\\)`
    ajout2.appendChild(hauteur)

    let volume = document.createElement("h1")
    volume.id = "volume"
    volume.innerHTML = `\\(V = \\frac{1}{3} / A_{b} * H\\)`
    ajout2.appendChild(volume)

    MathJax.typesetPromise()
}

function aireLateraleE() {
    let ajout2 = document.querySelector('.equation2')

    let aireTotale = document.createElement("h1")
    aireTotale.id = "aireTotale"
    aireTotale.innerHTML = `\\(A_{t} = A_{b} + A_{l}\\)`
    ajout2.appendChild(aireTotale)

    let apotheme = document.createElement("h1")
    apotheme.id = "apotheme"
    apotheme.innerHTML = `\\(a = A_{l} / (\\pi * r)\\)`
    ajout2.appendChild(apotheme)

    let hauteur = document.createElement("h1")
    hauteur.id = "hauteur"
    hauteur.innerHTML = `\\(H = \\sqrt{a² - r²}\\)`
    ajout2.appendChild(hauteur)

    let volume = document.createElement("h1")
    volume.id = "volume"
    volume.innerHTML = `\\(V = \\frac{1}{3} / A_{b} * H\\)`
    ajout2.appendChild(volume)

    MathJax.typesetPromise()
}

function aireTotaleE() {
    let ajout2 = document.querySelector('.equation2')

    let aireLaterale = document.createElement("h1")
    aireLaterale.id = "aireLaterale"
    aireLaterale.innerHTML = `\\(A_{l} = A_{t} - A_{b}\\)`
    ajout2.appendChild(aireLaterale)

    let apotheme = document.createElement("h1")
    apotheme.id = "apotheme"
    apotheme.innerHTML = `\\(a = A_{l} / (\\pi * r)\\)`
    ajout2.appendChild(apotheme)

    let hauteur = document.createElement("h1")
    hauteur.id = "hauteur"
    hauteur.innerHTML = `\\(H = \\sqrt{a² - r²}\\)`
    ajout2.appendChild(hauteur)

    let volume = document.createElement("h1")
    volume.id = "volume"
    volume.innerHTML = `\\(V = \\frac{1}{3} / A_{b} * H\\)`
    ajout2.appendChild(volume)

    MathJax.typesetPromise()
}

function volumeE() {
    let ajout2 = document.querySelector('.equation2')

    let hauteur = document.createElement("h1")
    hauteur.id = "hauteur"
    hauteur.innerHTML = `\\(H = 3 * (V / A_{b})\\)`
    ajout2.appendChild(hauteur)

    let apotheme = document.createElement("h1")
    apotheme.id = "apotheme"
    apotheme.innerHTML = `\\(a = A_{l} / (\\pi * r)\\)`
    ajout2.appendChild(apotheme)

    let aireLaterale = document.createElement("h1")
    aireLaterale.id = "aireLaterale"
    aireLaterale.innerHTML = `\\(A_{l} = \\pi * r * a\\)`
    ajout2.appendChild(aireLaterale)

    let aireTotale = document.createElement("h1")
    aireTotale.id = "aireTotale"
    aireTotale.innerHTML = `\\(A_{t} = A_{l} + A_{b}\\)`
    ajout2.appendChild(aireTotale)

    MathJax.typesetPromise()
}