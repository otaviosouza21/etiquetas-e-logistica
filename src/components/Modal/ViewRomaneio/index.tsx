import { useEffect } from "react";
import { useGlobalContext } from "../../../context/GlobalContext";
import LabelIcon from "../../../figures/icons/LabelIcon";
import MapPinSecondaryIcon from "../../../figures/icons/MapPinSecondaryIcon";
import PrimaryButton from "../../Buttons/PrimaryButton";
import {
  Container,
  Carga,
  TitlePrimary,
  Buttons,
  TitleSecondary,
  RomaneioData,
  Infos,
} from "./styles";
import CloseIcon from "../../../figures/icons/CloseIcon";


const ViewRomaneio = () => {
  const { currentRomaneio } = useGlobalContext();

  useEffect(() => {
    console.log("ocorreu");
  }, []);

  if (!currentRomaneio) return null;
  return (
    <>
      <Container>
        <CloseIcon />
        <RomaneioData>
          <Infos>
            <TitlePrimary>
              Documento<span>{currentRomaneio.romaneio_documento}</span>
            </TitlePrimary>
            <TitlePrimary>
              Cliente
              <span>
                {currentRomaneio.romaneio_cliente} - COD{" "}
                {currentRomaneio.romaneio_codCliente}
              </span>
            </TitlePrimary>
            <TitlePrimary>
              Carga<span>{currentRomaneio.romaneio_carga}</span>
            </TitlePrimary>
            <TitlePrimary>
              Emissão<span>{currentRomaneio.romaneio_emissao}</span>
            </TitlePrimary>
            <TitlePrimary>
              Endereço<span>{currentRomaneio.romaneio_end}</span>
            </TitlePrimary>
            <TitlePrimary>
              Numero<span>{currentRomaneio.romaneio_num}</span>
            </TitlePrimary>
            <TitlePrimary>
              Bairro<span>{currentRomaneio.romaneio_bairro}</span>
            </TitlePrimary>
            <TitlePrimary>
              Municipio<span>{currentRomaneio.romaneio_municipio}</span>
            </TitlePrimary>
            <TitlePrimary>
              Estado<span>{currentRomaneio.romaneio_estado}</span>
            </TitlePrimary>
          </Infos>
          <Carga>
            <TitleSecondary>
              Amarrados<span>{currentRomaneio.romaneio_amarrados}</span>
            </TitleSecondary>
            <TitleSecondary>
              Bicicletas<span>{currentRomaneio.romaneio_bicicletas}</span>
            </TitleSecondary>
            <TitleSecondary>
              Caixas<span>{currentRomaneio.romaneio_caixas}</span>
            </TitleSecondary>
            <TitleSecondary>
              Sacos<span>{currentRomaneio.romaneio_sacos}</span>
            </TitleSecondary>
            <TitleSecondary>
              Volumes<span>{currentRomaneio.romaneio_volumes}</span>
            </TitleSecondary>
          </Carga>
        </RomaneioData>
        <Buttons>
          <PrimaryButton activeNavigation="romaneio-etiquetas" title="Etiquetas" icon={<LabelIcon />} />
          <PrimaryButton title="Mapa" icon={<MapPinSecondaryIcon />} />
        </Buttons>
      </Container>
 
    </>
  );
};

export default ViewRomaneio;
