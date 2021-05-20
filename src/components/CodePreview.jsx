import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default ({ templateLiteral }) => {
  return (
    <SyntaxHighlighter language="htmlbars" style={atomOneLight}>
      {templateLiteral}
    </SyntaxHighlighter>
  );
};
