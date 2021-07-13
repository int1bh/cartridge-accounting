import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import { Card, Row } from "react-bootstrap";

function ChartsComponent(modelCartridges) {
const rand = () => Math.floor(Math.random() * 255)

const [model, setModel] = useState()

const colors = []
 for (let i = 0; i < modelCartridges.modelCartridges.length; i++) {
   colors.push(`rgba(${rand()}, ${rand()}, ${rand()})`)
 }

console.log(colors);

console.log(modelCartridges.modelCartridges);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        display: false,
        labels: {
          color: "black",
          font: { size: 12 },
        },
      },
    }
  };

  const data = {
    labels: modelCartridges.modelCartridges,
    datasets: [
      {
        //label: "dffs",
        data: [0, 10, 1, 1, 6, 1, 1, 1, 1, 1, 8, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1,1, 1, 1, 1, 1, 1, 1, 1, 1],
        backgroundColor: colors,
        //borderColor: [`rgb(${rand()}, ${rand()}, ${rand()})`, `rgb(${rand()}, ${rand()}, ${rand()})`, `rgb(${rand()}, ${rand()}, ${rand()})`, `rgb(${rand()}, ${rand()}, ${rand()})`, `rgb(${rand()}, ${rand()}, ${rand()})`, `rgb(${rand()}, ${rand()}, ${rand()})`],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Row className="scrolled fullscreen">
<Card className="text-center monitor-card">
      <Card.Header>На складе: {modelCartridges.modelCartridges.length} шт.</Card.Header>
      <Card.Body>
        <Bar options={options} data={data} />
      </Card.Body>
    </Card>
    
    
    <Card className="text-center monitor-card">
      <Card.Header>Выданы в отделения</Card.Header>
      <Card.Body>
        <Bar options={options} data={data} />
      </Card.Body>
    </Card>
    <Card className="text-center monitor-card">
      <Card.Header>На заправке</Card.Header>
      <Card.Body>
        <Bar options={options} data={data} />
      </Card.Body>
    </Card>
    </Row>
    
    
    
    
    
  );
}

export default ChartsComponent;
