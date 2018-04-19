import {grey50} from 'material-ui/styles/colors';
import SearchIcon from 'material-ui/svg-icons/action/search';
import TextField from 'material-ui/TextField';
import * as React from 'react';


interface IProps {
  style?: any
  onChange: (query: string) => void
}
class SearchBar extends React.Component <IProps, {}> {

  public render() {
    return (
      <div style={{...styles.wrapper, ...this.props.style}}>
        <SearchIcon style={styles.iconStyle} color={grey50}/>
        <TextField
          hintText="Поиск фильма по названию"
          onChange={this.handleChange}
          hintStyle={styles.errorStyle}
          inputStyle={{color: grey50}}
          underlineStyle={styles.underlineStyle}
        />
      </div>
    );
  }

  private handleChange = (event: any, newValue: string) => {
    this.props.onChange(newValue);
  };
}

const styles = {
  wrapper: {
    display: 'flex', 
    justifyContent: 'center',
    alignItems: 'center'
  },
  errorStyle: {
    color: grey50,
  },
  underlineStyle: {
    borderColor: grey50,
  },
  floatingLabelStyle: {
    color: grey50,
  },
  floatingLabelFocusStyle: {
    color: grey50,
  },
  iconStyle: {
    marginRight: 10,
    marginTop: 5
  }
};


export default SearchBar;