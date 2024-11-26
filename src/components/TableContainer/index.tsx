import { Container, ContainerLoading } from "./styles";
import RowTable from "./RowTable";
import { useGlobalContext } from "../../context/GlobalContext";
import HeaderTable from "./HeaderTable";
import { useState } from "react";
import { romaneioTypeNormalize } from "../../types/romaneio";
import Modal from "../Modal";
import ViewRomaneio from "../Modal/ViewRomaneio";
import { Loading } from "../UI/styles";
import { set } from "ol/transform";

const TableContainer = () => {
  const { romaneioData } = useGlobalContext();
  const [checkAll, setCheckAll] = useState<boolean>(false);
  const [selectRomaneio, setSelectRomaneio] = useState<romaneioTypeNormalize[]>(
    []
  );
  const [loading, setLoading] = useState<boolean>(false);

  setTimeout(() => {
    setLoading(true);
  }, 4000);

  const { showModal } = useGlobalContext();

  const headerData = [
    {
      name: <input type="checkbox" onClick={() => setCheckAll(!checkAll)} />,
      flex: 0.1,
    },
    {
      name: "",
      flex: 0.3,
    },
    {
      name: "",
      flex: 0.2,
    },

    {
      name: "Documento",
      flex: 0.8,
    },
    {
      name: "Cliente",
      flex: 2,
    },
    {
      name: "Cod Cliente",
      flex: 0.5,
    },
    {
      name: "Endereco",
      flex: 2,
    },
    {
      name: "Numero",
      flex: 0.5,
    },

    {
      name: "Cidade",
      flex: 0.9,
    },
    {
      name: "Estado",
      flex: 0.5,
    },
    {
      name: "Volumes",
      flex: 0.2,
    },
  ];

  if (!romaneioData || (romaneioData?.length == 0 && loading)) return null;
  return (
    <Container>
      <HeaderTable headerData={headerData} />
      {romaneioData && loading ? (
        romaneioData.map((romaneio) => {
          return (
            <RowTable
              selectRomaneio={selectRomaneio}
              setSelectRomaneio={setSelectRomaneio}
              checkAll={checkAll}
              rowData={romaneio}
              key={romaneio.romaneio_id}
            />
          );
        })
      ) : (
        <ContainerLoading>
          <Loading />
        </ContainerLoading>
      )}

      {showModal == "show_romaneio" && (
        <Modal>
          <ViewRomaneio />
        </Modal>
      )}
    </Container>
  );
};

export default TableContainer;
