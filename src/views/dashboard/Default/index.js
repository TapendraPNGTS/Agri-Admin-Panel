import { useEffect, useState } from 'react';
// material-ui
import { Grid } from '@mui/material';
// project imports
import EarningCard from './EarningCard';
import { gridSpacing } from 'store/constant';

// ==============================|| DEFAULT DASHBOARD ||============================== //
const Dashboard = () => {
    const [isLoading, setLoading] = useState(true);
    const [userData, setUserData] = useState(0);
    const [proData, setProData] = useState(0);
    const [cateData, setCateData] = useState(0);
    const [preMonthAmount, setPreMonthAmount] = useState(0);
    const [preMonthOrder, setPreMonthOrder] = useState(0);
    const [currMonthAmount, setCurrMonthAmount] = useState(0);
    const [currMonthOrder, setCurrMonthOrder] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0);
    const [totalOrder, setTotalOrder] = useState(0);

    function getalldata() {
        const myHeaders = new Headers();
        myHeaders.append('authkey', process.env.REACT_APP_AUTH_KEY);
        myHeaders.append('Authorization', 'Bearer ' +localStorage.getItem('token'));
        myHeaders.append('Content-Type', 'application/json');
        const raw = JSON.stringify({
            adminId: localStorage.getItem('userId')
        });
        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        fetch(`${process.env.REACT_APP_API_URL}dashboard`, requestOptions)
            .then((response) => response.json())
            .then((result) => {
                setUserData(result.user);
                setProData(result.product);
                setCateData(result.category);
                setPreMonthAmount(result.order.previous_month_amount);
                setPreMonthOrder(result.order.previous_month_order);
                setCurrMonthAmount(result.order.current_month_amount);
                setCurrMonthOrder(result.order.current_month_order);
                setTotalAmount(result.order.total_amount);
                setTotalOrder(result.total_order);
            })
            .catch((error) => console.log('error', error));
    }

    useEffect(() => {
        getalldata();
        setLoading(false);
    }, []);

    return (
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                        <EarningCard isLoading={isLoading} isCount={userData} isTitle="Total User" />
                    </Grid>
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                        <EarningCard isLoading={isLoading} isCount={cateData} isTitle="Total Category" />
                    </Grid>
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                        <EarningCard isLoading={isLoading} isCount={proData} isTitle="Total Product" />
                    </Grid>

                    <Grid item lg={4} md={6} sm={6} xs={12}>
                        <EarningCard isLoading={isLoading} isCount={preMonthAmount} isTitle="Previous Month Amount" />
                    </Grid>
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                        <EarningCard isLoading={isLoading} isCount={preMonthOrder} isTitle="Previous Month Order" />
                    </Grid>

                    <Grid item lg={4} md={6} sm={6} xs={12}>
                        <EarningCard isLoading={isLoading} isCount={currMonthAmount} isTitle="Current Month Amount" />
                    </Grid>
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                        <EarningCard isLoading={isLoading} isCount={currMonthOrder} isTitle="Current Month Order" />
                    </Grid>
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                        <EarningCard isLoading={isLoading} isCount={totalAmount} isTitle="Total Amount" />
                    </Grid>
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                        <EarningCard isLoading={isLoading} isCount={totalOrder} isTitle="Total Order" />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Dashboard;
