const womenSurname = ["Nováková", "Svobodová", "Novotná", "Kalná", "Dvořáková", "Opatrná", "Černá",
"Kučerová", "Veselá", "Horáková", "Němcová", "Pokorná", "Pospíšilová", "Hájková", "Švejdová", "Benešová",
 "Slaninová", "Růžičková", "Fialová", "Drahá" , "Sedláčková", "Zemanová", "Vaňková", "Vejvodová", "Urbanová"];

const womenFirstName = ["Adéla", "Lucie", "Martina", "Petra", "Amanada", "Anežka", "Magda", "Aneta", "Rebeka",
"Sára", "Alexandra", "Jana", "Marie", "Eva", "Hana", "Věra", "Michaela", "Daniela", "Jitka", "Zdeňka", "Helena",
"Ludmila", "Ivana", "Eliška", "Monika"];

const menSurname = ["Novák", "Svoboda", "Novotný", "Kalný", "Dvořák", "Opatrný", "Černý", "Kučera",
"Veselý", "Horák", "Němec", "Pokorný", "Pospíšil", "Hájek", "Švejda", "Beneš",
"Slanina", "Růžička", "Fiala", "Drahý" , "Sedláček", "Zeman", "Vaňek", "Vejvoda", "Urban"]
;
const menFirstName = ["Martin", "Petr", "Stefan", "Robin", "Oliver", "Ondřej", "Jaroslav", "Václav",
"Jan", "Marek", "Adam", "Daniel", "Arnošt", "Čestmír", "Mikuláš", "Ctirad", "Zdeněk", "Patrik", "Lumír",
"Radovan", "Matěj", "Matyáš", "Miloš", "Svatopluk", "Hynek"];

const workLoad = [10, 20, 30, 40];

const gender = ["Male", "Female"];

let employes = {};


let argumentData = {};

let women = [];

let min;

let max;

let count;




function getData(){
    
}

function main(){
    min = parseInt(document.getElementById('minAge').value);
    max = parseInt(document.getElementById('maxAge').value);
    count = parseInt(document.getElementById('numOfEmployes').value);
    const date = new Date();
    let x = Math.random() * 1 + 1;
    if(true){
        for(let i = 0; i < 5; i++){
            vek = Math.floor(Math.random() * (max - min)) + min;
            console.log(vek);
          employes = {
            gender : gender[1],
            name : womenFirstName[Math.floor(Math.random()* womenFirstName.length)],
            surname: womenSurname[Math.floor(Math.random()* womenSurname.length)],
            workload : workLoad[Math.floor(Math.random()* workLoad.length)],
            birthdate : new Date(2022 - vek,Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 31) + 1,)}
            
        console.log(min, max)
        women.push(employes);
        str = JSON.stringify(employes)
        }
    }
    console.log(women)  
} 