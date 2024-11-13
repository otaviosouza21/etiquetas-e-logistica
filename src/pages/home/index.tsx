import InputFileButton from "../../components/InputFileButton";
import Navigation from "../../components/Navigation";
import Resume from "../../components/Resume";
import TableContainer from "../../components/TableContainer";
import DownloadIcon from "../../figures/icons/DownloadIcon";
import { Container, Header } from "./styles";

const Home = () => {
  return (
    <Container>
      <Header>
        <Navigation />
        <InputFileButton title="Importar Romaneio" icon={<DownloadIcon />} />
      </Header>
      <Resume />
      <TableContainer />
    </Container>
  );
};

export default Home;
