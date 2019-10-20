import React from 'react';

const Component1 = props => (
    <div>
      Component1 {props.match.params.id}
      {console.log(props)}
    </div>
);

export default Component1;
