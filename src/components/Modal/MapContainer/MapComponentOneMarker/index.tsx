import { useRef, useEffect } from "react";
import "ol/ol.css"; // Importar os estilos do OpenLayers
import { Map, View } from "ol";
import { Tile as TileLayer } from "ol/layer";
import { OSM } from "ol/source";
import * as olProj from "ol/proj"; // Para a transformação de coordenadas
import { Feature } from "ol";
import { Point } from "ol/geom";
import { Style, Icon } from "ol/style";
import { Vector as VectorLayer } from "ol/layer";
import { Vector as VectorSource } from "ol/source";

interface CoordenadasProps {
  currentCoordenadas: {
    lat: number;
    lng: number;
  } | null;
}

const MapComponentOneMarker = ({ currentCoordenadas }: CoordenadasProps) => {
  const mapElement = useRef<HTMLDivElement | null>(null); // Referência para o div onde o mapa será renderizado

  useEffect(() => {
    if (
      mapElement.current &&
      currentCoordenadas?.lat !== undefined &&
      currentCoordenadas.lng !== undefined
    ) {
      // Coordenadas em EPSG:4326 (Latitude/Longitude)
      const centerEPSG4326 = [currentCoordenadas.lng, currentCoordenadas.lat];

      // Transformando as coordenadas de EPSG:4326 para EPSG:3857
      const centerEPSG3857 = olProj.transform(
        centerEPSG4326,
        "EPSG:4326",
        "EPSG:3857"
      );

      // Criar o mapa assim que o componente for montado
      const map = new Map({
        target: mapElement.current, // O mapa será renderizado neste elemento
        layers: [
          new TileLayer({
            source: new OSM(), // Usando o OpenStreetMap como base
          }),
          new VectorLayer({
            source: new VectorSource({
              features: [
                new Feature({
                  geometry: new Point(centerEPSG3857), // Posição do marcador
                }),
              ],
            }),
            style: new Style({
              image: new Icon({
                src: "https://cdn-icons-png.flaticon.com/512/2642/2642502.png", // URL do ícone do marcador
                scale: 0.1, // Tamanho do ícone (ajuste conforme necessário)
              }),
            }),
          }),
        ],
        view: new View({
          center: centerEPSG3857, // Centro do mapa (coordenadas em EPSG:3857)
          zoom: 16, // Nível de zoom
        }),
      });

      return () => {
        map.setTarget(undefined); // Limpar o mapa quando o componente for desmontado
      };
    }
  }, [currentCoordenadas]);

  return (
    <div ref={mapElement} style={{ width: "100%", height: "400px" }}></div>
  );
};

export default MapComponentOneMarker;
