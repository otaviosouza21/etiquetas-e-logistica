import { useEffect, useState } from "react";
import { useGlobalContext } from "../../context/GlobalContext";
import EtiquetaRomaneio from "./EtiquetaRomaneio";
import { Container } from "./styles";

const EtiquetasRomaneio = () => {
  const { currentRomaneio } = useGlobalContext();
  const [countCargas, setCountCargas] = useState({
    a: 0,
    b: 0,
    c: 0,
    s: 0,
  });

  useEffect(() => {
    if (currentRomaneio) {
      setCountCargas(() => ({
        a: currentRomaneio.romaneio_amarrados,
        b: currentRomaneio.romaneio_bicicletas,
        c: currentRomaneio.romaneio_caixas,
        s: currentRomaneio.romaneio_sacos,
      }));
    }
  }, [currentRomaneio]);

  return (
    <Container>
      {Object.entries(countCargas).map(([key, value]) => {
        return <div key={key}>
          {[...Array(value)].map((_,index)=>
          (
             <EtiquetaRomaneio countCargas={countCargas} keyCarga={key} key={index} count={index+1}/>
          ))}
        </div>;
      })}

    </Container>
  );
};

export default EtiquetasRomaneio;
