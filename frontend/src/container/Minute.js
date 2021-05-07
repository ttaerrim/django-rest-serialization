import React from "react";

const Minute = ({ id, code, language }) => {
  return (
    <div className="minute">
      <p>{id}</p>
      <p>{code}</p>
      <p>{language}</p>
    </div>
  );
};

export default Minute;
