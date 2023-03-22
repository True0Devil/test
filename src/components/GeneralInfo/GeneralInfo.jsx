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

import { itemsDefinitions } from 'definitions/generalInfo';

export const GeneralInfo = ({ stats }) => {
  return (
    <InfoSection>
      <VisuallyHiddenTitle>General Info</VisuallyHiddenTitle>

      <InfoList>
        {itemsDefinitions.map((item, i) => (
          <InfoItem key={i}>
            <IconContainer color={item.color} bgColor={item.bgColor}>
              {item.icon}
            </IconContainer>
            <StatContainer>
              <StatInfo>{stats[item.key]}</StatInfo>
              <StatTitle>{item.name}</StatTitle>
            </StatContainer>
          </InfoItem>
        ))}
      </InfoList>
    </InfoSection>
  );
};
