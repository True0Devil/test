import styled from 'styled-components';

import { ReactComponent as CheckboxChecked } from 'icons/checkbox_checked.svg';
import { ReactComponent as CheckboxUnchecked } from 'icons/ckeckbox_unchecked.svg';

export const Section = styled.section`
  padding: 24px 0 20px;

  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const LayoutContainer = styled.div`
  padding: 0 32px;
  display: flex;
  justify-content: space-between;

  margin-bottom: 32px;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;
export const SectionTitle = styled.h2`
  margin: 0;

  font-size: 18px;
  line-height: 1.33;
`;

export const MenuContainer = styled.div`
  position: relative;
`;

export const SettingsButton = styled.button`
  display: flex;
  align-items: center;

  padding: 0;
  gap: 8px;

  color: ${({ isActive, theme }) =>
    isActive ? '#76b2ea' : theme.colors.white};

  background-color: transparent;
  border: none;

  font-family: 'Metropolis';
  font-weight: 400;
  font-size: 13px;
  line-height: 1.54;

  cursor: pointer;

  &:hover {
    color: #76b2ea;
  }

  & > svg:last-of-type {
    transform: ${({ isActive }) =>
      isActive ? 'rotate(180deg)' : 'rotate(360deg)'};
  }
`;

export const OptionsContainer = styled.div`
  position: absolute;
  right: 0;
  top: calc(100% + 4px);

  z-index: 2;

  padding: 4px;

  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.4), 0px 2px 4px rgba(0, 0, 0, 0.25),
    0px 8px 48px rgba(0, 0, 0, 0.6), 0px 2px 4px rgba(36, 38, 53, 0.08),
    0px 4px 12px rgba(36, 38, 53, 0.1), 0px 16px 24px rgba(55, 58, 83, 0.16);
  border-radius: ${({ theme }) => theme.borderRadius.secondary};
`;

export const OptionsForm = styled.form`
  overflow-y: scroll;

  width: 300px;
  height: 288px;

  &::-webkit-scrollbar {
    width: 2px;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-track {
    background-color: #60677a;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #a9a6ae;
  }
`;
export const Option = styled.label`
  position: relative;

  display: block;

  padding: 10px 16px 10px 24px;
`;

export const OptionName = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.43;
`;

export const VisuallyHiddenCheckbox = styled.input`
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

export const Checked = styled(CheckboxChecked)`
  //
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 16px;

  opacity: 0;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);

  ${VisuallyHiddenCheckbox}:checked + & {
    opacity: 1;
  }
`;

export const Unchecked = styled(CheckboxUnchecked)`
  //
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 16px;

  opacity: 1;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);

  ${VisuallyHiddenCheckbox}:checked ~ & {
    opacity: 0;
  }
`;
