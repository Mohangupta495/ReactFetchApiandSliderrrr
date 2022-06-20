import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const Provide = createContext();

const Context = ({ children }) => {
  return (
    <>
      <Provide.Provider>{children}</Provide.Provider>
    </>
  );
};
export default Context;
export const Provid = () => {
  return useContext(Provide);
};
