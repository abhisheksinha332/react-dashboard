import React from "react";
import { Doughnut } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

class PieChart extends React.Component {
state = {
  dataDoughnut: {
    // labels: ["25%", "30%", "45%"],
    datasets: [
      {
        data: [45, 25, 30],
        backgroundColor: ["#F7464A",  "#00cee0", "#32075e"],
        hoverBackgroundColor: [
          "#fb1a1f",
          "#01ebff",
          "#6900d4",
         
        ]
      }
    ]
  }
}

render() {
    return (
    <MDBContainer>
      {/* <h3 className="mt-5">Doughnut chart</h3> */}
      <Doughnut data={this.state.dataDoughnut} options={{ responsive: true }} />
    </MDBContainer>
    );
  }
}

export default PieChart;