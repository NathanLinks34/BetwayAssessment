import React, { useState } from "react";
import BetwayLogo from "./Logo/logo.PNG";
import Modal from "./Modal";
const Navbar = () => {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  return (
    <nav
      style={{
        backgroundColor: "black",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: 50,
        padding: "0 20px",
      }}
    >
      <img src={BetwayLogo} alt="Betway" style={{ height: "20px" }} />{" "}
      <div>
        <button
          style={{
            backgroundColor: "#00FF00",
            color: "white",
            fontSize: 16,
            padding: "10px 30px",
            marginRight: "10px",
            fontWeight: "bold",
          }}
          onClick={handleOpenModal}
        >
          Login
        </button>
        <button
          style={{
            backgroundColor: "white",
            color: "#008000",
            fontSize: 16,
            padding: "10px 30px",
            fontWeight: "bold",
          }}
        >
          Sign up
        </button>
      </div>
      {showModal && <Modal handleCloseModal={handleCloseModal} />}
    </nav>
  );
};

export default Navbar;
