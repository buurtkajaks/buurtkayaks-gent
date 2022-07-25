import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as KayakLogo } from '../../assets/kayak-logo.svg';
import { UserContext } from '../../contexts/user.context';

import { signOutUser } from '../../utils/firebase/firebase.utils';

import './navigation.styles.scss';

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
  };

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <KayakLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/kayaks">
            KAYAKS
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutHandler}>
              LOG UIT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              LOG IN
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
