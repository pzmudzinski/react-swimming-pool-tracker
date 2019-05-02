import React from 'react';
import MediaQuery from 'react-responsive';
const MOBILE_TRESHOLD = 640;

export const MobileOnly = (props) => {
  return <MediaQuery maxDeviceWidth={MOBILE_TRESHOLD} {...props}/>
};

export const DesktopOnly = (props) => {
  return <MediaQuery minDeviceWidth={MOBILE_TRESHOLD} {...props}/>
};