import React, { useState } from "react";
import styled from "styled-components";

const WeekSaleModal = ({ showModal, setShowModal }) => {
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleModalClick = (e) => {
    if (e.target === e.currentTarget) {
      toggleModal();
    }
  };

  return (
    <>
      {showModal && (
        <Modal onClick={handleModalClick}>
          <ModalContent />
        </Modal>
      )}
    </>
  );
};

const Modal = styled.div`
  position: fixed;
  left: 20vw;
  top: 15px;
  width: 350px;
  height: 400px;
  background-color: rgba(255, 255, 255, 0.8);
  z-index: 10;
  transition: top 0.5s;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    left: 50%;
    transform: translateX(-50%);
  }
`;

const ModalContent = styled.div`
  width: 90%;
  height: 90%;
  background-color: white;
`;
export default WeekSaleModal;
