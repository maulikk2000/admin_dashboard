import React from "react";
import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featured-Info/Featured-Info";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import { data } from "../../dummyData";
import "./home.css"

const Home = () => {
    return (
        <div className="home">
            <FeaturedInfo />
            <Chart title="User Analysis" data={data} dataKey="name" grid />
            <div className="homeWidgets">
                <WidgetSm />
                <WidgetLg />
            </div>
        </div>
    )
}

export default Home;