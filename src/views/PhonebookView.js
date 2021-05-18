import React, { Component } from 'react';
import ContactList from '../components/ContactList';
import ContactForm from '../components/ContactForm';
import Filter from '../components/Filter';
import { fetchContacts } from '../redux/phonebook/phonebook-operations';
import { getIsLoading } from '../redux/phonebook/phonebook-selectors';

import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

const styles = {
  marginLeft: 'auto',
  marginRight: 'auto',
  width: 600,
  
};

class PhonebookView extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }
  render() {
    const { isLoading } = this.props;

  return (
    <div className={styles.container}>
      {isLoading && <Loader type="ThreeDots" color="#495939" height={50} width={50} />}
      <h1 className={styles.title}>
        Phonebook
      </h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
  }
}

const mapStateToProps = state => ({
  isLoading: getIsLoading(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PhonebookView);
