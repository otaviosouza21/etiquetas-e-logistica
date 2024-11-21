import { Container, Title } from "../styles";

interface PrimaryButtonProps {
  title: string;
  icon: JSX.Element;
  action?: () => void;
  disabled?: boolean
}

const PrimaryButton = ({ title, icon,action, disabled }: PrimaryButtonProps) => {
  return (
    <Container disabled={disabled} onClick={()=> action ?  action() : null}>
      {icon}
      <Title>{title}</Title>
    </Container>
  );
};

export default PrimaryButton;
