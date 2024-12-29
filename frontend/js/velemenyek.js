//const myUrl = "http://127.0.0.1:8000";
const myUrl = "http://azenhazam.mywire.org";


function getVelemenyek(){
    let s = window.location.search;
    let myUrlParams = new URLSearchParams(window.location.search)
    let szam = myUrlParams.get("id");

    let ertekelesOsszesen = 0
    let ertekelesDb = 0
    let ertekeles_1 = 0
    let ertekeles_2 = 0
    let ertekeles_3 = 0
    let ertekeles_4 = 0
    let ertekeles_5 = 0

    document.querySelector("#baloldal").innerHTML =
    `<div>
        Még nincs értékelés...
    </div>`;

    document.querySelector("#jobboldal").innerHTML =
        `<div><a href="${myUrl}:8100/ertekeles.html?id=${szam}" class="btn btn-primary m-2">Értékelés</a></div>`;
    

    fetch(`${myUrl}:8000/egyertekeles?id=${szam}`).then(res=>res.json()).then(result=>{
        result.forEach(item => {

            ertekelesDb ++;
            ertekelesOsszesen += item.ertekeles;
            item.ertekeles == 1 ? ertekeles_1 ++ : ertekeles_1;
            item.ertekeles == 2 ? ertekeles_2 ++ : ertekeles_2;  
            item.ertekeles == 3 ? ertekeles_3 ++ : ertekeles_3;  
            item.ertekeles == 4 ? ertekeles_4 ++ : ertekeles_4;  
            item.ertekeles == 5 ? ertekeles_5 ++ : ertekeles_5;  

            document.querySelector("#baloldal").innerHTML =
            `<div>
                Összes értekelés : ${ertekelesDb} db
                <br> 
                Értékelések átlaga : ${ertekelesOsszesen / ertekelesDb}
            </div>`;

            document.querySelector("#kozep").innerHTML =
            `<div>
                5-os értekeles : ${ertekeles_5} db <br>
                4-es értekeles : ${ertekeles_4} db <br>
                3-as értekeles : ${ertekeles_3} db <br>
                2-es értekeles : ${ertekeles_2} db <br>
                1-es értekeles : ${ertekeles_1} db <br>
            </div>`;
            
            document.querySelector("#jobboldal").innerHTML =
//            `<div><a href="http://127.0.0.1:3000/ertekeles.html?id=${szam}" class="btn btn-primary m-2">Értékelés</a></div>`;
            `<div><a href="${myUrl}:8100/ertekeles.html?id=${szam}" class="btn btn-primary m-2">Értékelés</a></div>`;
        
            document.querySelector("#fetchResult").innerHTML +=
            `<div class = "row">
            <h4 class = card-title>${item.ertekelo} - ${item.iranyitoszam} értékelése: ${item.ertekeles}</h4>
                    <div class = "card-body">
                    ${ item.velemeny ? ss = '<p class = "card-text">Véleménye:<br> '+item.velemeny+'</p>' : ss = ''}
                    ${ item.pozitiv ? ss = '<p class = "card-text">Pozitívum :<br> '+item.pozitiv+'</p>' : ss = ''}
                    ${ item.negativ ? ss = '<p class = "card-text">Negatívum :<br> '+item.negativ+'</p>' : ss = ''}
                    </div>
                </div> 
            </div><hr>`;
        });
    })
}

getVelemenyek()