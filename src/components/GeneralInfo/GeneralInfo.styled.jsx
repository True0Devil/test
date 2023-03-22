import styled from 'styled-components';

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
  justify-content: space-between;

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

  border-radius: ${({ theme }) => theme.borderRadius.secondary};
`;

export const IconContainer = styled.div`
  padding: 12px;
  border-radius: ${({ theme }) => theme.borderRadius.secondary};
  margin-right: 22px;

  color: ${props => props.color};
  background-color: ${props => props.bgColor};

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
