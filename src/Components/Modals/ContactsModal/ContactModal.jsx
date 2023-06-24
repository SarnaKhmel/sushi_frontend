import React, { useEffect, useRef } from "react";
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
            <Header>Ресторани:</Header>
            <Block>
              <Text>м.Львів, вул. Сихівська, 19</Text>
              <Text>+38 (098) 952-03-01</Text>
            </Block>
            <Block>
              <Text>
                Зимна Вода, <br />
                вул. М.Заньковецької. 8б
              </Text>
              <Text>+38 (098) 952-03-01</Text>
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
