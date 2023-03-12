import {
  Checked,
  LayoutContainer,
  MenuContainer,
  OptionContainer,
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
                <OptionContainer htmlFor="source">
                  <span>Source</span>
                  <VisuallyHiddenCheckbox
                    id="source"
                    type="checkbox"
                    name="source"
                    checked={isVisible.source}
                    onChange={handleChecked}
                  />
                  <Checked />
                  <Unchecked />
                </OptionContainer>

                <OptionContainer htmlFor="model">
                  <span>Card model</span>
                  <VisuallyHiddenCheckbox
                    id="model"
                    type="checkbox"
                    name="model"
                    onChange={handleChecked}
                    checked={isVisible.model}
                  />
                  <Checked />
                  <Unchecked />
                </OptionContainer>

                <OptionContainer htmlFor="number">
                  <span>Card number</span>
                  <VisuallyHiddenCheckbox
                    id="number"
                    type="checkbox"
                    name="number"
                    onChange={handleChecked}
                    checked={isVisible.number}
                  />
                  <Checked />
                  <Unchecked />
                </OptionContainer>

                <OptionContainer htmlFor="name">
                  <span>Card name</span>
                  <VisuallyHiddenCheckbox
                    id="name"
                    type="checkbox"
                    name="name"
                    onChange={handleChecked}
                    checked={isVisible.name}
                  />
                  <Checked />
                  <Unchecked />
                </OptionContainer>

                <OptionContainer htmlFor="type">
                  <span>Type</span>
                  <VisuallyHiddenCheckbox
                    id="type"
                    type="checkbox"
                    name="type"
                    onChange={handleChecked}
                    checked={isVisible.type}
                  />
                  <Checked />
                  <Unchecked />
                </OptionContainer>

                <OptionContainer htmlFor="limited">
                  <span>Limited</span>
                  <VisuallyHiddenCheckbox
                    id="limited"
                    type="checkbox"
                    name="limited"
                    onChange={handleChecked}
                    checked={isVisible.limited}
                  />
                  <Checked />
                  <Unchecked />
                </OptionContainer>

                <OptionContainer htmlFor="operations">
                  <span>№ Operations</span>
                  <VisuallyHiddenCheckbox
                    id="operations"
                    type="checkbox"
                    name="operations"
                    onChange={handleChecked}
                    checked={isVisible.operations}
                  />
                  <Checked />
                  <Unchecked />
                </OptionContainer>

                <OptionContainer htmlFor="date">
                  <span>Date of lost operations</span>
                  <VisuallyHiddenCheckbox
                    id="date"
                    type="checkbox"
                    name="date"
                    onChange={handleChecked}
                    checked={isVisible.date}
                  />
                  <Checked />
                  <Unchecked />
                </OptionContainer>

                <OptionContainer htmlFor="rating">
                  <span>Rating</span>
                  <VisuallyHiddenCheckbox
                    id="rating"
                    type="checkbox"
                    name="rating"
                    onChange={handleChecked}
                    checked={isVisible.rating}
                  />
                  <Checked />
                  <Unchecked />
                </OptionContainer>

                <OptionContainer htmlFor="status">
                  <span>Status</span>
                  <VisuallyHiddenCheckbox
                    id="status"
                    type="checkbox"
                    name="status"
                    onChange={handleChecked}
                    checked={isVisible.status}
                  />
                  <Checked />
                  <Unchecked />
                </OptionContainer>

                <OptionContainer htmlFor="price">
                  <span>Price</span>
                  <VisuallyHiddenCheckbox
                    id="price"
                    type="checkbox"
                    name="price"
                    onChange={handleChecked}
                    checked={isVisible.price}
                  />
                  <Checked />
                  <Unchecked />
                </OptionContainer>
              </OptionsForm>
            </OptionsContainer>
          )}
        </MenuContainer>
      </LayoutContainer>

      <GeneralSalesTable data={data} isVisible={isVisible} />
    </Section>
  );
};
