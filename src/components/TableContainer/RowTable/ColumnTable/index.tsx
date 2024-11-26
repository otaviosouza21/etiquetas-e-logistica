import { Container } from "./styles";

export const ColumnTable = ({
  columnData,
  flex,
  handleActiveRow,
}: {
  handleActiveRow?: () => void;
  columnData: any;
  flex: number;
}) => {
  return (
    <Container onClick={handleActiveRow} flex={flex}>
      {columnData}
    </Container>
  );
};
