import React, { FunctionComponent } from 'react';
import { render } from 'react-dom';



const Root: FunctionComponent = () => {


  return (
    <div>
      Hello world
    </div>
  );
};

render(<Root />, document.getElementById('root'));
