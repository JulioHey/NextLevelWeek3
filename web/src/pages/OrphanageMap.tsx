import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom';
import { FiPlus, FiArrowRight} from 'react-icons/fi';
import {Map, TileLayer, Marker, Popup} from 'react-leaflet';

import mapMarkerImg from '../images/map-marker.svg';

import "../styles/pages/orphanage-map.css";
import mapIcon from '../utils/mapIcon';
import api from '../services/api';


interface Orphanage {
    id:number
    latitude: number
    longitude: number
    name: string
}

function OrphanageMap() {
    const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

    useEffect(() => {
        api.get("orphanages").then(response => {
            setOrphanages(response.data);
        })
    }, []);

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

            <Map 
                center={[-27.2092052, -49.6401092]}
                zoom={15}
                style={{width:'100%', height:'100%'}}
            >
                {/* <TileLayer url="http://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
                <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />
            
                {orphanages.map(orphanage => {
                    return (
                    <Marker position={[orphanage.latitude, orphanage.longitude]} icon={mapIcon} key={orphanage.id}>
                        <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                            {orphanage.name}
    
                            <Link to={`/orphanages/${orphanage.id}`}>
                                <FiArrowRight size={20} color="#FFF"/>
                            </Link>
                        </Popup>
                    </Marker>
                    )
                })}
            </Map>

            <Link to="/orphanages/create" className="create-orphanage">
                <FiPlus size={32} color="#FFF" />
            </Link>
        </div>
    )
}

export default OrphanageMap;