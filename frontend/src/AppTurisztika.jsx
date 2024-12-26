import './AppTurisztika.css'
import MyHeaderMenu from './MyHeaderMenu.jsx'
import MyFooterMenu from './MyFooterMenu.jsx'
import Attrakcio from './Attrakcio.jsx'

function AppTurisztika() {
    return (
        <div>
            <header>
                <MyHeaderMenu />
            </header>

            <container>
                <Attrakcio 
                    kepUrl = "https://i.szalas.hu/pois/274/original/16300.jpg" 
                    latvanyossagMegnevezes = "Református Nagytemplom"
                    nyitvatartas = "H: zárva; K: 9-17; Sze: 9-17; Cs: 9-19; P: 9-17; Szo: 9-17; V: 8-20"
                    latvanyossagLeiras = "A debreceni református nagytemplom Debrecen legjellegzetesebb épülete, 1500 m²-es alapterületével az ország legnagyobb református temploma, ezenkívül a legnagyobb protestáns templom is az országban. A Magyarországi Református Egyház jelképe, miatta nevezik Debrecent gyakran „kálvinista Rómának”. 1805 és 1824 között épült, klasszicista stílusban, a Kossuth tér és a Kálvin tér közt áll, a belvárosban."
                    varos = "Debrecen - Magyarország"
                    ertekelesLink = "https://i.szalas.hu/pois/274/original/16300.jpg"
                />


                <Attrakcio 
                    kepUrl = "https://i.szalas.hu/pois/274/original/16300.jpg" 
                    latvanyossagMegnevezes = "Református Nagytemplom"
                    nyitvatartas = "H: zárva; K: 9-17; Sze: 9-17; Cs: 9-19; P: 9-17; Szo: 9-17; V: 8-20"
                    latvanyossagLeiras = "A debreceni református nagytemplom Debrecen legjellegzetesebb épülete, 1500 m²-es alapterületével az ország legnagyobb református temploma, ezenkívül a legnagyobb protestáns templom is az országban. A Magyarországi Református Egyház jelképe, miatta nevezik Debrecent gyakran „kálvinista Rómának”. 1805 és 1824 között épült, klasszicista stílusban, a Kossuth tér és a Kálvin tér közt áll, a belvárosban."
                    varos = "Debrecen - Magyarország"
                    ertekelesLink = "https://i.szalas.hu/pois/274/original/16300.jpg"
                />

            </container>
            
            <footer>
                <MyFooterMenu />
            </footer>
        </div>
    )
}

export default AppTurisztika
