import InputFileButton from "../../components/Buttons/InputFileButton";
import Navigation from "../../components/Navigation";
import PrimaryButton from "../../components/Buttons/PrimaryButton";
import Resume from "../../components/Resume";
import TableContainer from "../../components/TableContainer";
import UploadIcon from "../../figures/icons/UploadIcon";
import { Container, Header, Buttons } from "./styles";
import ReportIcon from "../../figures/icons/ReportIcon";
import LabelIcon from "../../figures/icons/LabelIcon";
import EtiquetasRomaneio from "../../components/EtiquetasRomaneio";

const Home = () => {
  return (
    <Container>
      <Header>
        <Navigation />
        <Buttons>
          <InputFileButton title="Importar Romaneio" icon={<UploadIcon />} />
          <PrimaryButton title="Etiquetas" icon={<LabelIcon />} />
          <PrimaryButton title="Gerar Romaneio" icon={<ReportIcon />} />
        </Buttons>
      </Header>
      <Resume />
      <TableContainer />
      {/*     <MapComponent /> */}
      <EtiquetasRomaneio />
    </Container>
  );
};

export default Home;
