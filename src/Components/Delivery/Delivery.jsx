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
            <Header>Зони доставки:</Header>
            <Line>
              <GreenBlock></GreenBlock>
              <Info>
                Від 450грн - <b>безкоштовна доставка</b>. <br /> До 450грн -
                60грн.
              </Info>
            </Line>
            <Line>
              <YellowBlock></YellowBlock>
              <Info>
                Від 600грн - <b>безкоштовна доставка</b>. <br />
                До 600грн - 80грн.
              </Info>
            </Line>
            <Line>
              <RedBlock></RedBlock>
              <Info>
                Від 750грн - <b>безкоштовна доставка</b>. <br /> До 750грн -
                100грн
              </Info>
            </Line>
            <Line>
              Також можлива доставка за межі червоної зони. Деталі уточнюйте у
              оператора.
            </Line>
            <Line></Line>
          </InfoBlock>
          <MapBlock>
            <Iframe
                src="https://www.google.com/maps/d/embed?mid=1nfbGMQRsiJ_u540DNb56mfzaiuYZ3nw&ehbc=2E312F"
                title="map"
            ></Iframe>
          </MapBlock>
        </Block>
      </DeliveryBlock>
  );
};

export default Delivery;