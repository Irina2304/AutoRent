import styled from 'styled-components';

import { Icon } from '../Icon/Icon';

export const CardContainer = styled.div`
  width: 274px;
  height: 426px;
  display: flex;
  flex-direction: column;
`;

export const ImgContainer = styled.div`
  position: relative;
`;

export const CardImg = styled.img`
  border-radius: 15px;
  margin-bottom: 14px;
`;

export const HeartBtn = styled.button`
  border: none;
  padding: 0;
  background-color: transparent;
  position: absolute;
  top: 14px;
  right: 14px;
`;

export const HeartIcon = styled(Icon)`
  width: 18px;
  height: 18px;

  stroke: rgba(255, 255, 255, 0.8);
  fill: none;

  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1),
    stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    fill: rgba(52, 112, 255, 1);
    stroke: rgba(52, 112, 255, 1);
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const Title = styled.h3`
  margin: 0;
  font-size: 16px;
  line-height: 1.5;
  color: rgba(18, 20, 23, 1);
  font-weight: 600;
`;

export const TitleAccent = styled.span`
  margin: 0;
  font-size: 16px;
  line-height: 1.5;
  color: rgba(52, 112, 255, 1);
  font-weight: 600;
`;

export const Price = styled.p`
  margin: 0;
  font-size: 16px;
  line-height: 1.5;
  color: rgba(18, 20, 23, 1);
  font-weight: 600;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Description = styled.p`
  margin: 0;
  font-size: 12px;
  line-height: 1.3;
  color: rgba(18, 20, 23, 0.5);
  font-weight: normal;
`;

export const BtnLearnMore = styled.button`
  margin-top: auto;
  padding-top: 12px;
  padding-bottom: 12px;
  background-color: rgba(52, 112, 255, 1);
  color: rgba(255, 255, 255, 1);
  border: none;
  border-radius: 15px;
  font-size: 14px;
  line-height: 1.4;
  font-weight: bold;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: rgba(11, 68, 205, 1);
  }
`;
