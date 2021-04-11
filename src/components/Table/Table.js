import React, { Suspense, lazy } from 'react';
import { useTable, useSortBy } from 'react-table';
import * as S from './Table.elements';
import { Container } from '../../globalStyles';

const LoadingIndicator = lazy(() => import('../LoadingIndicator'));
const COLUMNS = [
  { Header: '#', accessor: 'index' },
  { Header: 'Carrier Name', accessor: 'carrier' },
  { Header: 'Deadhead', accessor: 'deadhead' },
  { Header: 'Safety Score', accessor: 'safety' },
  { Header: 'Acceptance Rate', accessor: 'acceptance' },
  { Header: 'Price', accessor: 'price' },
  { Header: '', accessor: 'edit' },
];

function Table({ data }) {
  const { getTableProps, getTableBodyProps, headers, rows, prepareRow } = useTable(
    {
      columns: COLUMNS,
      data: (data || []).map((d, index) => {
        const { carrier, deadhead, calculatedTruckPrice } = d;

        return {
          index: index + 1,
          carrier,
          deadhead,
          price: calculatedTruckPrice,
        };
      }),
      autoResetSortBy: false,
    },
    useSortBy
  );

  // Render the UI for your table
  return (
    <Container>
      <S.TrucksTable>
        <Suspense fallback={<LoadingIndicator />}>
          <S.Table {...getTableProps()}>
            <S.THead>
              <S.THeadRow>
                {headers.map((col) => {
                  if (col.id === 'index') {
                    return (
                      <S.NoHeader {...col.getHeaderProps()}>{col.render('Header')}</S.NoHeader>
                    );
                  }
                  if (col.id === 'carrier') {
                    return (
                      <S.CarrierNameHeader {...col.getHeaderProps(col.getSortByToggleProps())}>
                        {col.render('Header')}
                        <span>{col.isSorted ? (col.isSortedDesc ? ' 🔽' : ' 🔼') : ''}</span>
                      </S.CarrierNameHeader>
                    );
                  }
                  if (col.id === 'deadhead') {
                    return (
                      <S.DeadheadHeader {...col.getHeaderProps(col.getSortByToggleProps())}>
                        {col.render('Header')}
                        <span>{col.isSorted ? (col.isSortedDesc ? ' 🔽' : ' 🔼') : ''}</span>
                      </S.DeadheadHeader>
                    );
                  }
                  if (col.id === 'safety') {
                    return (
                      <S.SafetyScoreHeader {...col.getHeaderProps(col.getSortByToggleProps())}>
                        {col.render('Header')}
                        <span>{col.isSorted ? (col.isSortedDesc ? ' 🔽' : ' 🔼') : ''}</span>
                      </S.SafetyScoreHeader>
                    );
                  }
                  if (col.id === 'acceptance') {
                    return (
                      <S.AcceptanceRateHeader {...col.getHeaderProps(col.getSortByToggleProps())}>
                        {col.render('Header')}
                        <span>{col.isSorted ? (col.isSortedDesc ? ' 🔽' : ' 🔼') : ''}</span>
                      </S.AcceptanceRateHeader>
                    );
                  }
                  if (col.id === 'price') {
                    return (
                      <S.PriceHeader {...col.getHeaderProps(col.getSortByToggleProps())}>
                        {col.render('Header')}
                        <span>{col.isSorted ? (col.isSortedDesc ? ' 🔽' : ' 🔼') : ''}</span>
                      </S.PriceHeader>
                    );
                  }
                  return <S.ActionHeader key="action">{col.render('Header')}</S.ActionHeader>;
                })}
              </S.THeadRow>
            </S.THead>
            <S.TBody {...getTableBodyProps()}>
              {rows &&
                rows.map((row) => {
                  prepareRow(row);

                  return (
                    <S.TBodyRow {...row.getRowProps()}>
                      <S.NoCell>{row.values.index}</S.NoCell>
                      <S.CarrierNameCell>{row.values.carrier}</S.CarrierNameCell>
                      <S.DeadheadCell>{row.values.deadhead}</S.DeadheadCell>
                      <S.SafetyScoreCell>{row.values.safety}</S.SafetyScoreCell>
                      <S.AcceptanceRateCell>{row.values.acceptance}</S.AcceptanceRateCell>
                      <S.PriceCell>{row.values.price}</S.PriceCell>
                      <S.ActionCell>
                        <S.BookNowBtn>Book Now</S.BookNowBtn>
                      </S.ActionCell>
                    </S.TBodyRow>
                  );
                })}
            </S.TBody>
          </S.Table>
        </Suspense>
      </S.TrucksTable>
    </Container>
  );
}

export default Table;
