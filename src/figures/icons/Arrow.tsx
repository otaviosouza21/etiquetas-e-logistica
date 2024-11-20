
import { ContainerSvg } from "./styles";

const Arrow = ({setShowMap} : {setShowMap : React.Dispatch<React.SetStateAction<boolean>>}) => {
  return (
    <ContainerSvg onClick={()=> setShowMap(false)}>
      <path
        d="M8 10L8 14L6 14L-2.62268e-07 8L6 2L8 2L8 6L16 6L16 10L8 10Z"
        fill="#F5A811"
      />
    </ContainerSvg>
  );
};

export default Arrow;
