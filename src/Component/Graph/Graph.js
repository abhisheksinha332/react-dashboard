import React from "react";
import { Line } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
import './Graph.css'
class ChartsPage extends React.Component {
  state = {
    dataLine: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      datasets: [
        {
          label: "My First dataset",
          fill: true,
          lineTension: 0.3,
          backgroundColor: "rgba(249,69,101, 0.5)",
          borderColor: "rgb(249, 69, 101)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgb(249, 69,101)",
          pointBackgroundColor: "rgb(249, 69, 101)",
          pointBorderWidth: 10,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgb(0, 0, 0)",
          pointHoverBorderColor: "rgba(220, 220, 220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [23, 59, 40, 53, 80, 65, 55]
        },
        {
          label: "My Second dataset",
          
          lineTension: 0.3,
          backgroundColor: "rgba(0, 0, 0, .3)",
          borderColor: "rgb(35, 26, 136)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgb(35, 26, 136)",
          pointBackgroundColor: "rgb(255, 255, 255)",
          pointBorderWidth: 10,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgb(0, 0, 0)",
          pointHoverBorderColor: "rgba(220, 220, 220, 1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [65, 48, 16, 30, 45, 27, 90]
        }
      ]
    }
  };

  render() {
    return (
		<div className="container1">     
		 <MDBContainer >
        {/* <h3 className="mt-5">Line chart</h3> */}
        <Line data={this.state.dataLine} options={{ responsive: true }} />
      </MDBContainer>
	  </div>

    );
  }
}
export default ChartsPage;
