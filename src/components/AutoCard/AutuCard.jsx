import data from '../../img/list_img.json';

import {
  CardContainer,
  ImgContainer,
  CardImg,
  HeartBtn,
  HeartIcon,
  TitleContainer,
  Title,
  TitleAccent,
  Price,
  DescriptionContainer,
  Description,
  BtnLearnMore,
} from './AutoCard.styled';

export const AutoCard = () => {
  return (
    <CardContainer>
      <ImgContainer>
        <CardImg src={data.auto1} alt="auto" width={274} height={268} />
        <HeartBtn>
          <HeartIcon name="heart" />
        </HeartBtn>
      </ImgContainer>

      <div>
        <TitleContainer>
          <Title>
            Buick <TitleAccent>Enclave</TitleAccent>, 2008
          </Title>
          <Price>$40</Price>
        </TitleContainer>
        <DescriptionContainer>
          <Description>
            Kiev | Ukraine | Luxury Car Rentals| Premium{' '}
          </Description>
          <Description>Suv | Enclave | 9582 | Power liftgate</Description>
        </DescriptionContainer>
      </div>
      <BtnLearnMore>Learn more</BtnLearnMore>
    </CardContainer>
  );
};
