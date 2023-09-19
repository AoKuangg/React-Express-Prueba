import React, { useState, useEffect } from "react";

export default function Header() {
  const [men, setMe] = useState("");
  const send = async () => {
    let data = await (await fetch("http://127.16.16.15:5143/user")).json();
    setMe(data.message);
  };
  useEffect(() => {
    send();
  }, []);

  return <div>{JSON.stringify(men)}</div>;
}
