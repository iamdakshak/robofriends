import React from 'react'

const Scroll = (props) => {
  return(
    <div style={{overflowY: 'auto', height: '800px', border: '1px sky-blue'}}>
      { props.children }
    </div>)
}

export default Scroll;
