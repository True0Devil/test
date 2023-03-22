import { ReactComponent as ProfileIcon } from 'icons/user2.svg';
import { ReactComponent as SettingsIcon } from 'icons/setting.svg';
import { ReactComponent as KeyholeIcon } from 'icons/keyhole.svg';
import { ReactComponent as ShareIcon } from 'icons/share.svg';
import { ReactComponent as GamesIcon } from 'icons/games.svg';

export const itemsDefinitions = [
  {
    name: 'IAM Users',
    key: 'iam_users',
    color: '#3cdc86',
    bgColor: 'rgba(66, 204, 88, 0.15)',
    icon: <ProfileIcon />,
  },

  {
    name: 'IAM Roles',
    key: 'iam_roles',
    color: '#4998ee',
    bgColor: 'rgba(73, 152, 238, 0.15)',
    icon: <SettingsIcon />,
  },

  {
    name: 'IAM Policies',
    key: 'iam_policies',
    color: '#f25d5d',
    bgColor: 'rgba(242, 93, 93, 0.15)',
    icon: <KeyholeIcon />,
  },

  {
    name: 'IAM Users',
    key: 'compute_resources',
    color: '#f4a732',
    bgColor: 'rgba(244, 167, 50, 0.15)',
    icon: <ShareIcon />,
  },

  {
    name: 'IAM Users',
    key: 'games',
    color: '#9b53f8',
    bgColor: 'rgba(155, 83, 248, 0.15)',
    icon: <GamesIcon />,
  },
];
