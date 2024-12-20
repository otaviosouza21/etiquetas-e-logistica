import { useRef, useState } from "react";
import { romaneioTypeNormalize } from "../../../types/romaneio";
import { ColumnTable } from "./ColumnTable";
import { Container } from "./styles";
import MapPinIcon from "../../../figures/icons/MapPinIcon";
import ViewIcon from "../../../figures/icons/ViewIcon";
import { useGlobalContext } from "../../../context/GlobalContext";

interface RowTableProps {
  rowData: romaneioTypeNormalize;
  checkAll: boolean;
  setSelectRomaneio: React.Dispatch<
    React.SetStateAction<romaneioTypeNormalize[]>
  >;
  selectRomaneio: romaneioTypeNormalize[];
}

const RowTable = ({ rowData, checkAll, setSelectRomaneio }: RowTableProps) => {
  const [activeCheckbox, setActiveCheckbox] = useState<boolean>(false);
  const checkedStatus = useRef<HTMLInputElement | null>(null);
  const { setShowModal } = useGlobalContext();
 

  const checkbox = (
    <input
      type="checkbox"
      ref={checkedStatus}
      checked={checkAll ? checkAll : activeCheckbox}
      readOnly
    />
  );

  function removeItemById(
    idToRemove: number,
    itemsArray: romaneioTypeNormalize[]
  ) {
    return itemsArray.filter((item) => item.romaneio_id !== idToRemove);
  }

  function handleActiveRow() {
    setActiveCheckbox(!activeCheckbox);

    setSelectRomaneio((currentSelectRomaneio) => {
      const isSelected = currentSelectRomaneio.some(
        (item) => item.romaneio_id === rowData.romaneio_id
      );

      if (isSelected) {
        // Remover o item se ele já estiver selecionado
        return removeItemById(rowData.romaneio_id, currentSelectRomaneio);
      } else {
        return [...currentSelectRomaneio, rowData];
      }
    });
  }

  return (
    <>
      <Container>
        <ColumnTable
          handleActiveRow={handleActiveRow}
          flex={0.2}
          columnData={checkbox}
        />
        <ColumnTable flex={0.2} columnData={<ViewIcon setShowModal={setShowModal} rowData={rowData} />} />
        <ColumnTable flex={0.2} columnData={<MapPinIcon rowData={rowData}/>} />
        <ColumnTable flex={0.8} columnData={rowData.romaneio_documento} />
        <ColumnTable flex={2} columnData={rowData.romaneio_cliente} />
        <ColumnTable flex={0.5} columnData={rowData.romaneio_codCliente} />
        <ColumnTable flex={2} columnData={rowData.romaneio_end} />
        <ColumnTable flex={0.5} columnData={rowData.romaneio_num} />
        <ColumnTable flex={0.9} columnData={rowData.romaneio_municipio} />
        <ColumnTable flex={0.5} columnData={rowData.romaneio_estado} />
        <ColumnTable flex={0.5} columnData={rowData.romaneio_cep} />
        <ColumnTable flex={0.2} columnData={rowData.romaneio_volumes} />
      </Container>
      
    </>
  );
};

export default RowTable;
