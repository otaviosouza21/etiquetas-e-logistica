
import logo from '../../assets/img/amaisciclo-white.png'
import { FaRegUser } from "react-icons/fa";

import {
  Container,
  LogoContainer,
  Logo,
  SubLogo,
  Form,
  LogoSecondary,
  Inputs,
  LoginOptions,
} from "./styles";
import InputTextComponent from "../../components/Forms/InputText";
import PrimaryButton from "../../components/Buttons/PrimaryButton";

const Login = () => {
  return (
    <Container>
      <LogoContainer>
        <Logo src={logo} />
        <SubLogo>Automações</SubLogo>
      </LogoContainer>
      <Form>
        <LogoSecondary src={logo}  />
        <Inputs>
          <InputTextComponent type='text' label="Usuario"/>
          <InputTextComponent type='password' label="Senha" />  
        </Inputs>
      <LoginOptions></LoginOptions>
      <PrimaryButton title="Entrar" />
      </Form>
    </Container>
  );
};

export default Login;
