import React from 'react';

const nameContext = React.createContext({
  name: null,
  updateName: ()=>{}
})

export default nameContext;
