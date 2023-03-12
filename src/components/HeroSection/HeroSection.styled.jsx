import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  /* padding: 20px 0 20px; */
  padding: 16px 36px;
  margin-bottom: 24px;
`;

export const PageTitle = styled.h1`
  margin: 0;

  font-size: 20px;
  font-weight: 500;
  line-height: 1.4;

  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white};
`;

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ProfileMenuButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 6px;
  margin-right: 12px;

  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.round};

  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const UserNameText = styled.span`
  color: ${({ theme }) => theme.colors.white};

  font-size: 14px;
  line-height: 1.43;
`;
