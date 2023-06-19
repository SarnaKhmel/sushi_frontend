import React from "react";
import {
  DeliveryBlock,
  Block,
  InfoBlock,
  MapBlock,
  Header,
  Line,
  GreenBlock,
  YellowBlock,
  RedBlock,
  Info,
  Iframe,
} from "./Delivery.styles";
const Delivery = () => {
  return (
    <DeliveryBlock id="delivery">
      <Block>
        <InfoBlock>
          <Header>Час доставки:</Header>
          <Line>
            <GreenBlock></GreenBlock>
            <Info>
              Від 350грн - <b>безкоштовна доставка</b>. <br /> До 350грн -
              60грн.
            </Info>
          </Line>
          <Line>
            <YellowBlock></YellowBlock>
            <Info>
              Від 500грн - <b>безкоштовна доставка</b>. <br />
              До 500грн - 80грн.
            </Info>
          </Line>
          <Line>
            <RedBlock></RedBlock>
            <Info>
              Від 700грн - <b>безкоштовна доставка</b>. <br /> До 700грн -
              100грн
            </Info>
          </Line>
          <Line>
            Інформацію що-до доставки за межі зон уточнюйте в оператора
          </Line>
          <Line>Час доставки за межі зон озвучує оператор</Line>
        </InfoBlock>
        <MapBlock>
          <Iframe src="https://www.google.com/maps/d/u/0/embed?mid=1stv2s4gZ0HnC7rfZz2FqxZxtB9fh0DE&ehbc=2E312F"></Iframe>
        </MapBlock>
      </Block>
    </DeliveryBlock>
  );
};

export default Delivery;

// Доставка:

// #Зелена зона
// Вартість замовлення від 350грн - безкоштовна дост
// До 350грн вартість дост - 60грн

// #Жовта зона
// Від 500грн - безкошт дост
// До 500грн - 80грн

// #Червона зона
// Від 700грн - безкошт дост
// До 700грн - 100грн

// Також молива доставка за межі червоної зони.
// З оператором можна узгодити деталі, а також час доставки
