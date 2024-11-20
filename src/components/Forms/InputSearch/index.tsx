import { ChangeEvent, useState } from "react";
import { Container, Input } from "./styles";
import { useGlobalContext } from "../../../context/GlobalContext";
import { romaneioTypeNormalize } from "../../../types/romaneio";

const InputSearch = () => {
  const { romaneioData, setFilteredRomaneio, filteredRomaneio } =
    useGlobalContext();
  const [value, setValue] = useState<string>("");

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const inputValue = event.target.value; // Obtenha o valor diretamente do evento
    setValue(inputValue);

    if (romaneioData) {
      const filter: romaneioTypeNormalize[] = romaneioData.filter((romaneio) => {
        // Comparação por documento
        const matchesDocumento = romaneio.romaneio_documento == inputValue;
    
        // Comparação por cliente, garantindo que romaneio_cliente seja uma string
        const matchesCliente =
          typeof romaneio.romaneio_cliente === "string" &&
          romaneio.romaneio_cliente.toLowerCase().includes(inputValue.toLowerCase());
    
        return matchesDocumento || matchesCliente;
      });
    
      setFilteredRomaneio(filter);
    }

    if (inputValue.length < 1) {
      setFilteredRomaneio(null);
    }
  }

  return (
    <Container>
      <Input value={value} onChange={handleChange} />
    </Container>
  );
};

export default InputSearch;
