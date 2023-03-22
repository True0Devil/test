import { ReactComponent as ProfileIcon } from 'icons/UserProfileIcon.svg';
import {
  PageTitle,
  ProfileContainer,
  ProfileMenuButton,
  Header,
  UserNameText,
} from './HeroSection.styled';

export const HeroSection = ({ title, username }) => {
  return (
    <Header>
      <PageTitle>{title}</PageTitle>
      <ProfileContainer>
        <ProfileMenuButton type="button">
          <ProfileIcon />
        </ProfileMenuButton>
        <UserNameText>{username}</UserNameText>
      </ProfileContainer>
    </Header>
  );
};
