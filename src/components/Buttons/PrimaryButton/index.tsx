import { Container, Title } from "../styles";

interface PrimaryButtonProps {
  title: string;
  icon: JSX.Element;
}

const PrimaryButton = ({ title, icon }: PrimaryButtonProps) => {
  return (
    <Container>
      {icon}
      <Title>{title}</Title>
    </Container>
  );
};

export default PrimaryButton;
