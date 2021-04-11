import styled from 'styled-components';

export const TrucksTable = styled.div`
  overflow-y: scroll;
  height: calc(100% - 60px);
  margin: 3rem 0;

  & thead tr th {
    position: sticky;
    top: 0;
  }
`;

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

export const THead = styled.thead``;

export const THeadRow = styled.tr``;

export const NoHeader = styled.th`
  width: calc(5% + 13px);
  min-width: 30px;
  height: 40px;
  background-color: #ffffff;
  box-shadow: inset 0 -1px 1px #000000;
  font-family: 'Open Sans Regular';
  font-size: 12px;
  color: #000000;
  text-align: center;
  padding-left: 20px;
`;

export const NoCell = styled.td`
  padding: 4px 8px 4px 28px;
  font-family: 'Open Sans Regular';
  font-size: 14px;
  color: #000000;
  text-align: center;
  border-bottom: solid 1px #000000;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
`;

export const CarrierNameHeader = styled.th`
  width: calc(35% - 49px);
  min-width: 210px;
  height: 40px;
  background-color: #ffffff;
  box-shadow: inset 0 -1px 1px #000000;
  font-family: 'Open Sans Regular';
  font-size: 12px;
  color: #000000;
  text-align: center;
`;

export const CarrierNameCell = styled.td`
  padding: 4px 8px 4px 8px;
  font-family: 'Open Sans Regular';
  font-size: 14px;
  color: #000000;
  text-align: center;
  border-bottom: solid 1px #000000;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
`;

export const DeadheadHeader = styled.th`
  width: calc(15% - 21px);
  min-width: 90px;
  height: 40px;
  background-color: #ffffff;
  box-shadow: inset 0 -1px 1px #000000;
  font-family: 'Open Sans Regular';
  font-size: 12px;
  color: #000000;
  text-align: center;
`;

export const DeadheadCell = styled.td`
  padding: 4px 8px 4px 8px;
  font-family: 'Open Sans Regular';
  font-size: 14px;
  color: #000000;
  text-align: center;
  border-bottom: solid 1px #000000;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
`;

export const SafetyScoreHeader = styled.th`
  width: calc(15% - 21px);
  min-width: 90px;
  height: 40px;
  background-color: #ffffff;
  box-shadow: inset 0 -1px 1px #000000};
  font-family: 'Open Sans Regular';
  font-size: 12px;
  color: #000000;
  text-align: center;
`;

export const SafetyScoreCell = styled.td`
  padding: 4px 8px 4px 8px;
  font-family: 'Open Sans Regular';
  font-size: 14px;
  color: #000000;
  text-align: center;
  border-bottom: solid 1px #000000};
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
`;

export const PriceHeader = styled.th`
  width: calc(15% - 21px);
  min-width: 90px;
  height: 40px;
  background-color: #ffffff;
  box-shadow: inset 0 -1px 1px #000000;
  font-family: 'Open Sans Regular';
  font-size: 12px;
  color: #000000;
  text-align: center;
`;

export const PriceCell = styled.td`
  padding: 4px 8px 4px 8px;
  font-family: 'Open Sans Regular';
  font-size: 14px;
  color: #000000;
  text-align: center;
  border-bottom: solid 1px #000000;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
`;

export const ActionHeader = styled.th`
  width: 120px;
  height: 40px;
  background-color: #ffffff;
  box-shadow: inset 0 -1px 1px #000000;
`;

export const ActionCell = styled.td`
  width: 100px;
  padding-left: 8px;
  border-bottom: solid 1px #000000;
`;

export const BookNowBtn = styled.button`
  font-family: 'Open Sans SemiBold';
  font-size: 14px;
  color: #000000;
  border: none;
  border-radius: 4px;
  outline: none;
  box-shadow: none;
  background-color: rgb(226, 226, 226);
  padding: 8px 16px;
  cursor: pointer;
`;

export const TBody = styled.tbody``;

export const TBodyRow = styled.tr`
  height: 72px;
`;
