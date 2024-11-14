import React from "react";
import { Container } from "./styles";

const Modal = ({ children }: { children: React.ReactNode }) => {
  return <Container>{children}</Container>;
};

export default Modal;
