import React from "react";

const educationContent = [
  {
    year: "2019",
    degree: "GOSTACK BOOTCAMP",
    institute: "Rocketseat",
    details: `Learned the Javascript full stack (React, React Native and Node)`,
  },
  {
    year: "2018 - Present",
    degree: "BACHELOR DEGREE ",
    institute: "FEDERAL UNIVERSITY OF RIO GRANDE DO NORTE",
    details: `Software engineering degree`,
  },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
