import React from "react";

const Address = () => {
  return (
    <>
      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-envelope-open position-absolute"></i>
        <span className="d-block">mail me</span>{" "}
        <a href="mailto:contato@gabrielcampos.com.br">contato@gabrielcampos.com.br</a>
      </p>
      {/* End .custom-span-contact */}

      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-phone-square position-absolute"></i>
        <span className="d-block">call me</span>{" "}
        <a href="Tel: ++55 84 98854-7196">+55 84 98854-7196</a>
      </p>
      {/* End .custom-span-contact */}
    </>
  );
};

export default Address;
