
function getTurisztikaiLatvanyossagok(){
    fetch("http://127.0.0.1:8000/latvany/").then(res=>res.json()).then(result=>{
        result.forEach(item => {
            document.querySelector("#fetchResult").innerHTML +=
            `
            <div class = "col-12 col-md-6 col-lg-3">
                <img class = "card-img-top" src = "${item.kepUrl}" alt = "">
                    <div class = "card-body">
                        <h4 class = card-title>${item.latvanyossagMegnevezes}</h4>
                        <p class = "card-text">${item.latvanyossagLeiras}</p>
                        
                        <a href = "#" class = "btn btn-primary">Elküldés </a>
                    </div>
                </div> 
            </div>
            `;
        });
    })
}

function addLatvany(){
    const _latvanyossagMegnevezese = document.querySelector("#megnevezes").value;
    const _latvanyossagLeiras = document.querySelector("#leiras").value;
    const _nyitvatartas = document.querySelector("#nyitvatartas").value;
    const _kepUrl = document.querySelector("#kepUrl").value;
    const _varos = document.querySelector("#varos").value;
    const _ertekeles = document.querySelector("#csillag").value;

    const adat = {
        latvanyossagMegnevezes : _latvanyossagMegnevezese,
        latvanyossagLeiras : _latvanyossagLeiras,
        ertekeles : _ertekeles,
        nyitvatartas : _nyitvatartas,
        kepUrl : _kepUrl,
        varos : _varos
    };

    console.log(JSON.stringify(adat));

    fetch("http://127.0.0.1:8000/latvany/", 
        {
            method : "POST",
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(adat),
    //}).then(response => response.json()).then( data => {
    //    console.log('Succes:', data);
    //}).catch((error) => {
    //    console.error('Error:', error);
        });
}

getTurisztikaiLatvanyossagok()