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
  Info,
} from "./Delivery.styles";
const Delivery = () => {
  return (
    <DeliveryBlock id="delivery">
      <Block>
        <InfoBlock>
          <Header>Час доставки:</Header>
          <Line>
            <GreenBlock></GreenBlock>
            <Info>40 - 59хв</Info>
          </Line>
          <Line>
            <YellowBlock></YellowBlock>
            <Info>1год - 1год 30хв</Info>
          </Line>
          <Line>Час доставки за межі зон озвучує оператор</Line>
          <Line>
            Інформацію що-до доставки за межі зон уточнюйте в оператора
          </Line>
        </InfoBlock>
        <MapBlock>
          <iframe
            src="https://www.google.com/maps/d/u/0/embed?mid=1stv2s4gZ0HnC7rfZz2FqxZxtB9fh0DE&ehbc=2E312F"
            width="100%"
            height="100%"></iframe>
        </MapBlock>
      </Block>
    </DeliveryBlock>
  );
};

export default Delivery;
