import React from "react";
import {
  ContactModalBlock,
  Diamond,
  ContactModalBody,
  Header,
  Block,
  Text,
  CloseBlock,
} from "./ContactModal.styles";
import { AiOutlineClose } from "react-icons/ai";

import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  white-space: nowrap;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const ContactModal = ({ isOpen, onClose }) => {
  console.log(isOpen);
  return (
    <>
      <ContactModalBlock>
        <Diamond>_</Diamond>

        <ContactModalBody>
          <CloseBlock onClick={onClose}>
            <AiOutlineClose size={20} />
          </CloseBlock>

          <>
            <Header>Суші-бар:</Header>
            <Block>
              <Text>
                <StyledLink to="https://www.google.com/maps/d/edit?mid=1nfbGMQRsiJ_u540DNb56mfzaiuYZ3nw">
                  м.Львів, <br /> вул.Сихівська,19
                </StyledLink>
              </Text>
              <Text>
                <a href={`tel:+38 (098) 952-03-01`}>+38 098 952-03-01</a>
              </Text>
            </Block>
            <Header>Доставка та самовивіз:</Header>
            <Block>
              <Text>
                <StyledLink to="https://www.google.com/maps/d/edit?mid=1nfbGMQRsiJ_u540DNb56mfzaiuYZ3nw">
                  с. Рудно, <br />
                  вул. Шептицького 1
                </StyledLink>
              </Text>
              <Text>
                <a href={`tel:+38 (098) 952-03-01`}>+38 098 952-03-01</a>
              </Text>
            </Block>
            <Header>Скарги та пропозиції:</Header>
            <Block>
              <Text>sushizlyubovyu@gmail.com</Text>
            </Block>
          </>
        </ContactModalBody>
      </ContactModalBlock>
    </>
  );
};

export default ContactModal;
