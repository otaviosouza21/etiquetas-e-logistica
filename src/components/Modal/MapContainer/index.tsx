import React, { useEffect, useState } from "react";
import { Container } from "./styles";
import MapComponent from "../../MapComponent";
import { GET_ADRESS_COORDENADAS } from "../../../api/Maps";
import { useGlobalContext } from "../../../context/GlobalContext";
import Arrow from "../../../figures/icons/Arrow";

interface CoordenadasProps {
  lat: number;
  lng: number;
}

const MapContainer = ({setShowMap} : {setShowMap: React.Dispatch<React.SetStateAction<boolean>>}) => {
  const [currentCoordenadas, setCurrentCoordenadas] =
    useState<CoordenadasProps | null>({
      lat: 0,
      lng: 0,
    });
  const { currentRomaneio } = useGlobalContext();

  useEffect(() => {
    async function fetchAll() {
      if (
        currentRomaneio &&
        currentRomaneio.romaneio_cep &&
        currentRomaneio.romaneio_num
      ) {
        const { data } = await GET_ADRESS_COORDENADAS(
          currentRomaneio?.romaneio_cep,
          currentRomaneio?.romaneio_num
        );
        setCurrentCoordenadas(data);
      }
    }

    fetchAll();
  }, [currentRomaneio]);

  return (
    <Container>
      <Arrow setShowMap={setShowMap}/>
      <MapComponent currentCoordenadas={currentCoordenadas} />
    </Container>
  );
};

export default MapContainer;
