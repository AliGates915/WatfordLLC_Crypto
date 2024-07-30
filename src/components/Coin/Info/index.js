import React, { useState } from "react";
import "./styles.css";

function Info({ title, desc }) {
  const shortDesc = (
    <>
      {desc.slice(0, 300)}
      <br />
      <p style={{ color: 'var(--grey)', cursor: 'pointer' }}>Read More...</p>
    </>
  );

  const longDesc = (
    <>
      {desc}
      <br />
      <p style={{ color: 'var(--grey)', cursor: 'pointer' }}>Read Less...</p>
    </>
  );

  const [toggle, setToggle] = useState(false);

  return (
    <div className="grey-wrapper info-component">
      <h1>{title}</h1>
      <p
        className="info-p"
        onClick={() => setToggle(!toggle)}
      >
        {desc.length >= 300 ? (toggle ? longDesc : shortDesc) : desc}
      </p>
    </div>
  );
}

export default Info;
