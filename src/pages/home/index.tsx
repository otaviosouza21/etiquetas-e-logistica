import InputFileButton from "../../components/Buttons/InputFileButton";
import Navigation from "../../components/Navigation";
import PrimaryButton from "../../components/Buttons/PrimaryButton";
import Resume from "../../components/Resume";
import TableContainer from "../../components/TableContainer";
import UploadIcon from "../../figures/icons/UploadIcon";
import {
  Container,
  Header,
  ActionButtons,
  ActionInput,
  Actions,
} from "./styles";
import ReportIcon from "../../figures/icons/ReportIcon";
import LabelIcon from "../../figures/icons/LabelIcon";
import EtiquetasRomaneio from "../../components/EtiquetasRomaneio";
import { useGlobalContext } from "../../context/GlobalContext";
import Modal from "../../components/Modal";
import RomaneioSetup from "../../components/Modal/RomaneioSetup";
import InputSearch from "../../components/Forms/InputSearch";
import useExtractCoordenadas from "../../hooks/useExtractCoordenadas";
import MapComponentMultiMarker from "../../components/Modal/MapContainer/MapComponentMultiMarker";
import RouteIcon from "../../figures/icons/RouteIcon";


const Home = () => {
  const { showModal, setShowModal, romaneioData } = useGlobalContext();
  const { coordenadas } = useExtractCoordenadas(romaneioData);



  function handleRomaneioGenerate() {
    setShowModal("show-romaneio-setup");
  }

  async function RoutesGenerate() {
    if (coordenadas && coordenadas.length > 0) {
      setShowModal("show-itinerario");
    } else {
      console.log("Nenhuma coordenada gerada");
    }
  }

  return (
    <Container>
      <Header>
        <Navigation />
        <Actions>
          <ActionButtons>
            <InputFileButton title="Importar Romaneio" icon={<UploadIcon />} />
            <PrimaryButton title="Etiquetas" icon={<LabelIcon />} />
            <PrimaryButton
              action={handleRomaneioGenerate}
              title="Gerar Romaneio"
              icon={<ReportIcon />}
            />
            <PrimaryButton
              disabled={true}
              action={RoutesGenerate}
              title="Gerar Rotas"
              icon={<RouteIcon />}
            />
          </ActionButtons>
          <ActionInput>
            <InputSearch />
          </ActionInput>
        </Actions>
      </Header>
      <Resume />
      <TableContainer />
      <EtiquetasRomaneio />

      {showModal == "show-itinerario" && (
        <Modal>
        
            <MapComponentMultiMarker currentCoordenadas={coordenadas} />
       
        </Modal>
      )}

      {showModal == "show-romaneio-setup" && (
        <Modal>
          <RomaneioSetup />
        </Modal>
      )}
    </Container>
  );
};

export default Home;
