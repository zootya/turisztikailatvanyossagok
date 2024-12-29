import './AppTurisztika.css'
import MyHeaderMenu from './MyHeaderMenu.jsx'
import MyFooterMenu from './MyFooterMenu.jsx'
import Attrakcio from './Attrakcio.jsx'

import { useEffect, useState } from 'react';

function AppTurisztika() {
    //const myUrl = "http://127.0.0.1:8000";
    const myUrl = "http://azenhazam.mywire.org";

    const [data, setdata] = useState([]);

    useEffect(() => {
        fetch(myUrl+":8000/attrakcio")
        .then((response) => {response.json()
            .then((res) => {
                setdata(res)
            } )
        })
    },[]);

    console.log(data);

    return (
        <div>
            <div>
                <MyHeaderMenu />
            </div>

            <div>
            {/*                
                <Attrakcio 
                    kepUrl = "https://i.szalas.hu/pois/274/original/16300.jpg" 
                    latvanyossagMegnevezes = "Református Nagytemplom"
                    nyitvatartas = "H: zárva; K: 9-17; Sze: 9-17; Cs: 9-19; P: 9-17; Szo: 9-17; V: 8-20"
                    latvanyossagLeiras = "A debreceni református nagytemplom Debrecen legjellegzetesebb épülete, 1500 m²-es alapterületével az ország legnagyobb református temploma, ezenkívül a legnagyobb protestáns templom is az országban. A Magyarországi Református Egyház jelképe, miatta nevezik Debrecent gyakran „kálvinista Rómának”. 1805 és 1824 között épült, klasszicista stílusban, a Kossuth tér és a Kálvin tér közt áll, a belvárosban."
                    varos = "Debrecen - Magyarország"
                    ertekelesLink = "https://i.szalas.hu/pois/274/original/16300.jpg"
                />
            */}

                {data.map( (item, key) =>

                    <Attrakcio 
                        id = {item.id}
                        kepUrl = {item.kepUrl}
                        latvanyossagMegnevezes = {item.latvanyossagMegnevezes}
                        nyitvatartas = {item.nyitvatartas}
                        latvanyossagLeiras = {item.latvanyossagLeiras}
                        varos = {item.varos.varosMegnevezes} 
                        orszag = {item.varos.orszag.orszagMegnevezes}
                        ertekelesLink = {item.id}
                    />
                )}
            </div>
            
            <div>
                <MyFooterMenu />
            </div>
        </div>
    )
}

export default AppTurisztika