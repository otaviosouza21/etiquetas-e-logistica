import { useEffect, useState } from "react";
import { useGlobalContext } from "../../../context/GlobalContext";
import CloseIcon from "../../../figures/icons/CloseIcon";
import { Container, Municipios } from "./styles";
import Municipio from "./Municipio";
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd'


const RomaneioSetup = () => {
  const { romaneioData } = useGlobalContext();
  const [municipios, setMunicipios] = useState<string[]>([]);

  const municipiosExtracao: string[] = [];

  useEffect(() => {
    romaneioData?.forEach((romaneio) => {
      municipiosExtracao.push(romaneio.romaneio_municipio);
    });

    setMunicipios([...new Set(municipiosExtracao)]);
  }, [romaneioData]);

  return (
    <Container>
      <Municipios>
        {municipios.map((municipio) => {
          return <Municipio key={municipio} municipio={municipio} />;
        })}
      </Municipios>
      <CloseIcon />
    </Container>
  );
};

export default RomaneioSetup;