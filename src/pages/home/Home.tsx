import React from "react";
import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featured-Info/Featured-Info";
import { data } from "../../dummyData";
import "./home.css"

const Home = () => {
    return (
        <div className="home">
            <FeaturedInfo />
            <Chart title="User Analysis" data={data} dataKey="name" grid />
        </div>
    )
}

export default Home;