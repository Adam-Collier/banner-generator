import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import axios from 'axios';
import {SingleForm, SplitForm, SVGForm} from "./components/Form"
import VisualPreview from './components/VisualPreview';

import singleBanner from './templates/single-banner';
import splitBanner from './templates/split-banner';
import svgBanner from './templates/svg-banner';

import './styles.css';

export default function App() {
  const [state, setState] = useState({
    bannerType: 'single',
    desktopImage: '',
    mobileImage: '',
    url1: '',
    url2: '',
    terms: '',
    title: '',
    subtitle: '',
    svg: '',
    cta1: '',
    cta2: '',
  });

  let endpoint = 'https://jsonstorage.net/api/items/';

  let getSavedState = async (id) => {
    try {
      let response = await axios(
        `${endpoint}${id}`
      );
      setState(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  let updateUrl = (name, value) => {
    const currentUrl = new URL(window.location.href);
    currentUrl.searchParams.set(name, value);
    window.history.pushState({}, '', currentUrl);
  };

  // only run once on initial load
  useEffect(() => {
    // get the current params from the url
    let searchParams = new URLSearchParams(window.location.search);
    console.log(searchParams);

    // if there is no postId assume its a new project and create a new id
    if (!searchParams.get('postId')) {
      updateUrl('postId', nanoid());
    }

    // if a getid exists grab the saved state and update the state
    if (searchParams.get('getId')) {
      getSavedState(searchParams.get('getId'), setState);
    }
  }, []);

  useEffect(() => {
    const timeOutId = setTimeout(() => saveChange(), 500);
    return () => clearTimeout(timeOutId);
  }, [state])

  let saveChange = async() => {
    try {
      // store the search params
      let searchParams = new URLSearchParams(window.location.search);

      // create the full url
      let postUrl = `${endpoint}${searchParams.get('postId')}`;

      // make the request, put if we have a getId, post if we dont
      let response = await axios({
        method: searchParams.get('getId') ? 'put' : 'post',
        url: postUrl,
        data: state,
        headers: {
          'content-type': 'application/json; charset=utf-8',
        },
      });

      console.log(response);
      // update the url with the getId returned in the response
      // this shouldnt change when a put requests has been made
      let jsonPath = response.data.uri;
      let jsonId = jsonPath.substring(jsonPath.lastIndexOf('/') + 1);
      updateUrl('getId', jsonId);
    } catch (error) {
      console.log(error);
    }
  }

  let handleChange = async (e) => {
      let { value, name } = e.target;

      setState({
        ...state,
        [name]: value,
      });
  };

  let TEMPLATE = {
    single: singleBanner(state),
    split: splitBanner(state),
    svg: svgBanner(state),
  };

  let INPUTCOMPONENT = {
    single: SingleForm,
    split: SplitForm,
    svg: SVGForm,
  };

  let handleSelect = (e) => {
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
