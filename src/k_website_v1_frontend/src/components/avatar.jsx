import React from "react";

export const Avatar = ({ url }) => {

  return (
    <div
        style={{
            borderRadius: "140px",
            background: "url("+url+"), lightgray -112.092px -1.658px / 269.224% 193.289% no-repeat, #D9D9D9"
        }}
    >
    </div>
  );
};