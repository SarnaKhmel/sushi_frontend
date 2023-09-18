import React from "react";
import Layout from "../Layout/Layout";

import img1 from "../Images/about/sushi1.jpg";
import img2 from "../Images/about/sushi2.jpg";
// import img3 from "../Images/about/sushi3.jpg";
import img4 from "../Images/about/sushi4.jpg";
import img5 from "../Images/about/sushi5.jpg";

import styled from "styled-components";

import "./fonts/fonts.css";

const AboutPage = () => {
  return (
    <Layout>
      <LayoutBlock>
        <H21>
          "Суші з любов'ю"- любов у кожному шматочку! Саме так звучить девіз
          нашого закладу...унікальне поєднання інгредієнтів, авторські рецепти і
          смак, не схожий на будь-що інше...це все Ви знайдете у нас. Ми готуємо
          для Вас з любов'ю і душею, адже тільки так можна створити не лише
          ідеальний смак наших страв, але і отримати максимальне естетичне
          задоволення від продукту!
        </H21>
        <Img1 src={img1} alt="img1" loading="lazy" />
        <H2>
          Від часу відкриття ми завоювали багато прихильників і стараємось і
          надалі тішити Вас цікавими новинками, акційними пропозиціями і
          затишною атмосферою у нашому закладі.
        </H2>
        <Img src={img2} alt="img2" loading="lazy" />

        <H2>
          Наша кухня відкрита для Ваших поглядів, адже нам немає чого
          приховувати. Ми дбаємо про високу якість продуктів та чистоту робочого
          місця. Ви можете бути впевнені на 100% у свіжості наших страв, адже
          усі замовлення готуються "з-під ножа".
        </H2>
        <Img src={img4} alt="img3" loading="lazy" />

        <H2>
          У нас Ви можете знайти різноманітний вибір ролів, сетів, пивних дошок,
          а також смачне розливне пиво, сидр і коктейлі на будь-який смак!
        </H2>
        <Img src={img5} alt="img5" loading="lazy" />

        <H2>
          Ми надзвичайно любимо наших гостей і робимо усе для того, аби Ви
          полюбили і нас :)
        </H2>
      </LayoutBlock>
    </Layout>
  );
};

export const LayoutBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-family: RuteniaItalic;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

export const H21 = styled.h2`
  margin-top: 50px;
  color: white;
  text-align: left;
  font-size: 24px;
  width: 50vw;
  margin-bottom: 50px;
  ${"" /* font-family: "Trebuchet MS", sans-serif; */}
  font-family: RuteniaItalic;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  @media (max-width: 768px) {
    width: 90vw;
    font-size: 16px;
  }
`;

export const H2 = styled.h2`
  margin-top: 50px;
  color: white;
  text-align: left;
  font-size: 24px;

  font-family: RuteniaItalic;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  width: 50vw;
  margin-bottom: 50px;

  @media (max-width: 768px) {
    width: 90vw;
    font-size: 16px;
  }
`;

export const Img1 = styled.img`
  width: 50vw;
  height: auto;

  display: block;
`;

export const Img = styled.img`
  width: 50vw;
  height: auto;
  display: block;
`;

// Media query for mobile version
const media = {
  mobile: "@media (max-width: 768px)",
};

export const ResponsiveImg = styled.img`
  width: 30%;
  height: auto;
  display: block;
  margin: 0 auto;

  ${media.mobile} {
    width: 100%;
  }
`;

export default AboutPage;
