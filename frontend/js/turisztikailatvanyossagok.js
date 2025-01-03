//const myUrl = "http://127.0.0.1:8000";
const myUrl = "http://azenhazam.mywire.org";

function getTurisztikaiLatvanyossagok(){
    fetch(`${myUrl}:8000/attrakcio`).then(res=>res.json()).then(result=>{
        result.forEach(item => {
            document.querySelector("#fetchResult").innerHTML +=
            `
            <div class = "col-12 col-md-6 col-lg-3">
                <img class = "card-img-top" src = "${item.kepUrl}" alt = "">
                    <div class = "card-body">
                        <h4 class = card-title>${item.latvanyossagMegnevezes}</h4>
                        <p class = "card-text">${item.latvanyossagLeiras}</p>
                        <p class = "card-text">${item.varos.varosMegnevezes} - ${item.varos.orszag.orszagMegnevezes}</p>
                        
                        <a href = "ertekeles.html?id=${item.id}" class = "btn btn-primary">Értékelés</a>
                    </div>
                </div> 
            </div>
            `;
        });
    })
}


function getVarosok(){
    fetch(`${myUrl}:8000/varoslist`).then(res => res.json()).then(result =>{
        result.forEach(item => {
            document.querySelector("#varos").innerHTML +=
            `
            <option value = "${item.id}">${item.varosMegnevezes} - ${item.orszag.orszagMegnevezes}</option>
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

    const adat = {
        latvanyossagMegnevezes : _latvanyossagMegnevezese,
        latvanyossagLeiras : _latvanyossagLeiras,
        nyitvatartas : _nyitvatartas,
        kepUrl : _kepUrl,
        varos : _varos,
    };

    console.log(JSON.stringify(adat));

    fetch(`${myUrl}:8000/attrakcio`, 
        {
            method : "POST",
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(adat),
        }).then(response => response.json()).then( data => {
            console.log('Succes:', data);
            document.querySelector("#result").innerHTML = `
                <p class = "text-bg-success">Adatok rögzítve: ${data["latvanyossagMegnevezes"]}</p>
            `;
            }).catch((error) => {
            console.error('Error:', error);
            document.querySelector("#result").innerHTML = `
                <p class = "text-bg-warning">Error ${error}</p>
            `;
        });



    setTimeout(() => {
        window.location.href = "index.html"
    }, 3000);
    
}


getVarosok()
getTurisztikaiLatvanyossagok()