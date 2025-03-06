import CurrentUserHeader from "./CurrentUserHeader";
import Navigation from "./Navigation";
import {Container} from './styles'

const Header = () => {
  return (
    <Container>
      <Navigation />
      <CurrentUserHeader />
    </Container>
  );
};

export default Header;
