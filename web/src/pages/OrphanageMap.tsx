import React from 'react'
import {Link} from 'react-router-dom';
import { FiPlus} from 'react-icons/fi';


import mapMarkerImg from '../images/map-marker.svg';

import "../styles/pages/orphanage-map.css";

function OrphanageMap() {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy"/>

                    <h2>Escolha um organato no mapa</h2>
                    <p>Muitas crianças estão esperando sua visita :)</p>
                </header>

                <footer>
                    <strong>São José dos Campos</strong>
                    <span>São Paulo</span>
                </footer>
            </aside>

            <div></div>

            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#FFF" />
            </Link>
        </div>
    )
}

export default OrphanageMap;