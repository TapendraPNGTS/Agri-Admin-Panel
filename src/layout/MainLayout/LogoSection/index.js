import { Link as RouterLink } from 'react-router-dom';
// material-ui
import { Link } from '@mui/material';
import Logo from '../../../assets/images/MY_AGRI_INPUT2.svg';
// project imports

// ==============================|| MAIN LOGO ||============================== //

const LogoSection = () => (
    <center>
        <Link to="dashboard">
            <img src={Logo} alt="image" />
        </Link>
    </center>
);

export default LogoSection;
