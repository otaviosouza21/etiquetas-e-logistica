import Barcode from "react-barcode";
import {
  Container,
  Header,
  TitleHeader,
  Body,
  TitleBody,
  Footer,
  CodBarra,
} from "./styles";
import { useGlobalContext } from "../../../context/GlobalContext";

interface EtiquetaProps {
  count: number;
  keyCarga: string;
  countCargas: { a: number; b: number; c: number; s: number };
}

const EtiquetaRomaneio = ({ count, keyCarga, countCargas }: EtiquetaProps) => {
  const { currentRomaneio } = useGlobalContext();

  if (!currentRomaneio) return null;
  return (
    <Container>
      <Header>
        <TitleHeader>
          DOC <span>{currentRomaneio.romaneio_documento}</span>
        </TitleHeader>
        <TitleHeader>
          CAR <span>{currentRomaneio.romaneio_carga}</span>
        </TitleHeader>
        <TitleHeader>
          COD <span>{currentRomaneio.romaneio_codCliente}</span>
        </TitleHeader>
        <TitleHeader>
          {keyCarga.toLocaleUpperCase()}{" "}
          <span>
            {count}/{countCargas[keyCarga as keyof typeof countCargas]}
          </span>
        </TitleHeader>
      </Header>
      <Body>
        <TitleBody>
          <span>{currentRomaneio.romaneio_cliente}</span>
        </TitleBody>
        <TitleBody>
          <span>
            {currentRomaneio.romaneio_end}, {currentRomaneio.romaneio_num}
          </span>
        </TitleBody>
        <TitleBody>
          <span>
            {currentRomaneio.romaneio_bairro},{" "}
            {currentRomaneio.romaneio_municipio}-{" "}
            {currentRomaneio.romaneio_estado}
          </span>
        </TitleBody>
      </Body>
      <Footer>
        <CodBarra>
          <Barcode
            fontSize={10}
            displayValue={false}
            height={50}
            width={3}
            value="789797878979"
          />
        </CodBarra>
      </Footer>
    </Container>
  );
};

export default EtiquetaRomaneio;
