import React from 'react';

import CopyButton from '../components/CopyButton';

import singleBanner from '../templates/single-banner';

export default ({ state, handleChange }) => {
  return (
    <div>
      <h2>Single Banner</h2>
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
      <label>Url</label>
      <input
        type="text"
        name="url1"
        value={state.url1}
        onChange={handleChange}
      />
      <label>Terms</label>
      <input
        type="text"
        name="terms"
        value={state.terms}
        onChange={handleChange}
      />
      <CopyButton content={singleBanner({ ...state })} />
    </div>
  );
};
