import styled from 'styled-components';

import TravoltaMeme from 'imgs/travoltameme.gif';

export const Section = styled.section`
  margin-top: 16px;
  margin-bottom: 16px;

  display: flex;
`;

export const StatContainer = styled.div`
  padding: 24px 32px 32px 32px;
  background-color: ${({ theme }) => theme.colors.primary};
  background-image: url(${TravoltaMeme});
  background-size: contain;

  border-radius: ${({ theme }) => theme.borderRadius.main};

  height: 344px;
  flex-grow: 1;

  &:not(:last-child) {
    margin-right: 16px;
    flex-grow: 4.3;
  }
`;

export const Title = styled.h2`
  margin: 0;

  font-size: 18px;
  line-height: 1.33;

  color: ${({ theme }) => theme.colors.primary};
`;
