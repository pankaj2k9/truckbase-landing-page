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
  background-color: ${(props) => props.theme.secondaryBgColor};
  box-shadow: inset 0 -1px 1px ${(props) => props.theme.primaryBorderColor};
  font-family: 'Open Sans Regular';
  font-size: 12px;
  color: ${(props) => props.theme.primaryTextColor};
  text-align: center;
  padding-left: 20px;
`;

export const NoCell = styled.td`
  padding: 4px 8px 4px 28px;
  font-family: 'Open Sans Regular';
  font-size: 14px;
  color: ${(props) => props.theme.secondaryTextColor};
  text-align: center;
  border-bottom: solid 1px ${(props) => props.theme.primaryBorderColor};
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
`;

export const CarrierNameHeader = styled.th`
  width: calc(35% - 49px);
  min-width: 210px;
  height: 40px;
  background-color: ${(props) => props.theme.secondaryBgColor};
  box-shadow: inset 0 -1px 1px ${(props) => props.theme.primaryBorderColor};
  font-family: 'Open Sans Regular';
  font-size: 12px;
  color: ${(props) => props.theme.primaryTextColor};
  text-align: center;
`;

export const CarrierNameCell = styled.td`
  padding: 4px 8px 4px 8px;
  font-family: 'Open Sans Regular';
  font-size: 14px;
  color: ${(props) => props.theme.secondaryTextColor};
  text-align: center;
  border-bottom: solid 1px ${(props) => props.theme.primaryBorderColor};
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
`;

export const DeadheadHeader = styled.th`
  width: calc(15% - 21px);
  min-width: 90px;
  height: 40px;
  background-color: ${(props) => props.theme.secondaryBgColor};
  box-shadow: inset 0 -1px 1px ${(props) => props.theme.primaryBorderColor};
  font-family: 'Open Sans Regular';
  font-size: 12px;
  color: ${(props) => props.theme.primaryTextColor};
  text-align: center;
`;

export const DeadheadCell = styled.td`
  padding: 4px 8px 4px 8px;
  font-family: 'Open Sans Regular';
  font-size: 14px;
  color: ${(props) => props.theme.secondaryTextColor};
  text-align: center;
  border-bottom: solid 1px ${(props) => props.theme.primaryBorderColor};
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
`;

export const SafetyScoreHeader = styled.th`
  width: calc(15% - 21px);
  min-width: 90px;
  height: 40px;
  background-color: ${(props) => props.theme.secondaryBgColor};
  box-shadow: inset 0 -1px 1px ${(props) => props.theme.primaryBorderColor};
  font-family: 'Open Sans Regular';
  font-size: 12px;
  color: ${(props) => props.theme.primaryTextColor};
  text-align: center;
`;

export const SafetyScoreCell = styled.td`
  padding: 4px 8px 4px 8px;
  font-family: 'Open Sans Regular';
  font-size: 14px;
  color: ${(props) => props.theme.secondaryTextColor};
  text-align: center;
  border-bottom: solid 1px ${(props) => props.theme.primaryBorderColor};
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
`;

export const AcceptanceRateHeader = styled.th`
  width: calc(15% - 21px);
  min-width: 90px;
  height: 40px;
  background-color: ${(props) => props.theme.secondaryBgColor};
  box-shadow: inset 0 -1px 1px ${(props) => props.theme.primaryBorderColor};
  font-family: 'Open Sans Regular';
  font-size: 12px;
  color: ${(props) => props.theme.primaryTextColor};
  text-align: center;
`;

export const AcceptanceRateCell = styled.td`
  padding: 4px 8px 4px 8px;
  font-family: 'Open Sans Regular';
  font-size: 14px;
  color: ${(props) => props.theme.secondaryTextColor};
  text-align: center;
  border-bottom: solid 1px ${(props) => props.theme.primaryBorderColor};
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
`;

export const PriceHeader = styled.th`
  width: calc(15% - 21px);
  min-width: 90px;
  height: 40px;
  background-color: ${(props) => props.theme.secondaryBgColor};
  box-shadow: inset 0 -1px 1px ${(props) => props.theme.primaryBorderColor};
  font-family: 'Open Sans Regular';
  font-size: 12px;
  color: ${(props) => props.theme.primaryTextColor};
  text-align: center;
`;

export const PriceCell = styled.td`
  padding: 4px 8px 4px 8px;
  font-family: 'Open Sans Regular';
  font-size: 14px;
  color: ${(props) => props.theme.secondaryTextColor};
  text-align: center;
  border-bottom: solid 1px ${(props) => props.theme.primaryBorderColor};
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
`;

export const ActionHeader = styled.th`
  width: 120px;
  height: 40px;
  background-color: ${(props) => props.theme.secondaryBgColor};
  box-shadow: inset 0 -1px 1px ${(props) => props.theme.primaryBorderColor};
`;

export const ActionCell = styled.td`
  width: 100px;
  padding-left: 8px;
`;

export const BookNowBtn = styled.button`
  font-family: 'Open Sans SemiBold';
  font-size: 14px;
  color: ${(props) => props.theme.primaryTextColor};
  border: none;
  border-radius: 4px;
  outline: none;
  box-shadow: none;
  background-color: ${(props) => props.theme.primaryButtonBgColor};
  padding: 8px 16px;
`;

export const TBody = styled.tbody``;

export const TBodyRow = styled.tr`
  height: 72px;
`;
