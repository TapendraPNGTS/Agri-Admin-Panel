import React, { useEffect, useState, useCallback } from "react";
// material-ui
import { Grid } from "@mui/material";
import { axisClasses } from "@mui/x-charts";
// project imports
import EarningCard from "./EarningCard";
import { gridSpacing } from "store/constant";
import { getUserLocal } from "utils/localStorage.util";
import DashboardApi from "api/dashboard.api";
import { toast } from "react-hot-toast";
import isAuth from "../../../api/auth-api/auth.api";
import { useNavigate } from "react-router-dom";

import useConfig from "hooks/useConfig";
import { useTheme } from "@mui/material/styles";

import TotalLineChartCard from "ui-component/cards/TotalLineChartCard";
import ApexCharts from "apexcharts";
import chartData from "../chart-data";
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

  const theme = useTheme();
  const { navType } = useConfig();
  const backColor = theme.palette.background.paper;
  const secondary = theme.palette.secondary.main;
  const error = theme.palette.error.main;
  const primary = theme.palette.primary.main;
  const successDark = theme.palette.success.dark;
  const orange = theme.palette.orange.main;
  const orangeDark = theme.palette.orange.dark;

  React.useEffect(() => {
    const newChartData = {
      ...chartData.MarketChartCardData.options,
      colors: [secondary, error, primary],
      tooltip: {
        theme: navType === "dark" ? "dark" : "light",
      },
    };

    const newRevenueChartCardData = {
      ...chartData.RevenueChartCardData.options,
      colors: [error, primary, secondary],
      stroke: {
        colors: [backColor],
      },
    };

    const newSeoChartCardData1 = {
      ...chartData.SeoChartCardData1.options,
      colors: [primary],
      tooltip: {
        theme: navType === "dark" ? "dark" : "light",
      },
    };

    const newSeoChartCardData2 = {
      ...chartData.SeoChartCardData2.options,
      colors: [successDark],
      tooltip: {
        theme: navType === "dark" ? "dark" : "light",
      },
    };

    const newSeoChartCardData3 = {
      ...chartData.SeoChartCardData3.options,
      colors: [error],
      tooltip: {
        theme: navType === "dark" ? "dark" : "light",
      },
    };

    const newSeoChartCardData4 = {
      ...chartData.SeoChartCardData4.options,
      colors: [orange],
      tooltip: {
        theme: navType === "dark" ? "dark" : "light",
      },
    };

    const newSeoChartCardData5 = {
      ...chartData.SeoChartCardData5.options,
      colors: [secondary],
      tooltip: {
        theme: navType === "dark" ? "dark" : "light",
      },
    };

    const newSeoChartCardData6 = {
      ...chartData.SeoChartCardData6.options,
      colors: [error],
      tooltip: {
        theme: navType === "dark" ? "dark" : "light",
      },
    };

    const newSeoChartCardData7 = {
      ...chartData.SeoChartCardData7.options,
      colors: [secondary],
      tooltip: {
        theme: navType === "dark" ? "dark" : "light",
      },
    };

    const newSeoChartCardData8 = {
      ...chartData.SeoChartCardData8.options,
      colors: [primary],
      tooltip: {
        theme: navType === "dark" ? "dark" : "light",
      },
    };

    const newSeoChartCardData9 = {
      ...chartData.SeoChartCardData9.options,
      colors: [successDark],
      tooltip: {
        theme: navType === "dark" ? "dark" : "light",
      },
    };

    const newAnalyticsChartCardData = {
      ...chartData.AnalyticsChartCardData.options,
      colors: [primary, successDark, error, orangeDark],
      tooltip: {
        theme: navType === "dark" ? "dark" : "light",
      },
    };

    const newConversionsChartCardData = {
      ...chartData.ConversionsChartCardData.options,
      colors: [secondary],
      tooltip: {
        theme: navType === "dark" ? "dark" : "light",
      },
    };

    const newSatisfactionChartCardData = {
      ...chartData.SatisfactionChartCardData.options,
      theme: {
        monochrome: {
          color: orangeDark,
        },
      },
      stroke: {
        colors: [backColor],
      },
    };

    ApexCharts.exec(`market-sale-chart`, "updateOptions", newChartData);
    ApexCharts.exec(`revenue-chart`, "updateOptions", newRevenueChartCardData);

    ApexCharts.exec(`visit-chart`, "updateOptions", newSeoChartCardData1);
    ApexCharts.exec(`bounce-bar-chart`, "updateOptions", newSeoChartCardData2);
    ApexCharts.exec(`product-chart`, "updateOptions", newSeoChartCardData3);

    ApexCharts.exec(
      `user-analytics-chart`,
      "updateOptions",
      newSeoChartCardData4
    );
    ApexCharts.exec(
      `session-timeout-chart`,
      "updateOptions",
      newSeoChartCardData5
    );
    ApexCharts.exec(`page-view-chart`, "updateOptions", newSeoChartCardData6);
    ApexCharts.exec(
      `page-session-chart`,
      "updateOptions",
      newSeoChartCardData7
    );
    ApexCharts.exec(`avg-session-chart`, "updateOptions", newSeoChartCardData8);
    ApexCharts.exec(`bounce-rate-chart`, "updateOptions", newSeoChartCardData9);

    ApexCharts.exec(
      `percentage-chart`,
      "updateOptions",
      newAnalyticsChartCardData
    );
    ApexCharts.exec(
      `new-stack-chart`,
      "updateOptions",
      newConversionsChartCardData
    );
    ApexCharts.exec(
      `satisfaction-chart`,
      "updateOptions",
      newSatisfactionChartCardData
    );
  }, [
    navType,
    backColor,
    secondary,
    error,
    primary,
    successDark,
    orange,
    orangeDark,
  ]);

  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12} md={6} sm={6} lg={4}>
        <TotalLineChartCard
          bgColor={theme.palette.primary.main}
          chartData={chartData.TotalLineCardChart1}
          // value={4000}
          title="Total Sales"
          percentage="42%"
        />
      </Grid>
      <Grid item lg={4} md={6} sm={6} xs={12}>
        <TotalLineChartCard
          chartData={chartData.TotalLineCardChart2}
          isLoading={isLoading}
          // value={userData}
          title="Total Farmer"
          bgColor={theme.palette.error.main}
          percentage="50%"
        />
      </Grid>
      <Grid item lg={4} md={6} sm={6} xs={12}>
        <TotalLineChartCard
          chartData={chartData.TotalLineCardChart1}
          isLoading={isLoading}
          // value={proData}
          title="Total Product"
          bgColor={theme.palette.secondary.main}
          percentage="15%"
        />
      </Grid>
      <Grid item lg={4} md={6} sm={6} xs={12}>
        <TotalLineChartCard
          chartData={chartData.TotalLineCardChart3}
          isLoading={isLoading}
          // value={currMonthOrder}
          title="This Month Order"
          bgColor={theme.palette.success.dark}
          percentage="25%"
        />
      </Grid>
      <Grid item lg={4} md={6} sm={6} xs={12}>
        <TotalLineChartCard
          chartData={chartData.TotalLineCardChart2}
          isLoading={isLoading}
          // value={totalOrder}
          title="Total Order"
          bgColor={theme.palette.orange.dark}
          percentage="15%"
        />
      </Grid>
      <Grid item lg={4} md={6} sm={6} xs={12}>
        <TotalLineChartCard
          chartData={chartData.TotalLineCardChart3}
          isLoading={isLoading}
          // value={cateData}
          title="Total Franchise"
          bgColor={theme.palette.success.dark}
          percentage="25%"
        />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
