import React, { useState } from 'react';

function Image(props) {
  const [error, setError] = useState(null);
  // return <img {...props} />;
  const handleError = err => {
    setError(err);
  };

  return error !== null ? (
    <div>{JSON.stringify(error)}</div>
  ) : (
    <img src={props.src} onError={handleError} alt="" />
  );
}

export default Image;
