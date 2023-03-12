import {
  Checked,
  LayoutContainer,
  MenuContainer,
  Option,
  OptionName,
  OptionsContainer,
  OptionsForm,
  Section,
  SectionTitle,
  SettingsButton,
  TitleContainer,
  Unchecked,
  VisuallyHiddenCheckbox,
} from './GenetalSales.styled';

import { ReactComponent as SettingsIcon } from 'icons/setting.svg';
import { ReactComponent as Arrow } from 'icons/arrow.svg';
import { ReactComponent as InfoIcon } from 'icons/info.svg';
import { GeneralSalesTable } from './Table';
import { useState } from 'react';

const initialCheckedState = {
  source: true,
  model: true,
  name: true,
  number: true,
  type: true,
  limited: true,
  operations: true,
  date: true,
  rating: true,
  status: true,
  price: true,
};

export const GeneralSales = ({ data }) => {
  const [optionsAreVisible, setOptionAreVisible] = useState(false);
  const [isVisible, setIsVisible] = useState(initialCheckedState);

  const handleOptionsVisibility = () => {
    setOptionAreVisible(prev => !prev);
  };

  const handleChecked = e => {
    const { name, checked } = e.target;
    setIsVisible(prev => ({ ...prev, [name]: checked }));
  };
  //

  return (
    <Section>
      <LayoutContainer>
        <TitleContainer>
          <SectionTitle>General Sales / Time</SectionTitle>
          <InfoIcon />
        </TitleContainer>

        <MenuContainer>
          <SettingsButton
            onClick={handleOptionsVisibility}
            isActive={optionsAreVisible}
          >
            <SettingsIcon />
            Table settings
            <Arrow />
          </SettingsButton>

          {optionsAreVisible && (
            <OptionsContainer>
              <OptionsForm action="">
                <Option htmlFor="source">
                  <OptionName>Source</OptionName>
                  <VisuallyHiddenCheckbox
                    id="source"
                    type="checkbox"
                    name="source"
                    checked={isVisible.source}
                    onChange={handleChecked}
                  />
                  <Checked />
                  <Unchecked />
                </Option>

                <Option htmlFor="model">
                  <OptionName>Card model</OptionName>
                  <VisuallyHiddenCheckbox
                    id="model"
                    type="checkbox"
                    name="model"
                    onChange={handleChecked}
                    checked={isVisible.model}
                  />
                  <Checked />
                  <Unchecked />
                </Option>

                <Option htmlFor="number">
                  <OptionName>Card number</OptionName>
                  <VisuallyHiddenCheckbox
                    id="number"
                    type="checkbox"
                    name="number"
                    onChange={handleChecked}
                    checked={isVisible.number}
                  />
                  <Checked />
                  <Unchecked />
                </Option>

                <Option htmlFor="name">
                  <OptionName>Card name</OptionName>
                  <VisuallyHiddenCheckbox
                    id="name"
                    type="checkbox"
                    name="name"
                    onChange={handleChecked}
                    checked={isVisible.name}
                  />
                  <Checked />
                  <Unchecked />
                </Option>

                <Option htmlFor="type">
                  <OptionName>Type</OptionName>
                  <VisuallyHiddenCheckbox
                    id="type"
                    type="checkbox"
                    name="type"
                    onChange={handleChecked}
                    checked={isVisible.type}
                  />
                  <Checked />
                  <Unchecked />
                </Option>

                <Option htmlFor="limited">
                  <OptionName>Limited</OptionName>
                  <VisuallyHiddenCheckbox
                    id="limited"
                    type="checkbox"
                    name="limited"
                    onChange={handleChecked}
                    checked={isVisible.limited}
                  />
                  <Checked />
                  <Unchecked />
                </Option>

                <Option htmlFor="operations">
                  <OptionName>№ Operations</OptionName>
                  <VisuallyHiddenCheckbox
                    id="operations"
                    type="checkbox"
                    name="operations"
                    onChange={handleChecked}
                    checked={isVisible.operations}
                  />
                  <Checked />
                  <Unchecked />
                </Option>

                <Option htmlFor="date">
                  <OptionName>Date of lost operations</OptionName>
                  <VisuallyHiddenCheckbox
                    id="date"
                    type="checkbox"
                    name="date"
                    onChange={handleChecked}
                    checked={isVisible.date}
                  />
                  <Checked />
                  <Unchecked />
                </Option>

                <Option htmlFor="rating">
                  <OptionName>Rating</OptionName>
                  <VisuallyHiddenCheckbox
                    id="rating"
                    type="checkbox"
                    name="rating"
                    onChange={handleChecked}
                    checked={isVisible.rating}
                  />
                  <Checked />
                  <Unchecked />
                </Option>

                <Option htmlFor="status">
                  <OptionName>Status</OptionName>
                  <VisuallyHiddenCheckbox
                    id="status"
                    type="checkbox"
                    name="status"
                    onChange={handleChecked}
                    checked={isVisible.status}
                  />
                  <Checked />
                  <Unchecked />
                </Option>

                <Option htmlFor="price">
                  <OptionName>Price</OptionName>
                  <VisuallyHiddenCheckbox
                    id="price"
                    type="checkbox"
                    name="price"
                    onChange={handleChecked}
                    checked={isVisible.price}
                  />
                  <Checked />
                  <Unchecked />
                </Option>
              </OptionsForm>
            </OptionsContainer>
          )}
        </MenuContainer>
      </LayoutContainer>

      <GeneralSalesTable data={data} isVisible={isVisible} />
    </Section>
  );
};
