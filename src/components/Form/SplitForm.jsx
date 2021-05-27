import React from 'react';
import CopyButton from '../CopyButton';
import splitBanner from '../../templates/split-banner';

export default ({ state, handleChange }) => {
  return (
    <div>
      <h2>Split Banner</h2>
      <label>Desktop Image</label>
      <input
        type="text"
        name="desktopImage"
        value={state.desktopImage}
        onChange={handleChange}
      />
      {state.desktopImage && <img src={state.desktopImage} alt="desktop" />}
      <label>Mobile Image</label>
      <input
        type="text"
        name="mobileImage"
        value={state.mobileImage}
        onChange={handleChange}
      />
      {state.mobileImage && <img src={state.mobileImage} alt="mobile" />}
      <label>Url 1</label>
      <input
        type="text"
        name="url1"
        value={state.url1}
        onChange={handleChange}
      />
      <label>Url 2</label>
      <input
        type="text"
        name="url2"
        value={state.url2}
        onChange={handleChange}
      />

      <CopyButton content={splitBanner({ ...state })} />
    </div>
  );
};
