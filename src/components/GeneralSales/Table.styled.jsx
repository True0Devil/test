import styled from 'styled-components';

export const Table = styled.table`
  /* padding: 0 32px 20px 32px; */
  color: ${({ theme }) => theme.colors.white};

  width: 100%;

  table-layout: fixed;
  border-collapse: collapse;

  text-align: left;
  vertical-align: middle;
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

export const TableData = styled.td`
  padding: 16px 0;

  font-size: 13px;
  line-height: 20px;

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

export const CenteredTableData = styled.td`
  font-size: 13px;
  line-height: 20px;

  text-align: center;
`;
