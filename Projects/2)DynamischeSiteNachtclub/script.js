import { updateLS } from "./hulpfuncties.js";

let alleAgendaPunten = JSON.parse(localStorage.getItem('opgeslagenAgendaPunten')) || [];


const agendasectie = document.querySelector('.wrapper section.agendapunten')
const update = new CustomEvent('agendaUpdate')



/*UITLEG*/
// = UITGEQUOTE


/* KIJKEN OF JE SCRIPT.JS GEKOPPELD IS AAN HET INDEX.HTML BESTAND. DIT WORDT GETOONT IN DE CONSOLE VAN JE BROWSER */
//console.log("Het werkt!")

/* HIER KAN JE ZIEN WELKE AANPASSINGENJE KAN DOEN IN JE CONSOLE VAN JE BROWSER. 
IN CONSOLE VAN BROWSER KLIK JE H1 OPEN EN DAN BIJ HET INNERHTML STAAT WAT IK WIL VERANDEREN */
//console.log(document.querySelector('h1'));




/* ELEMENT VERWIJDEREN */
document.querySelector('p#geenagendapunten').remove()
//document.getElementById('geenAgendaaten').remove()












function voegAgendaPuntToe(Agenda) {
    const AgendaArtikel = document.createElement('article')
    AgendaArtikel.innerHTML = `<p>${Agenda.Datum}</p><p>${Agenda.Artiest}</p>`
    const deleteKnop = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    deleteKnop.setAttribute('viewbox', '0 0 24 24');
    deleteKnop.setAttribute('fill', 'none');
    deleteKnop.setAttribute('width', '30px');
    deleteKnop.setAttribute('heigth', '30px');
    deleteKnop.innerHTML = '<path d="M10 12V17" stroke="#ff3ecf" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 12V17" stroke="#ff3ecf" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 7H20" stroke="#ff3ecf" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10" stroke="#ff3ecf" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke="#ff3ecf" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>';
    AgendaArtikel.insertAdjacentElement('afterbegin', deleteKnop);
    document.querySelector('section.agendapunten').appendChild(AgendaArtikel);
    deleteKnop.addEventListener('click', () => {
        //console.log('geklikt op ' + Agenda.titel)
        verwijderAgendapunt(Agenda.Datum);
        window.location.reload();

    })
}


/*MANIEREN LUSSEN*/
//LUSJE
//for (let i = 0; i < alleAgendaPunten.length; i++) {
//voegAgendaPuntToe(alleAgendaPunten[i]);
//}

//LUSJE
//for (const Agendaaat of alleAgendaPunten) {
//    voegAgendaPuntToe(Agendaaat)
//}

//LUSJE
alleAgendaPunten.forEach(voegAgendaPuntToe);

















function verwijderAgendapunt(verwijderTitel) {
    const plaats = alleAgendaPunten.findIndex(Agenda => Agenda.Datum === verwijderTitel
    );
    alleAgendaPunten.splice(plaats, 1);
    updateLS(alleAgendaPunten);
    agendasectie.dispatchEvent(update);
}

function toonMelding(soort, melding) {
    document.querySelector('#feedback').innerHTML = `<p class="${soort}">${melding}</p>`
}


function voegToe() {
    const nieuwAgendapunt = {
        Datum: document.querySelector('#Datum').value,
        Artiest: document.querySelector('#Artiest').value,

    };
    if (nieuwAgendapunt.Datum && nieuwAgendapunt.Artiest) {
        const alleTitels = []
        alleAgendaPunten.forEach((Agenda) => { alleTitels.push(Agenda.Datum); });
        console.log(alleTitels)
        if (!alleTitels.includes(nieuwAgendapunt.Datum)) {
            alleAgendaPunten.push(nieuwAgendapunt);
            agendasectie.dispatchEvent(update);
            toonMelding('succes', 'Nieuw Agendaaat toegevoegd.')
        } else {
            toonMelding('fout', 'Deze titel bestaat al!')
        }
    } else {
        toonMelding('fout', 'Niet alle velden ingevuld! Nieuw Agendaaat niet toegevoegd.')
    }
}



agendasectie.addEventListener('agendaUpdate', toonAgendaPunten)


toonAgendaPunten();














