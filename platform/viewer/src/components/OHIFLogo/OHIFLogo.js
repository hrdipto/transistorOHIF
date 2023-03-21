import './OHIFLogo.css';

import { Icon } from '@ohif/ui';
import React from 'react';

function OHIFLogo() {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className="header-brand"
      href="/">
      <img src="/assets/logo.png" className='logo' />
      <p className='logo-text'>Transistor WebViewer</p>
    </a>
  );
}

export default OHIFLogo;
