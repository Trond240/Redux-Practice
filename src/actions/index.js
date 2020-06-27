export const addToDo = todo => ({
    type: 'ADD_TODO',
    todo
});

export const toggleToDo = (id) => ({
    type: 'TOGGLE_TODO',
    id
});


if (this.state.name === '' || this.state.email === ''|| this.state.reason === '') {
    e.preventDefault();
    this.setState({error: 'Please Fill In All Inputs'})
  } else {
    this.props.setUserInfo({
      name: this.state.name,
      email: this.state.email,
      reason: this.state.reason
    });
