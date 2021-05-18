import React from 'react';
import { connect } from 'react-redux';
import styles from './UserMenu.module.css';
import defaultAvatar from './avatar.png';
import { getUserName } from '../../redux/auth/auth-selectors';
import Button from '@material-ui/core/Button';
import { logOut } from '../../redux/auth/auth-operations';


const UserMenu = ({ avatar, name, onLogOut }) => {

  return (
    <div>
      <img src={avatar} alt="" width="50" />
      <span className={styles.name}>Welcome to your phonebook {name}!</span>
      <Button
        type="submit" 
        onClick={onLogOut} 
        variant="outlined"
        className={styles.button}
        >
        Log out
      </Button>
    </div>
  );
}

const mapStateToProps = state => ({
  name: getUserName(state),
  avatar: defaultAvatar,
});

const mapDispatchToProps = {
  onLogOut: logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);