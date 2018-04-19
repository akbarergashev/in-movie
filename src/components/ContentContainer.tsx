import * as React from 'react';

interface IProps {
  style?: any,
  children?: any
}
export const ContentContainer = (props: IProps) => {
  return (
    <div style={{...containerStyle, ...props.style}}>
      {props.children}
    </div>
  );
}

const containerStyle = {
  maxWidth: 960,
  margin: '0 auto' 
}

export default ContentContainer;