import { DataContext } from "../context/DataProvider";
import { useContext } from "react";

const Output = () => {
  const { html, css, javascript } = useContext(DataContext);

  const srcCode = `
        <html>
        <head>
          <style>${css}</style>
        </head>
        <body>
          ${html}
          <script>${javascript}</script>
        </body>
      </html>
  `;

  return (
    <div className="h-[47vh]">
      <iframe
        srcDoc={srcCode}
        title="output"
        sandbox="allow-scripts"
        frameBorder="0"
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default Output;
