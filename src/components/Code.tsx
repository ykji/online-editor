import { useContext } from "react";

import Editor from "./Editor";
import { DataContext } from "../context/DataProvider";

const Code = () => {
  const { css, html, javascript, setCss, setHtml, setJavascript } =
    useContext(DataContext);

  return (
    <div className="grid grid-cols-3 p-3 pt-0 bg-[#060606] h-[45vh] border-y-[1px] border-y-[#34363e]">
      <Editor
        editorTitle="HTML"
        language="xml"
        icon="/"
        iconBgColor="bg-[#FF3C41]"
        value={html}
        updateCode={setHtml}
      />
      <Editor
        editorTitle="CSS"
        language="css"
        icon="*"
        iconBgColor="bg-[#0EBEFF]"
        value={css}
        updateCode={setCss}
      />
      <Editor
        editorTitle="Javascript"
        language="javascript"
        icon="()"
        iconBgColor="bg-[#FCD000]"
        value={javascript}
        updateCode={setJavascript}
      />
    </div>
  );
};

export default Code;
