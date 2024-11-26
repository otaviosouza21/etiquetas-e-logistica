import React from "react";
import * as XLSX from "xlsx";
import { useGlobalContext } from "../context/GlobalContext";
import { NormalizaRomaneio } from "./NormalizeRomaneio";
import { romaneioType } from "../types/romaneio";

interface ExcelToJsonProps {
  file: File | null;
}

const ExcelToJson: React.FC<ExcelToJsonProps> = ({ file }) => {
  const { setRomaneioData } = useGlobalContext();

  React.useEffect(() => {
    if (file) {
      const reader = new FileReader();

      reader.onload = (event) => {
        const data = event.target?.result;
        if (data) {
          // Use a biblioteca SheetJS para ler a planilha
          const workbook = XLSX.read(data, { type: "array" });

          // Acessa a primeira planilha do arquivo
          const sheetName = workbook.SheetNames[0];
          const sheet = workbook.Sheets[sheetName];

          // Converte a planilha para um objeto JSON
          const jsonData: romaneioType[] = XLSX.utils.sheet_to_json(sheet);
          localStorage.setItem("planilha", JSON.stringify(jsonData));

          const romaneioNormalizado = jsonData.map((romaneio) => {
            if (romaneio) return NormalizaRomaneio(romaneio);
          });
          setRomaneioData(romaneioNormalizado);
        }
      };

      reader.readAsArrayBuffer(file);
    }
  }, [file]);

  return null;
};

export default ExcelToJson;
