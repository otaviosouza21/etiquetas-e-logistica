import { useState } from "react";
import { Container, Nav } from "./styles";

const navs = [
  {
    id: "home",
    name: "Home",
  },
  {
    id: "romaneio",
    name: "Romaneio",
  },
  {
    id: "produtos",
    name: "Produtos",
  },
  {
    id: "pedidos",
    name: "Pedidos",
  }
 
];

const Navigation = () => {
  const [activeNav, setActiveNav] = useState<string>('romaneio');

  const handleNavigation = (id:string) => {
    setActiveNav(id)
  };

  return (
    <Container>
      {navs.map((nav) => {
        return (
          <Nav to={nav.id} key={nav.id} onClick={()=>handleNavigation(nav.id)} active={activeNav === nav.id}>
            {nav.name}
          </Nav>
        );
      })}
    </Container>
  );
};

export default Navigation;
