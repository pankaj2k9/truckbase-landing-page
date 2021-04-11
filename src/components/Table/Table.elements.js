import styled from 'styled-components';

export const StyledTable = styled.table`
  margin: 3rem 0;
  caption-side: top;
  border: none;
  width: 100%;
  border-collapse: collapse;
  /* border-collapse: separate; */
  /* border-spacing: 5px 10px; */

  caption-side: bottom;
  /* empty-cell: show | hide;  */
  /* empty-cell is a property of table or the cells themselves */

  /* vertical-align: baseline | sub | super | text-top | 
                text-bottom | middle | top | bottom | 
                <percentage> | <length> */

  /* tbody {
    vertical-align: top;
  }              */
  td,
  th {
    border: none;
  }
  /* td,
  th {
    border: 1px solid;
  } */

  td {
    padding: 15px;
    text-align: center;
  }

  tbody tr {
    :nth-of-type(odd) {
      background-color: #efefef;
    }
    :hover {
      background-color: lightpink;
    }
  }
  thead > tr {
    background-color: #c2c2c2;
    padding: 1.5rem;
  }

  thead > tr {
    background-color: #c2c2c2;
    padding: 1.5rem;
  }
  thead tr th {
    padding: 1rem;
  }
  thead tr td {
    padding: 0.8rem;
  }
  caption {
    font-size: 0.9em;
    padding: 5px;
    font-weight: bold;
  }
`;
