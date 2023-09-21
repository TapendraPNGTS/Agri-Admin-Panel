import { Link } from 'react-router-dom';
// material-ui
import Logo from '../../../assets/images/MY_AGRI_INPUT2.svg';
// project imports

// ==============================|| MAIN LOGO ||============================== //

const LogoSection = () => (
    <center>
        <Link to="dashboard">
            <img src={Logo} height={"55px"} alt="image" />
        </Link>
    </center>
);

export default LogoSection;
