import { ReactComponent as ProfileIcon } from 'icons/UserProfileIcon.svg';
import { PageTitle, ProfileContainer, ProfileMenuButton, Section, UserNameText } from './HeroSection.styled';

export const HeroSection = ({ title, username }) => {
  return (
    <Section>
      <PageTitle>{title}</PageTitle>
      <ProfileContainer>
        <ProfileMenuButton type="button">
          <ProfileIcon />
        </ProfileMenuButton>
        <UserNameText>{username}</UserNameText>
      </ProfileContainer>
    </Section>
  );
};

