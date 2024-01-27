import React from "react";
import DOMPurify from "dompurify";

const Message = ({ msg, bgColor }) => {
  let styles = {
    padding: "1rem",
    marginBottom: "1rem",
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
    backgroundColor: bgColor,
  };

  const sanitizedMsg = DOMPurify.sanitize(msg);
  return (
    <div style={styles}>
      {/* <p>{msg}</p> */}
      <p dangerouslySetInnerHTML={{ __html: sanitizedMsg }} />
    </div>
  );
};

export default Message;
