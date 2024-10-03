import { basisAgendaPunten } from "./agendapunten.js";
import { updateLS } from "./hulpfuncties.js";

//localStorage.setItem('opgeslagenAgendaPunten',JSON.stringify(basisCitaten));
let alleAgendaPunten = JSON.parse(localStorage.getItem('opgeslagenAgendaPunten')) || [];



function toonMelding(soort, melding) {
    document.querySelector('#feedback').innerHTML = `<p class="${soort}">${melding}</p>`
}

document.querySelector('form.add').addEventListener('submit', (e) => {
    e.preventDefault();
    voegToe();
})


function voegToe() {
    const nieuwAgendapunt = {
        Datum: document.querySelector('#Datum').value,
        Artiest: document.querySelector('#Artiest').value,

    };
    if (nieuwAgendapunt.Datum && nieuwAgendapunt.Artiest) {
        const alleTitels = []
        alleAgendaPunten.forEach((Agenda) => { alleTitels.push(Agenda.Datum); });
        if (!alleTitels.includes(nieuwAgendapunt.Datum)) {
            alleAgendaPunten.push(nieuwAgendapunt);
            updateLS(alleAgendaPunten);
            toonMelding('succes', 'Nieuw agendapunt toegevoegd.')
        } else {
            toonMelding('fout', 'Op deze datum komt er al een artiest spelen!')
        }
    } else {
        toonMelding('fout', 'Niet alle velden ingevuld! Nieuw agendapunt niet toegevoegd.')
    }
}