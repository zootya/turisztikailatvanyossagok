
function getTurisztikaiLatvanyossagok(){
    fetch("http://127.0.0.1:8000/latvany").then(res=>res.json()).then(result=>{
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

getTurisztikaiLatvanyossagok()