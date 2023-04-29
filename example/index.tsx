import * as React from 'react';
import 'react-app-polyfill/ie11';
import * as ReactDOM from 'react-dom';

import { Input } from '../.';

const App = () => {
  return (
    <div>
      <Input />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
