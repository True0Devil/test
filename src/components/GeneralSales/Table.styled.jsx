import styled from 'styled-components';

export const Table = styled.table`
  color: ${({ theme }) => theme.colors.white};

  width: 100%;

  table-layout: fixed;
  border-collapse: collapse;

  text-align: left;
  vertical-align: middle;
`;

export const TableHead = styled.thead`
  //
`;

export const TableRow = styled.tr`
  &:not(:only-child):hover {
    background-color: rgba(255, 255, 255, 0.06);
  }
`;

export const TableHeader = styled.th`
  font-size: 11px;
  line-height: 1.09;

  color: rgba(255, 255, 255, 0.6);

  &:first-child {
    padding-left: 32px;
  }

  &:nth-child(-n + 2) {
    width: 220px;
  }

  &:last-child {
    text-align: center;
  }
`;

export const CenteredTableHeader = styled.th`
  font-size: 11px;
  line-height: 1.09;

  color: rgba(255, 255, 255, 0.6);

  text-align: center;
`;

export const TableBody = styled.tbody`
  //
`;

export const TableData = styled.td`
  padding: 16px 0;

  font-size: 13px;
  line-height: 1.54;

  &:first-child {
    padding-left: 32px;
  }

  &:last-child {
    text-align: center;
  }

  &:nth-last-child(2) {
    font-weight: 500;
    font-size: 15px;
  }
`;

export const ModelContainer = styled.div`
  max-width: 150px;
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const CardImage = styled.img`
  display: block;
`;

export const ModelName = styled.span`
  //
`;

export const CardName = styled.div`
  //
`;

export const CardNumber = styled.div`
  color: rgba(255, 255, 255, 0.6);
  font-size: 11px;
  line-height: 1.09;
`;

export const CenteredTableData = styled.td`
  font-size: 13px;
  line-height: 20px;

  text-align: center;
`;
