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
import {CloseMap,Container} from './styles'
import Arrow from "../../../../figures/icons/Arrow";
import CloseIcon from "../../../../figures/icons/CloseIcon";

interface CoordenadasProps {
  currentCoordenadas: { lat: number; lng: number }[] | undefined; // Array de coordenadas
}

const MapComponentMultiMarker = ({ currentCoordenadas }: CoordenadasProps) => {
  const mapElement = useRef<HTMLDivElement | null>(null); // Referência para o div onde o mapa será renderizado

  useEffect(() => {
    if (
      currentCoordenadas &&
      mapElement.current &&
      currentCoordenadas.length > 0
    ) {
      // Transformar todas as coordenadas de EPSG:4326 para EPSG:3857
      const features = currentCoordenadas.map((coordenada) => {
        const coordsEPSG3857 = olProj.transform(
          [coordenada.lng, coordenada.lat],
          "EPSG:4326",
          "EPSG:3857"
        );

        return new Feature({
          geometry: new Point(coordsEPSG3857), // Posição do marcador
        });
      });

      // Criar o mapa
      const map = new Map({
        target: mapElement.current, // O mapa será renderizado neste elemento
        layers: [
          new TileLayer({
            source: new OSM(), // Usando o OpenStreetMap como base
          }),
          new VectorLayer({
            source: new VectorSource({
              features: features, // Adicionando os marcadores ao mapa
            }),
            style: new Style({
              image: new Icon({
                src: "https://cdn-icons-png.flaticon.com/512/2642/2642502.png", // URL do ícone do marcador
                scale: 0.1, // Tamanho do ícone
              }),
            }),
          }),
        ],
        view: new View({
          center: olProj.transform(
            [currentCoordenadas[0].lng, currentCoordenadas[0].lat],
            "EPSG:4326",
            "EPSG:3857"
          ), // Centraliza no primeiro marcador
          zoom: 12, // Ajuste o nível de zoom conforme necessário
        }),
      });

      return () => {
        map.setTarget(undefined); // Limpar o mapa quando o componente for desmontado
      };
    }
  }, [currentCoordenadas]);

  return (
    <Container>
      <CloseIcon />
      <div ref={mapElement} style={{ width: "100%", height: "500px" }}></div>
    </Container>
  );
};

export default MapComponentMultiMarker;
