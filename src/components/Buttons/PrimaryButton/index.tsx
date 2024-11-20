import { Container, Title } from "../styles";

interface PrimaryButtonProps {
  title: string;
  icon: JSX.Element;
  action?: () => void
}

const PrimaryButton = ({ title, icon,action }: PrimaryButtonProps) => {
  return (
    <Container onClick={()=> action ?  action() : null}>
      {icon}
      <Title>{title}</Title>
    </Container>
  );
};

export default PrimaryButton;
