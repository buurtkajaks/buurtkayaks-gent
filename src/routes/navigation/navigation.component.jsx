import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as KayakLogo } from '../../assets/kayak-logo.svg';
import { UserContext } from '../../contexts/user.context';

import { signOutUser } from '../../utils/firebase/firebase.utils';

import './navigation.styles.scss';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <KayakLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/products">
            KAYAKS
          </Link>
          <Link className="nav-link" to="/checkout">
            CHECKOUT
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
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
