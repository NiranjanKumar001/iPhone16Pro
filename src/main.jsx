import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Store from './components/pages/Store.jsx'

import Mac from './components/pages/Mac.jsx'
import IPad from './components/pages/IPad.jsx'
import IPhone from './components/pages/IPhone.jsx'
import Watch from './components/pages/Watch.jsx'
import AirPods from './components/pages/AirPods.jsx'
import TvHome from './components/pages/TVHome.jsx'
import Entertainment from './components/pages/Entertainment.jsx'
import Accessories from './components/pages/Accessories.jsx'
import Support from './components/pages/Support.jsx'

import PrivacyPolicy from './components/pages/PrivacyPolicy.jsx'
import TermsofUse from './components/pages/TermsofUse.jsx'
import SalesPolicy from './components/pages/SalesPolicy.jsx'
import Legal from './components/pages/Legal.jsx'
import SiteMap from './components/pages/SiteMap.jsx'

import Switch from './components/pages/Switch.jsx'
import Specs from './components/pages/Specs.jsx'
import Iphone16Pro from './components/pages/Iphone16Pro.jsx'

import './index.css'

//...
import * as Sentry from "@sentry/react";

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

Sentry.init({
  dsn: "https://c47b8b38e776293fbd9c764fa8f30398@o4507162996047872.ingest.us.sentry.io/4507163000766464",
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.metrics.metricsAggregatorIntegration(),
    Sentry.reactRouterV6BrowserTracingIntegration({
      useEffect: React.useEffect
    }),
    Sentry.replayIntegration(),
  ],
  // Performance Monitoring
  tracesSampleRate: 1.0, //  Capture 100% of the transactions
  // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
  tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },{
    path: "/Store",
    element: <Store />
  },,{
    path: "/Mac",
    element: <Mac />
  },{
    path: "/IPad",
    element: <IPad />
  }, {
    path: "/IPhone",
    element: <IPhone />
  }, {
    path: "/Watch",
    element: <Watch />
  }, {
    path: "/AirPods",
    element: <AirPods />
  }, {
    path: "/Tv&Home",
    element: <TvHome />
  }, {
    path: "/Entertainment",
    element: <Entertainment />
  }, {
    path: "/Accessories",
    element: <Accessories />
  }, {
    path: "/Support",
    element: <Support />
  },{
    path: "/Privacy Policy",
    element: <PrivacyPolicy />
  },{
    path: "/Terms of Use",
    element: <TermsofUse />
  },{
    path: "/Sales Policy",
    element: <SalesPolicy />
  },{
    path: "/Legal",
    element: <Legal />
  },{
    path: "/Site Map",
    element: <SiteMap />
  },{
    path: "/Switch",
    element: <Switch />
  },{
    path: "/Specs",
    element: <Specs />
  },{
    path: "/Iphone16Pro",
    element: <Iphone16Pro />
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
