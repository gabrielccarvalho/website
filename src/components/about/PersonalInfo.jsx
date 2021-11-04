import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Gabriel" },
  { meta: "last name", metaInfo: "Campos" },
  { meta: "Age", metaInfo: "20 Years" },
  { meta: "Nationality", metaInfo: "Brazilian" },
  { meta: "Freelance", metaInfo: "Available" },
  { meta: "Address", metaInfo: "Brazil" },
  { meta: "phone", metaInfo: "+55 (84) 98854-7196" },
  { meta: "Email", metaInfo: "contato@gabrielcampos.com.br" },
  { meta: "Discord", metaInfo: "campos#0001" },
  { meta: "langages", metaInfo: "English, Portuguese" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
