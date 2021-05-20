import React from "react";
import { useEffect, useState } from "react";
import CodePreview from "./components/CodePreview";
import SingleBanner from "./components/SingleBanner";
import SplitBanner from "./components/SplitBanner";
import SVGBanner from "./components/SVGBanner";
import VisualPreview from "./components/VisualPreview";

import singleBanner from "./templates/single-banner";
import splitBanner from "./templates/split-banner";
import svgBanner from "./templates/svg-banner";

import "./styles.css";

export default function App() {
  const [state, setState] = useState({
    bannerType: "single",
    desktopImage: "",
    mobileImage: "",
    url: "",
    url2: "",
    terms: "",
    title: "",
    subtitle: "",
    svg: "",
    cta1: "",
    cta2: ""
  });

  let updateUrl = (name, value) => {
    const currentUrl = new URL(window.location.href);
    currentUrl.searchParams.set(name, value);
    window.history.pushState({}, "", currentUrl);
  };

  useEffect(() => {
    let searchParams = new URLSearchParams(window.location.search);
    let defaultState = state;

    Object.keys(defaultState).forEach((prop) => {
      let param = searchParams.get(prop);
      if (param) {
        defaultState = {
          ...defaultState,
          [prop]: param
        };
      }
    });

    updateUrl("bannerType", defaultState.bannerType);

    setState(defaultState);
  }, []);

  function handleChange(e) {
    let { value, name } = e.target;
    let valuesToTrim = ["desktopImage", "mobileImage", "url1", "url2"];

    if (valuesToTrim.includes(name)) {
      value = value.trim();
    }

    updateUrl(name, value);

    setState({
      ...state,
      [name]: value
    });
  }

  let TEMPLATE = {
    single: singleBanner(state),
    split: splitBanner(state),
    svg: svgBanner(state)
  };

  let INPUTCOMPONENT = {
    single: SingleBanner,
    split: SplitBanner,
    svg: SVGBanner
  };

  let handleSelect = (e) => {
    updateUrl("bannerType", e.target.value);
    setState({ ...state, bannerType: e.target.value });
  };

  let BannerInput = INPUTCOMPONENT[state.bannerType];

  return (
    <main>
      <div>
        <select
          id="bannerType"
          onChange={handleSelect}
          value={state.bannerType}
        >
          <option value="single">Single</option>
          <option value="split">Split</option>
          <option value="svg">SVG</option>
        </select>

        <BannerInput state={state} handleChange={handleChange} />

        <h4>Some things to note:</h4>
        <ul>
          <li>DE links should start with /de/</li>
          <li>ES links should start with /es/</li>
          <li>PL links should start with /pl/</li>
          <li>IE links should start with /ie/</li>
        </ul>
      </div>
      <VisualPreview templateLiteral={TEMPLATE[state.bannerType]} />
      {/* <CodePreview templateLiteral={TEMPLATE[state.bannerType]} /> */}
    </main>
  );
}
