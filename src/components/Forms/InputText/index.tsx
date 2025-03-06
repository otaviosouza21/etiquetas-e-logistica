import React from "react";
import { Container, Icon, Label , InputContainer, InputText} from "./styles";

interface InputTextProps {
    label: string;
    type: "text" | "password"
}

const InputTextComponent = ({label,type}: InputTextProps) => {
  return (
    <Container>
    <Label>{label}</Label>
      <InputContainer>
        <InputText type={type} />
        <Icon />
      </InputContainer>
    </Container>
  );
};

export default InputTextComponent;
