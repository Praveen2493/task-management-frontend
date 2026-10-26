import { useContext } from "react";
import { ThemeContext } from "../context/contexts";

const useTheme = () => {
  return useContext(ThemeContext);
};

export default useTheme;