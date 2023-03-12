import {
  InfoSection,
  IconContainer,
  InfoItem,
  InfoList,
  StatContainer,
  StatTitle,
  StatInfo,
  VisuallyHiddenTitle,
} from './GeneralInfo.styled';

import { ReactComponent as ProfileIcon } from 'icons/user2.svg';
import { ReactComponent as SettingsIcon } from 'icons/setting.svg';
import { ReactComponent as KeyholeIcon } from 'icons/keyhole.svg';
import { ReactComponent as ShareIcon } from 'icons/share.svg';
import { ReactComponent as GamesIcon } from 'icons/games.svg';

export const GeneralInfo = ({ stats }) => {
  return (
    <InfoSection>
      <VisuallyHiddenTitle>General Info</VisuallyHiddenTitle>

      <InfoList>
        <InfoItem>
          <IconContainer>
            <ProfileIcon />
          </IconContainer>
          <StatContainer>
            <StatInfo>{stats.iam_users}</StatInfo>
            <StatTitle>IAM Users</StatTitle>
          </StatContainer>
        </InfoItem>

        <InfoItem>
          <IconContainer>
            <SettingsIcon />
          </IconContainer>
          <StatContainer>
            <StatInfo>{stats.iam_roles}</StatInfo>
            <StatTitle>IAM Roles</StatTitle>
          </StatContainer>
        </InfoItem>

        <InfoItem>
          <IconContainer>
            <KeyholeIcon />
          </IconContainer>
          <StatContainer>
            <StatInfo>{stats.iam_policies}</StatInfo>
            <StatTitle>IAM Policies</StatTitle>
          </StatContainer>
        </InfoItem>

        <InfoItem>
          <IconContainer>
            <ShareIcon />
          </IconContainer>
          <StatContainer>
            <StatInfo>{stats.compute_resources}</StatInfo>
            <StatTitle>Compute Resources</StatTitle>
          </StatContainer>
        </InfoItem>

        <InfoItem>
          <IconContainer>
            <GamesIcon />
          </IconContainer>
          <StatContainer>
            <StatInfo>{stats.games}</StatInfo>
            <StatTitle>Games</StatTitle>
          </StatContainer>
        </InfoItem>
      </InfoList>
    </InfoSection>
  );
};
