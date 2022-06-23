import React, { FunctionComponent } from 'react';
import { render } from 'react-dom';
import UrlHandler from './components/urlHandler';

const Root: FunctionComponent = () => {
  return (
    <div style={{ width: 300 }}>
      <UrlHandler />
    </div>
  );
};

render(<Root />, document.getElementById('root'));
