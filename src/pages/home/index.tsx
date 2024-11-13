import InputFileButton from "../../components/InputFileButton";
import Navigation from "../../components/Navigation";
import PrimaryButton from "../../components/PrimaryButton";
import Resume from "../../components/Resume";
import TableContainer from "../../components/TableContainer";
import PrinterIcon from "../../figures/icons/PrinterIcon";
import { Container, Header } from "./styles";

const Home = () => {
  return (
    <Container>
      <Header>
        <Navigation />
        <InputFileButton title="Importar Romaneio" icon={<PrinterIcon />} />
        <PrimaryButton title="Etiquetas" icon={<PrinterIcon />} />
        <PrimaryButton title="Romaneio" icon={<PrinterIcon />} />
      </Header>
      <Resume />
      <TableContainer />
    </Container>
  );
};

export default Home;
