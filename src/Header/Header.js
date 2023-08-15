import classes from './Header.module.css';
import NUSTLogo from '../NUST-Logo.png';
import PAKCyPtlLogo from '../PAKCyPtl-Logo.jpeg';
import MCSLogo from '../MCS-Logo.png';
import UserLogo from '../user.png';

const Header = () => {
    return (
        <header className={classes.Header}>
            <img src={NUSTLogo} alt="NUST-Logo" />
            <div className={classes.Logo}>
                <img src={PAKCyPtlLogo} alt="PAKCyPtl-Logo" />
                <h1>PAKCyPtl</h1>
            </div>
            <img src={MCSLogo} alt="NUST-Logo" />
            <div className={classes.User}>
                <img src={UserLogo} alt='User' />
                <h3>Sajjad Ali</h3>
            </div>
        </header>
    );
};

export default Header