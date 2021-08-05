import React from "react";
import Button from "./Button";
import "./widgetLg.css";


const WidgetLg = () => {



    return (
        <div className="widgetLg">
            <h3 className="widgetLgTitle">
                Latest Transaction
            </h3>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Customer</th>
                    <th className="widgetLgTh">Date</th>
                    <th className="widgetLgTh">Amount</th>
                    <th className="widgetLgTh">Status</th>
                </tr>
                <tr className="widgetLTr">
                    <td className="widgetLgUser">
                        <img src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Susan Carol</span>
                    </td>
                    <td className="widgetLgDate">2 Aug 2021</td>
                    <td className="widgetLgAmount">$300.00</td>
                    <td className="widgetLgStatus"><Button type="Approved"></Button></td>

                </tr>
                <tr className="widgetLTr">
                    <td className="widgetLgUser">
                        <img src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Susan Carol</span>
                    </td>
                    <td className="widgetLgDate">2 Aug 2021</td>
                    <td className="widgetLgAmount">$300.00</td>
                    <td className="widgetLgStatus"><Button type="Declined"></Button></td>

                </tr>
                <tr className="widgetLTr">
                    <td className="widgetLgUser">
                        <img src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Susan Carol</span>
                    </td>
                    <td className="widgetLgDate">2 Aug 2021</td>
                    <td className="widgetLgAmount">$300.00</td>
                    <td className="widgetLgStatus"><Button type="Pending"></Button></td>

                </tr>
                <tr className="widgetLTr">
                    <td className="widgetLgUser">
                        <img src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Susan Carol</span>
                    </td>
                    <td className="widgetLgDate">2 Aug 2021</td>
                    <td className="widgetLgAmount">$300.00</td>
                    <td className="widgetLgStatus"><Button type="Approved"></Button></td>

                </tr>
            </table>
        </div>
    )
}

export default WidgetLg;