import React from 'react';

import { Consumer } from '../../container/App/Context';

const Statuses = () => (
  <Consumer>
    {({ viewType, selectedView }) => (
      <div>
        <p>viewType: {viewType}</p>
        <p>selectedView: {selectedView}</p>
      </div>
    )}
  </Consumer>
);

export default Statuses;
