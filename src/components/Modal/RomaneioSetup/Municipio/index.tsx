import { useState } from "react";
import { MunicipioContainer } from "../styles";

const Municipio = ({ municipio }: { municipio: string }) => {
  const [ordem, setOrdem] = useState<number>(0);

  return (
    <MunicipioContainer>
      <span onClick={() => setOrdem(ordem + 1)}>{ordem}</span>
      <div>{municipio}</div>
    </MunicipioContainer>
  );
};

export default Municipio;
