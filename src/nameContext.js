import React from 'react';

const nameContext = React.createContext({
  name1: null,
  updateName1: ()=>{},
  name: null,
  updateName: ()=>{}
})

export default nameContext;
