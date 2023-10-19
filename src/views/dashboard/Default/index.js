import { useEffect, useState, useCallback } from 'react';
// material-ui
import { Grid } from '@mui/material';
// project imports
import EarningCard from './EarningCard';
import { gridSpacing } from 'store/constant';
import { getUserLocal } from "utils/localStorage.util";
import DashboardApi from "api/dashboard.api";
import { toast } from "react-hot-toast";
import isAuth from "../../../api/auth-api/auth.api";
import { useNavigate } from "react-router-dom";

// ==============================|| DEFAULT DASHBOARD ||============================== //
const Dashboard = () => {
    const dashboardApi = new DashboardApi();
    const navigate = useNavigate();
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
    const userId = getUserLocal();

    const getDashboard = useCallback(async () => {
        try {
          const dashboardData = await dashboardApi.getDashboard({
            adminId: userId.StaffID, 
          });
          if (!dashboardData || !dashboardData.data) {
            return toast.error("No Data  available");
          } else {
            setUserData(dashboardData.data.user);
            setProData(dashboardData.data.product);
            setCateData(dashboardData.data.category);
            setPreMonthAmount(dashboardData.data.order.previous_month_amount);
            setPreMonthOrder(dashboardData.data.order.previous_month_order);
            setCurrMonthAmount(dashboardData.data.order.current_month_amount);
            setCurrMonthOrder(dashboardData.data.order.current_month_order);
            setTotalAmount(dashboardData.data.order.total_amount);
            setTotalOrder(dashboardData.data.total_order);
            return;
          }
        } catch (error) {
          console.error(error);
          toast.error("Something went wrong");
          throw error;
        }
      });
    
      useEffect(() => {
        if (!isAuth) {
          return navigate("/");
        }
        getDashboard();
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
