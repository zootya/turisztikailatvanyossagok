const myUrl = "http://127.0.0.1:8000";

function getTurisztikaiLatvanyossagEgy(){
    let s = window.location.search;

    let myUrlParams = new URLSearchParams(window.location.search)
    let szam = myUrlParams.get("id");

    fetch(`${myUrl}/egyattrakcio?id=${szam}`).then(res=>res.json()).then(result=>{ 
        document.querySelector("#megnevezes").innerHTML = `<img src = "${result.kepUrl}" height = "200px"></img>`;
        document.querySelector("#megnevezes").innerHTML += result.latvanyossagMegnevezes;
        document.querySelector("#latvanyossag_id").value = result.id;
        console.log(` Megjött ${result.id}`)
    })
}


function addErtekeles(){
    const _ertekeles = document.querySelector("#ertekeles").value;
    const _velemeny = document.querySelector("#velemeny").value;
    const _pozitiv = document.querySelector("#elonyok").value;
    const _negativ = document.querySelector("#hatranyok").value;
    const _iranyitoszam = document.querySelector("#iranyitoszam").value;
    const _latvanyossag_id = document.querySelector("#latvanyossag_id").value;

    const adat = {
        ertekeles : _ertekeles,
        velemeny : _velemeny,
        pozitiv : _pozitiv,
        negativ : _negativ,
        iranyitoszam : _iranyitoszam,
        attrakcio : _latvanyossag_id
    };

    console.log(JSON.stringify(adat));

    fetch(`${myUrl}/ertekeles`, 
        {
            method : "POST",
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(adat),
        }).then(response => response.json()).then( data => {
            console.log('Succes:', data);
            document.querySelector("#result").innerHTML = `
                <p class = "text-bg-success">Adatok rögzítve: ${data["ertekeles"]}</p>
            `;
            }).catch((error) => {
            console.error('Error:', error);
            document.querySelector("#result").innerHTML = `
                <p class = "text-bg-warning">Error ${error}</p>
            `;
        });


//    setTimeout(() => {
//        window.location.href = "index.html"
//    }, 3000);
    
}


getTurisztikaiLatvanyossagEgy()