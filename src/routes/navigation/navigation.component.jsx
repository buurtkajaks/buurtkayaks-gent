import { Fragment } from 'react'
import { Outlet, Link } from "react-router-dom"

import { ReactComponent as KayakLogo } from '../../assets/kayak-logo.svg'

import './navigation.styles.scss'

const Navigation = () => {
    return(
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <KayakLogo className='logo'/>
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/kayaks'>
                        KAYAKS
                    </Link>
                    <Link className='nav-link' to='/sign-in'>
                        INLOGGEN
                    </Link>
                </div>
            </div>
            <Outlet/>
        </Fragment>
    )
  }

  export default Navigation