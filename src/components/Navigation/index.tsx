import { useState } from "react";
import { Container, Nav } from "./styles";

const navs = [
  {
    id: "romaneio",
    name: "Romaneio",
  },
  {
    id: "produtos",
    name: "Produtos",
  },
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
          <Nav key={nav.id} onClick={()=>handleNavigation(nav.id)} active={activeNav === nav.id}>
            {nav.name}
          </Nav>
        );
      })}
    </Container>
  );
};

export default Navigation;
