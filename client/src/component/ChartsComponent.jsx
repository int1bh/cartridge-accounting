import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Col } from "react-bootstrap";

function ChartsComponent() {
    const options = {
        legend: {position: 'left',
                  display: true              },
    }

    const data = {
        labels: ['HP 280', 'HP 237', 'HP 12', 'HP 255', 'HP 226', 'HP 264'],
        datasets: [
          {
            label: 'dffs',
            data: [12, 19, 3, 5, 2],
            backgroundColor: [
              'red',
              'green',
              'blue',
              'orange',
              'black'
            ],
            borderColor: [
                'red',
                'green',
                'blue',
                'orange',
                'black'
            ],
            borderWidth: 1,
          },
        ],
      };
      
  return(
      <div className="charts">
      <Doughnut
      options={options}
   data={data}
   
   
   />
       </div>

  ) 
}

export default ChartsComponent