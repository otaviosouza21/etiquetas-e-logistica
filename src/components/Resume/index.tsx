import { useEffect, useState } from "react";
import { useGlobalContext } from "../../context/GlobalContext";
import { romaneioTypeNormalize } from "../../types/romaneio";
import {
  Container,
  CodCarga,
  Carregamento,
  Valor,
  Motorista,
  Cargas,
  Carga
} from "./styles";

const Resume = () => {
  const [resumeDataSome, setResumeDataSome] = useState({
    amarrados: 0,
    bicicletas: 0,
    caixas: 0,
    sacos: 0,
    volumes: 0,
  });

  const { romaneioData } = useGlobalContext();
  const resumeData: romaneioTypeNormalize | null =
    romaneioData && romaneioData[0];

  useEffect(() => {
    if (romaneioData && romaneioData.length > 0) {
      const somaAmarrados = romaneioData?.reduce((acc, item) => {
        return acc + (item.romaneio_amarrados || 0);
      }, 0);

      const somaBicicletas = romaneioData?.reduce((acc, item) => {
        return acc + (item.romaneio_bicicletas || 0);
      }, 0);

      const somaCaixas = romaneioData?.reduce((acc, item) => {
        return acc + (item.romaneio_caixas || 0);
      }, 0);

      const somaSacos = romaneioData?.reduce((acc, item) => {
        return acc + (item.romaneio_sacos || 0);
      }, 0);

      const somaVolumes = romaneioData?.reduce((acc, item) => {
        return acc + (item.romaneio_volumes || 0);
      }, 0);

      setResumeDataSome({
        amarrados: somaAmarrados,
        bicicletas: somaBicicletas,
        caixas: somaCaixas,
        sacos: somaSacos,
        volumes: somaVolumes,
      });
    }
  }, [romaneioData]);

  return (
    <Container>
      {resumeData && (
        <>
          <CodCarga>
            Carga: <span>{resumeData.romaneio_carga}</span>
          </CodCarga>
          <CodCarga>
            Quantidade: <span>{romaneioData?.length}</span>
          </CodCarga>
          <Carregamento>
            Carregamento: <span>{resumeData.romaneio_carregamento}</span>
          </Carregamento>
          <Valor>
            Valor: <span>{resumeData.romaneio_valor}</span>
          </Valor>
          <Motorista>
            Transporte: <span>{resumeData.romaneio_transporte}</span>
          </Motorista>
          <Cargas>
            <Carga>Amarrados <span>{resumeDataSome.amarrados}</span></Carga>
            <Carga>Bicicletas <span>{resumeDataSome.bicicletas}</span></Carga>
            <Carga>Caixas<span>{resumeDataSome.caixas}</span></Carga>
            <Carga>Sacos<span>{resumeDataSome.sacos}</span></Carga>
            <Carga>Volumes<span>{resumeDataSome.volumes}</span></Carga>
          </Cargas>
        </>
      )}
    </Container>
  );
};

export default Resume;
