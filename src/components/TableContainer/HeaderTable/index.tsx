
import { ColumnTable } from "../RowTable/ColumnTable";
import { Container } from "./styles";

interface headerType {
  name:
    | string
    | React.DetailedHTMLProps<
        React.InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
      >;
  flex: number;
}

const HeaderTable = ({ headerData }: { headerData: headerType[] }) => {
  return (
    <Container>
      {headerData.map((title) => {
        return <ColumnTable flex={title.flex} columnData={title.name} />;
      })}
    </Container>
  );
};

export default HeaderTable;
