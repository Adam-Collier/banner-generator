import React from 'react';
import CopyButton from '../CopyButton';
import svgBanner from '../../templates/svg-banner';

export default ({ state, handleChange }) => {
  return (
    <div>
      <h2>SVG Banner</h2>
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
      <label>Title</label>
      <input
        type="text"
        name="title"
        value={state.title}
        onChange={handleChange}
      />
      <label>Subtitle</label>
      <input
        type="text"
        name="subtitle"
        value={state.subtitle}
        onChange={handleChange}
      />
      <label>SVG</label>
      <input type="text" name="svg" value={state.svg} onChange={handleChange} />
      <label>Url</label>
      <input type="text" name="url1" value={state.url1} onChange={handleChange} />
      <label>Url 2</label>
      <input
        type="text"
        name="url2"
        value={state.url2}
        onChange={handleChange}
      />
      <label>CTA 1</label>
      <input
        type="text"
        name="cta1"
        value={state.cta1}
        onChange={handleChange}
      />
      <label>CTA 2</label>
      <input
        type="text"
        name="cta2"
        value={state.cta2}
        onChange={handleChange}
      />

      <CopyButton content={svgBanner({ ...state })} />
    </div>
  );
};
