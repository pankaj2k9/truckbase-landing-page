import React from "react";
import { StyledTable } from "./Table.elements";
import { Container } from "../../globalStyles";

const Table = ({ data }) => (
  <Container>
    <TableMarkup titles={Object.keys(data[0])} data={data} />
  </Container>
);
const TableMarkup = ({ titles, data }) => (
  <StyledTable>
    <colgroup>
      <col />
      <col />
      <col />
    </colgroup>
    <thead>
      <tr>
        {titles.map((title, index) => (
          <th key={index}>{title}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {data.map((item, index) => (
        <tr key={index}>
          {titles.map((title, index) => (
            <td key={index}>{item[title]}</td>
          ))}
        </tr>
      ))}
    </tbody>
  </StyledTable>
);

export default Table;
