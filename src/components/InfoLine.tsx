import * as React from 'react';

interface IProps {
  style?: any;
  label: string;
  value: string;
}
const InfoLine = (props: IProps) => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.label}>{props.label}</div>
      <div style={styles.value}>{props.value}</div>
    </div>
  );
};

const styles= {
  wrapper: {
    paddingBottom: 15,
    width: '100%',
    display: 'flex'
  },
  label: {
    width: '200px',
    fontWeight: 'bold' as 'bold'
  },
  value: {
    display: 'flex'
  }
}

export default InfoLine;