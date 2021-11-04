import React from "react";

const experienceContent = [
  {
    year: "09/2019 - 11/2019",
    position: "React Developer - Intern",
    compnayName: "iFeira",
    details: `Web & Mobile development using React and React Native stack.`,
  },
  {
    year: "03/2020 - 06/2020",
    position: "React Developer - Intern",
    compnayName: "Federal University of Rio Grande do Norte",
    details: `Web & Backend development using React stack and Java Spring`,
  },
  {
    year: "06/2020 - 10/2021",
    position: "React Developer - Full Time",
    compnayName: "Cantoo",
    details: `Web & Mobile development using React / React Native / Next stack.`,
  },
  {
    year: "10/2021 - Present",
    position: "React Developer Pleno - Full Time",
    compnayName: "Boa Vista",
    details: `Web using React stack.`,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
