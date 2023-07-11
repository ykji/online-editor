import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/css/css";
import "codemirror";
import "codemirror/mode/javascript/javascript";
import { Dispatch, SetStateAction } from "react";
import { Controlled as ControlledEditor } from "react-codemirror2";

interface Props {
  icon: string;
  value: string;
  language: string;
  editorTitle: string;
  iconBgColor: string;
  updateCode: Dispatch<SetStateAction<string>>;
}

const Editor = (props: Props) => {
  const { icon, iconBgColor, language, value, editorTitle, updateCode } = props;

  const handleChange = (editor: any, data: any, value: string) => {
    updateCode(value);
  };

  return (
    <div
      className={`editor min-w-[100px] flex flex-col mr-3 border border-[#34363e] border-t-0`}
    >
      <div className="editor-header flex justify-between items-center">
        <div className="editor-title flex bg-[#1d1e22] px-4 py-1 gap-2 items-center border-t-[#34363e] border-t-2">
          <p
            className={`px-1 text-xs ${iconBgColor} rounded-sm font-bold`}
          >
            {icon}
          </p>
          <p className="text-slate-300 font-bold">{editorTitle}</p>
        </div>
        {/* <div className="editor-actions flex text-white mr-2 gap-1">
          <div className="icon-button px-1 bg-gray-500 rounded-md">
            <CiSettings onClick={() => setCollapsed((prev) => !prev)} />
          </div>
          <div className="px-1 bg-gray-500 rounded-md">
            <AiOutlineDown />
          </div>
        </div> */}
      </div>
      <ControlledEditor
        value={value}
        onBeforeChange={handleChange}
        options={{
          mode: language,
          lineNumbers: true,
          theme: "material",
          lineWrapping: true,
        }}
      />
    </div>
  );
};

export default Editor;
