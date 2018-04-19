import CircularProgress from 'material-ui/CircularProgress';
import * as React from 'react';


export const Spinner = () => {
  return (
    <div style={styles.wrapper}>
      <CircularProgress/>
    </div>
  );
};

const styles = {
  wrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    marginTop: 50
  }
}

export default Spinner;