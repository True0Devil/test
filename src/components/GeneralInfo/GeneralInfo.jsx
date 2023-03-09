import {
  IconContainer,
  InfoItem,
  InfoList,
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
    <section>
      <VisuallyHiddenTitle>General Info</VisuallyHiddenTitle>

      <InfoList>
        <InfoItem>
          <IconContainer>
            <ProfileIcon />
          </IconContainer>
          <div>
            <StatInfo>{stats.iam_users}</StatInfo>
            <StatTitle>IAM Users</StatTitle>
          </div>
        </InfoItem>

        <InfoItem>
          <IconContainer>
            <SettingsIcon />
          </IconContainer>
          <div>
            <StatInfo>{stats.iam_roles}</StatInfo>
            <StatTitle>IAM Roles</StatTitle>
          </div>
        </InfoItem>

        <InfoItem>
          <IconContainer>
            <KeyholeIcon />
          </IconContainer>
          <div>
            <StatInfo>{stats.iam_policies}</StatInfo>
            <StatTitle>IAM Policies</StatTitle>
          </div>
        </InfoItem>

        <InfoItem>
          <IconContainer>
            <ShareIcon />
          </IconContainer>
          <div>
            <StatInfo>{stats.compute_resources}</StatInfo>
            <StatTitle>Compute Resources</StatTitle>
          </div>
        </InfoItem>

        <InfoItem>
          <IconContainer>
            <GamesIcon />
          </IconContainer>
          <div>
            <StatInfo>{stats.games}</StatInfo>
            <StatTitle>Games</StatTitle>
          </div>
        </InfoItem>
      </InfoList>
    </section>
  );
};
