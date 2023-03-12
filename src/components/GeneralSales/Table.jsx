import {
  CardImage,
  CardName,
  CardNumber,
  CenteredTableData,
  CenteredTableHeader,
  ModelContainer,
  ModelName,
  Table,
  TableBody,
  TableData,
  TableHead,
  TableHeader,
  TableRow,
} from './Table.styled';

import { ReactComponent as OptionsIcon } from 'icons/options.svg';
import cardImg from 'imgs/card_img.jpg';

export const GeneralSalesTable = ({ data, isVisible }) => {
  const newArr = Array(5).fill(...data);
  return (
    <Table>
      <TableHead>
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
      </TableHead>

      <TableBody>
        {newArr.map((product, i) => (
          <TableRow key={i}>
            {isVisible.model && (
              <TableData>
                <ModelContainer>
                  <CardImage
                    src={product.model.image ?? cardImg}
                    alt="product image"
                  />
                  <ModelName>{product.model.name}</ModelName>
                </ModelContainer>
              </TableData>
            )}
            <TableData>
              {isVisible.name && <CardName>{product.card_name}</CardName>}
              {isVisible.number && (
                <CardNumber>Card {product.card_number}</CardNumber>
              )}
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
      </TableBody>
    </Table>
  );
};
