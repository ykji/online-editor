import { Dispatch, SetStateAction, createContext, useState } from "react";

interface Props {
  children: JSX.Element;
}

interface CodeData {
  css: string;
  html: string;
  javascript: string;
  setCss: Dispatch<SetStateAction<string>>;
  setHtml: Dispatch<SetStateAction<string>>;
  setJavascript: Dispatch<SetStateAction<string>>;
}

export const DataContext = createContext<CodeData>({
  css: "",
  html: "",
  javascript: "",
  setCss: () => {},
  setHtml: () => {},
  setJavascript: () => {},
});

const DataProvider = (props: Props) => {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [javascript, setJavascript] = useState("");

  return (
    <DataContext.Provider
      value={{ html, css, javascript, setCss, setHtml, setJavascript }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export default DataProvider;
