import styled from 'styled-components';

// function defineBgColor(type) {
//   const colors = ['#42CC58', '#4998EE', '#F25D5D', '#F4A732', '#9B53F8'];

//   switch (type) {
//     case 'green':
//       return colors[0];

//     case 'blue':
//       return colors[1];

//     case 'red':
//       return colors[2];

//     case 'yellow':
//       return colors[3];

//     case 'purple':
//       return colors[4];

//     default:
//       break;
//   }
// }

export const InfoSection = styled.section`
  //
`;

export const VisuallyHiddenTitle = styled.h2`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;

  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
`;

export const InfoList = styled.ul`
  display: flex;

  margin: 0;
  padding: 0;

  list-style: none;

  gap: 0 20px;
`;

export const InfoItem = styled.li`
  display: flex;
  align-items: flex-start;

  flex-basis: calc((100% / 4) - 80px);

  padding: 20px;

  background-color: ${({ theme }) => theme.colors.primary};
`;

export const IconContainer = styled.div`
  padding: 12px;
  border-radius: ${({ theme }) => theme.borderRadius.secondary};
  margin-right: 22px;

  ${InfoItem}:nth-child(1) & {
    color: #3cdc86;
    background-color: rgba(66, 204, 88, 0.15);
  }

  ${InfoItem}:nth-child(2) & {
    color: #4998ee;
    background-color: rgba(73, 152, 238, 0.15);
  }

  ${InfoItem}:nth-child(3) & {
    color: #f25d5d;
    background-color: rgba(242, 93, 93, 0.15);
  }

  ${InfoItem}:nth-child(4) & {
    color: #f4a732;
    background-color: rgba(244, 167, 50, 0.15);
  }

  ${InfoItem}:nth-child(5) & {
    color: #9b53f8;
    background-color: rgba(155, 83, 248, 0.15);
  }

  & > svg {
    display: block;
  }
`;

export const StatContainer = styled.div`
  //
`;

export const StatInfo = styled.p`
  margin: 0;

  font-size: 44px;
  font-weight: 400;
  line-height: 1.09;

  color: ${({ theme }) => theme.colors.white};
`;

export const StatTitle = styled.h3`
  margin: 0;

  font-size: 13px;
  line-height: 1.23;

  color: ${({ theme }) => theme.colors.gray};
`;
