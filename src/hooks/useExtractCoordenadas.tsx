import React, { useEffect, useState } from "react";
import { romaneioTypeNormalize } from "../types/romaneio";
import { GET_ADRESS_COORDENADAS } from "../api/Maps";


const useExtractCoordenadas = (
  romaneioData: romaneioTypeNormalize[] | null
) => {
  const [allCoordenadas, setAllCoordenadas] = useState<{ lat: number; lng: number; }[] | undefined >([{ lat: 0, lng: 0}]);
  useEffect(() => {
    const fetchCoordenadas = async () => {
      // Garantir que romaneioData seja um array válido ou vazio
      const coordenadasPromises = romaneioData
        ? romaneioData.map(async (romaneio) => {
            const { data } = await GET_ADRESS_COORDENADAS(
              romaneio.romaneio_cep,
              romaneio.romaneio_num
            );
         
              return {lat: data?.lat, lng: data?.lng}; // Retorna null caso a API não retorne coordenadas válidas
           
          })
        : [];


      // Aguarde todas as coordenadas serem resolvidas
      const resolvedCoordenadas = await Promise.all(coordenadasPromises);
      
     
        setAllCoordenadas(resolvedCoordenadas);
   
    };

    fetchCoordenadas();
  }, [romaneioData]);

  return { coordenadas: allCoordenadas };
};

export default useExtractCoordenadas;
