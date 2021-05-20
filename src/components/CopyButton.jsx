import React, { useState } from 'react';

export default ({ content }) => {
  const [copied, setCopied] = useState(false);

  const delay = (duration) =>
    new Promise((resolve) => setTimeout(resolve, duration));

  let copyToClipboard = async () => {
    const el = document.createElement(`textarea`);
    el.value = content;
    el.setAttribute(`readonly`, ``);
    el.style.position = `absolute`;
    el.style.left = `-9999px`;
    document.body.appendChild(el);
    el.select();
    document.execCommand(`copy`);
    document.body.removeChild(el);
    // This is just personal preference.
    // I prefer to not show the whole text area selected.
    setCopied(true);
    await delay(2000);
    setCopied(false);
  };

  return (
    <button onClick={copyToClipboard}>
      {copied ? 'Copied!' : 'Copy Code to clipboard'}
    </button>
  );
};
