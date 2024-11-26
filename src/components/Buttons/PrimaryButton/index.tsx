import { useNavigate } from "react-router-dom";
import { Container, Title } from "../styles";

interface PrimaryButtonProps {
  title: string;
  icon: JSX.Element;
  activeNavigation?: string;
}

const PrimaryButton = ({ title,activeNavigation, icon }: PrimaryButtonProps) => {
  const navigation = useNavigate()

  function handleClick() {
    if(activeNavigation){
      navigation('/romaneio-etiquetas')
    }
  }

  return (
    <Container onClick={handleClick}>
      {icon}
      <Title>{title}</Title>
    </Container>
  );
};

export default PrimaryButton;
