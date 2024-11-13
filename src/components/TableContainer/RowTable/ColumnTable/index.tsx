import { Container } from "./styles";

export const ColumnTable = ({
  columnData,
  flex,
}: {
  columnData: any;
  flex: number;
}) => {
  return <Container flex={flex}>{columnData}</Container>;
};
