import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as authOperations from '../redux/auth/auth-operations';
import Button from '@material-ui/core/Button';

const styles = {
  form: {
    width: 320,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
};

class RegisterView extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onRegister(this.state);
    this.setState({ name: '', email: '', password: '' });
  };

  isValid = () => {
    const { name, email, password } = this.state;
    if (name === '' || email === '' || password === '') {
      return false;
    }
    return true;
  };

  render() {
    const { name, email, password } = this.state;

  return (
    <div>
      <p className={styles.title}>Register your new account</p>
      <form onSubmit={this.handleSubmit} className={styles.form} autoComplete="off">
        <label className={styles.label}>
          <p className={styles.text}>
            Username
          </p>
          <input
            className={styles.input}
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
        </label>

        <label className={styles.label}>
          <p className={styles.text}>
            Email address
          </p>
          <input
            className={styles.input}
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
        </label>

        <label className={styles.label}>
          <p className={styles.text}>
            Password
          </p>
          <input
            className={styles.input}
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
        </label>
        <br/>
        <br/>

        <Button type="submit" variant="contained">
          Create account
        </Button>
      </form>
    </div>
  );
}
}

const mapDispatchToProps = {
  onRegister: authOperations.register,
};

export default connect(null, mapDispatchToProps)(RegisterView);
