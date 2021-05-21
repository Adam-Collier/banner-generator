import React, {useState, useEffect} from "react"
import styles from '../templates/default-styles';
export default ({ templateLiteral }) => {
  const [content, setContent] = useState(templateLiteral);

  useEffect(() => {
    const timeOutId = setTimeout(() => setContent(templateLiteral), 300);
    return () => clearTimeout(timeOutId);
  }, [templateLiteral])

  let defaultStyles = styles();

  let lazySizes = `<script src="https://cdnjs.cloudflare.com/ajax/libs/lazysizes/4.0.1/lazysizes.min.js" async=""></script>`;

  let concatenatedTemplate = `${defaultStyles} ${content} ${lazySizes}`;

  let html = `
<!DOCTYPE html>
<html lang="de">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0"
    />
    <link rel="stylesheet" type="text/css" href="https://static.missguided.co.uk/skin/frontend/mgresponsive/default/css/styles-f7d9bc93dd.css">
    <title>Vite App</title>
  </head>
  <body>
    <div class="container">
      ${concatenatedTemplate}
    </div>
  </body>
</html>
  `;

  return (
    <iframe
      height="100%"
      width="100%"
      title={'visual preview'}
      frameBorder="0"
      loading="lazy"
      srcDoc={html}
    />
  );
};
