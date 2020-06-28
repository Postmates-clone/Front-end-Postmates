import React from 'react';
import { DevApi } from './DevApi';

function DevComponent() {
  const getFeed = async () => {
    const { data } = await DevApi.getFeed();
    console.log(data);
  };
  const getItem = async () => {
    const { data } = await DevApi.getItem();
    console.log(data);
  };
  return (
    <div className="dev-component">
      <button type="button" onClick={() => getFeed()}>
        get feed
      </button>
      <button type="button" onClick={() => getItem()}>
        get item
      </button>
    </div>
  );
}

export default DevComponent;
