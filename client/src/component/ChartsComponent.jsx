import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Card, Row } from "react-bootstrap";

function ChartsComponent() {
const rand = () => Math.floor(Math.random() * 255)

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        display: true,
        labels: {
          color: "black",
          font: { size: 12 },
        },
      },
    }
  };

  const data = {
    labels: ["HP 280", "HP 237", "HP 12", "HP 255", "HP 226", "HP 264"],
    datasets: [
      {
        //label: "dffs",
        data: [12, 19, 3, 5, 2, 8],
        backgroundColor: [`rgba(${rand()}, ${rand()}, ${rand()})`, `rgb(${rand()}, ${rand()}, ${rand()})`, `rgb(${rand()}, ${rand()}, ${rand()})`, `rgb(${rand()}, ${rand()}, ${rand()})`, `rgb(${rand()}, ${rand()}, ${rand()})`, `rgb(${rand()}, ${rand()}, ${rand()})`],
        //borderColor: [`rgb(${rand()}, ${rand()}, ${rand()})`, `rgb(${rand()}, ${rand()}, ${rand()})`, `rgb(${rand()}, ${rand()}, ${rand()})`, `rgb(${rand()}, ${rand()}, ${rand()})`, `rgb(${rand()}, ${rand()}, ${rand()})`, `rgb(${rand()}, ${rand()}, ${rand()})`],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Row>
    <Card className="text-center monitor-card">
      <Card.Header>На складе</Card.Header>
      <Card.Body>
        <Doughnut options={options} data={data} />
      </Card.Body>
    </Card>
    <Card className="text-center monitor-card">
      <Card.Header>Выданы в отделения</Card.Header>
      <Card.Body>
        <Doughnut options={options} data={data} />
      </Card.Body>
    </Card>
    <Card className="text-center monitor-card">
      <Card.Header>На заправке</Card.Header>
      <Card.Body>
        <Doughnut options={options} data={data} />
      </Card.Body>
    </Card>
    </Row>
    
  );
}

export default ChartsComponent;
