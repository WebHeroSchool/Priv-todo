import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class InputItem extends React.Component {
  state = {
    inputValue: ''
  };

  onButtonClick = () => {
    this.setState({ inputValue: '' });

    if (!this.state.inputValue) {
      alert('Укажите задание!')
    } else{
      this.props.onClickAdd(this.state.inputValue)
    }
  };

  onChangeToUpperCase = event => {
    this.setState({ inputValue: event.target.value.toUpperсase() })
  }

  render() { 
      return <div>
        <TextField
          id='standard-basic'
          label='Добавить задание'
          color='primary'
          margin="dense"
          fullWidth
          value={this.state.inputValue}
          onChange={event => this.setState({ inputValue: event.target.value })}
          toUpperCase={this.onChangeToUpperCase}
        />

        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={this.onButtonClick}
        >
          добавить
        </Button>
      </div>
  }
};

export default InputItem;
