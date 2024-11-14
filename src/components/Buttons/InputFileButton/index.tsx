import { ChangeEvent, useState } from "react";
import { InputFileComponent,Container, Title } from "../styles";
import ExcelToJson from "../../../functions/ExcelToJson";

interface InputFileButtonProps {
  title: string;
  icon: JSX.Element;
}

const InputFileButton = ({ title, icon }: InputFileButtonProps) => {
  const [inputFile, setInputFile] = useState<File | null>(null);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0] || null;
    setInputFile(file);
  }

  return (
    <>
      <Container>
        {icon}
        <Title htmlFor="file-input">{title}</Title>
        <InputFileComponent id="file-input" onChange={handleChange} />
      </Container>
      {inputFile && <ExcelToJson file={inputFile} />}
    </>
  );
};

export default InputFileButton;
