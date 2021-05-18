import React from 'react';

const styles = {
  title: {
    marginTop: 100,
    fontWeight: 700,
    fontSize: 36,
  },
};

const HomeView = () => (
  <div>
    <h1 className={styles.title}> Welcome to Phonebook</h1>
  </div>
);

export default HomeView;