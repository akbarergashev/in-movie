import * as React from 'react';
import {grey50} from 'material-ui/styles/colors';
import AppBar from 'material-ui/AppBar';
import Container from '../components/ContentContainer';
import { Link } from 'react-router-dom';


const Bar = () => {
  return (
    <AppBar
      showMenuIconButton={false}
      children={
        <div style={styles.wrapper}>
          <Container>
            <Link to="/">
              <div style={styles.logo}>InMovie - Библиотека фильмов</div>
            </Link>
          </Container>
        </div>
      }
      titleStyle={{display: 'none'}}
    />
  );
}

const styles = {
  wrapper: {
    width: '100%', 
    padding: '20px 0'
  },
  logo: {
    color: grey50,
    fontSize: 23,
  }
}

export default Bar;
      