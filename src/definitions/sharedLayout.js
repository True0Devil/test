import { ReactComponent as DashBoardLogo } from 'icons/dashboard.svg';
import { ReactComponent as CardsLogo } from 'icons/cards.svg';
import { ReactComponent as ProductLogo } from 'icons/product.svg';
import { ReactComponent as WearTearLogo } from 'icons/wear-tear.svg';
import { ReactComponent as GamesLogo } from 'icons/games.svg';
import { ReactComponent as SettingsLogo } from 'icons/settings.svg';

export const layoutDefinitions = [
  {
    path: '/dashboard',
    icon: <DashBoardLogo />,
  },
  {
    path: '',
    icon: <CardsLogo />,
  },
  {
    path: '',
    icon: <ProductLogo />,
  },
  {
    path: '',
    icon: <WearTearLogo />,
  },
  {
    path: '',
    icon: <GamesLogo />,
  },
  {
    path: '',
    icon: <SettingsLogo />,
  },
];
