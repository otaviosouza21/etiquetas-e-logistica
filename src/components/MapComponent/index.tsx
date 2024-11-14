import  { useRef, useEffect } from 'react';
import 'ol/ol.css'; // Importar os estilos do OpenLayers
import { Map, View } from 'ol';
import { Tile as TileLayer } from 'ol/layer';
import { OSM } from 'ol/source';

const MapComponent = () => {
  const mapElement = useRef(null); // Referência para o div onde o mapa será renderizado

  useEffect(() => {
    // Criar o mapa assim que o componente for montado
    const map = new Map({
      target: mapElement.current, // O mapa será renderizado neste elemento
      layers: [
        new TileLayer({
          source: new OSM(), // Usando o OpenStreetMap como base
        }),
      ],
      view: new View({
        center: [0, 0], // Centro do mapa (usando coordenadas em EPSG:3857)
        zoom: 2, // Nível de zoom
      }),
    });

    return () => {
      map.setTarget(null); // Limpar o mapa quando o componente for desmontado
    };
  }, []);

  return <div ref={mapElement} style={{ width: '100%', height: '500px' }}></div>;
};

export default MapComponent;
