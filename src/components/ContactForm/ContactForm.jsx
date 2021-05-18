import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as phonebookOperations from '../../redux/phonebook/phonebook-operations';
import * as phonebookSelectors from '../../redux/phonebook/phonebook-selectors';
import styles from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.props.contacts.some(name => name.name === this.state.name))
      return alert(`${this.state.name} is already in your contacts`);
    this.props.onSubmit(this.state);

    this.reset();
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };


  render() {

    const { name, number } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className={styles.form}>
        <label className={styles.formItem}>
          Name
          <input
            type="text"
            name="name"
            value={name}
            placeholder="Сontact name"
            onChange={this.handleChange}
            className={styles.input}
          />
        </label>

        <label className={styles.formItem}>
          Number
          <input
            type="tel"
            name="number"
            value={number}
            placeholder="Сontact number"
            onChange={this.handleChange}
            className={styles.input}
          />
        </label>
        <button type="submit" className={styles.button}>
          Add contact
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  contacts: phonebookSelectors.getVisibleContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onSubmit: text => dispatch(phonebookOperations.addContact(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);