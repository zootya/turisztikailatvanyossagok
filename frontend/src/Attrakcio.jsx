import './Attrakcio.css'

const myUrl = "http://azenhazam.mywire.org";

function Attrakcio(props) {
    return (<div>
        <div class = "countainer">
            <div class = "row">
                <div class = "col">
                    <div class="d-flex position-relative m-2">
                        <img class="card-img-right m-2" src={props.kepUrl} className="kep" alt="kep" height = "200vh" />
                        <div class = "info bg-body-secondary p-2 m-2">    
                            <h2 class="card-title"> {props.latvanyossagMegnevezes}</h2>
                            <p class = "cars-text">{props.latvanyossagLeiras}</p>
                            <p class = "cars-text">Nyítvatartás: {props.nyitvatartas}</p>
                            <h6 class = "cars-title">{props.varos} - {props.orszag}</h6>
                        </div>
                        <div>
{/*
                            <a href={"http://127.0.0.1:8100/ertekeles.html?id=" + props.ertekelesLink} class="btn btn-primary m-2">Értékelés</a>
                            <a href={"http://127.0.0.1:8100/velemenyek.html?id=" + props.ertekelesLink} class="btn btn-warning m-2">Vélemények</a>
 */}
                            <a href={myUrl+":8100/ertekeles.html?id=" + props.ertekelesLink} class="btn btn-primary m-2">Értékelés</a>
                            <a href={myUrl+":8100/velemenyek.html?id=" + props.ertekelesLink} class="btn btn-warning m-2">Vélemények</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}

export default Attrakcio
