import {
  CenteredTableData,
  CenteredTableHeader,
  Table,
  TableData,
  TableHeader,
  TableRow,
} from './Table.styled';

import { ReactComponent as OptionsIcon } from 'icons/options.svg';
import cardImg from 'imgs/card_img.jpg';

export const GeneralSalesTable = ({ data, isVisible }) => {
  const newArr = Array(5).fill(...data);
  return (
    <Table>
      <thead>
        <TableRow>
          {isVisible.model && <TableHeader>Card model</TableHeader>}
          {isVisible.name && <TableHeader>Card name</TableHeader>}
          {isVisible.type && <CenteredTableHeader>Type</CenteredTableHeader>}
          {isVisible.limited && (
            <CenteredTableHeader>Limited</CenteredTableHeader>
          )}
          {isVisible.operations && (
            <CenteredTableHeader>№ Operations</CenteredTableHeader>
          )}
          {isVisible.date && <TableHeader>Date of lost operations</TableHeader>}
          {isVisible.rating && <TableHeader>Rating</TableHeader>}
          {isVisible.status && <TableHeader>Status</TableHeader>}
          {isVisible.price && <TableHeader>Price</TableHeader>}
          <TableHeader>Options</TableHeader>
        </TableRow>
      </thead>

      <tbody>
        {newArr.map((product, i) => (
          <TableRow key={i}>
            {isVisible.model && (
              <TableData>
                <div
                  style={{
                    maxWidth: '150px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                  }}
                >
                  <img
                    src={product.model.image ?? cardImg}
                    alt=""
                    style={{ display: 'block' }}
                  />
                  <span>{product.model.name}</span>
                </div>
              </TableData>
            )}
            <TableData>
              {isVisible.name && <div>{product.card_name}</div>}
              {isVisible.number && <div>Card {product.card_number}</div>}
            </TableData>
            {isVisible.type && (
              <CenteredTableData>{product.type}</CenteredTableData>
            )}
            {isVisible.limited && (
              <CenteredTableData>{product.limited}</CenteredTableData>
            )}
            {isVisible.operations && (
              <CenteredTableData>{product.operations}</CenteredTableData>
            )}
            {isVisible.date && <TableData>{product.date}</TableData>}
            {isVisible.rating && <TableData>{product.rating}</TableData>}
            {isVisible.status && <TableData>{product.status}</TableData>}
            {isVisible.price && <TableData>{product.price}</TableData>}
            <TableData>
              <OptionsIcon />
            </TableData>
          </TableRow>
        ))}
      </tbody>
    </Table>
  );
};
