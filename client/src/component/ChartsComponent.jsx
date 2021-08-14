import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import { Card, Row } from "react-bootstrap";
import classnames from 'classnames';

function ChartsComponent({
  filteredWarehouse,
  filteredIssued,
  filteredRefuel,
  filteredScrapped
}) {
  const [className, setClassname] = useState({show: false})
  const [className0, setClassname0] = useState({show: false})
  const [className1, setClassname1] = useState({show: false})
  const [className2, setClassname2] = useState({show: false})
  const [className3, setClassname3] = useState({show: false})
  const rand = () => Math.floor(Math.random() * 255);

  const arrHistory = filteredIssued.reduce(
    function(result, item) {
      result[item.issuedHistory[item.issuedHistory.length-1].subdivision] = (result[item.issuedHistory[item.issuedHistory.length-1].subdivision] || 0) +1;
      return result
    }, {}
  )

  const arrWarehouse = filteredWarehouse.reduce(
    function(result, item, index) {
      result[item.modelName] = (result[item.modelName] || 0) +1;
      return result
    }, {}
  )

  const arrIssued = filteredIssued.reduce(
    function(result, item, index) {
      result[item.modelName] = (result[item.modelName] || 0) +1;
      return result
    }, {}
  )

  const arrRefuel = filteredRefuel.reduce(
    function(result, item, index) {
      result[item.modelName] = (result[item.modelName] || 0) +1;
      return result
    }, {}
  )

  const arrScrapped = filteredScrapped.reduce(
      function(result, item, index) {
        result[item.modelName] = (result[item.modelName] || 0) +1;
        return result
      }, {}
  )

  const modelWarehause = Object.keys(arrWarehouse)
  const modelIssued = Object.keys(arrIssued)
  const modelRefuel = Object.keys(arrRefuel)
  const subdivision = Object.keys(arrHistory)
  const scrapped = Object.keys(arrScrapped)

  const sumWarehouse = Object.values(arrWarehouse).reduce(function(sum, elem) {
    return sum + elem
  }, 0)
  const sumIssued = Object.values(arrIssued).reduce(function(sum, elem) {
    return sum + elem
  }, 0)
  const sumRefuel = Object.values(arrRefuel).reduce(function(sum, elem) {
    return sum + elem
  }, 0)

  const sumScrapped = Object.values(arrScrapped).reduce(function(sum, elem) {
    return sum + elem
  }, 0)

  const countWarehouse = Object.values(arrWarehouse)
  const countIssued = Object.values(arrIssued)
  const countRefuel = Object.values(arrRefuel)
  const countHistory = Object.values(arrHistory)
  const countScrapped = Object.values(arrScrapped)

  const colorsWarehouse = [];
  for (let i = 0; i < modelWarehause.length; i++) {
    colorsWarehouse.push(`rgba(${rand()}, ${rand()}, ${rand()})`);
  }

  const colorsIssued = [];
  for (let i = 0; i < modelIssued.length; i++) {
    colorsIssued.push(`rgba(${rand()}, ${rand()}, ${rand()})`);
  }

  const colorsRefuel = [];
  for (let i = 0; i < modelRefuel.length; i++) {
    colorsRefuel.push(`rgba(${rand()}, ${rand()}, ${rand()})`);
  }

  const colorsHistory = [];
  for (let i = 0; i < subdivision.length; i++) {
    colorsHistory.push(`rgba(${rand()}, ${rand()}, ${rand()})`);
  }

  const colorsScrapped = [];
  for (let i = 0; i < scrapped.length; i++) {
    colorsScrapped.push(`rgba(${rand()}, ${rand()}, ${rand()})`);
  }

  

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
    },
  };

  const dataWarehouse = {
    labels: modelWarehause,
    datasets: [
      {
        data: countWarehouse,
        backgroundColor: colorsWarehouse,
        borderWidth: 1,
      },
    ],
  };

  const dataIssued = {
    labels: modelIssued,
    datasets: [
      {
        data: countIssued,
        backgroundColor: colorsIssued,
        borderWidth: 1,
      },
    ],
  };

  const dataRefuel = {
    labels: modelRefuel,
    datasets: [
      {
        data: countRefuel,
        backgroundColor: colorsRefuel,
        borderWidth: 1,
      },
    ],
  };

  const dataHistory = {
    labels: subdivision,
    datasets: [
      {
        data: countHistory,
        backgroundColor: colorsHistory,
        borderWidth: 1,
      },
    ],
  };

  const dataScrapped = {
    labels: scrapped,
    datasets: [
      {
        data: countScrapped,
        backgroundColor: colorsScrapped,
        borderWidth: 1,
      },
    ],
  };

  const setClass = () => setClassname(!className)
  const setClass0 = () => setClassname0(!className0)
  const setClass1 = () => setClassname1(!className1)
  const setClass2 = () => setClassname2(!className2)
  const setClass3 = () => setClassname3(!className3)

  return (
    <Row className="scrolled fullscreen">
      <Card className={classnames('text-center monitor-card', { 'monitor-card-open': !className })} onClick={setClass}>
        <Card.Header>На складе: {sumWarehouse} шт.</Card.Header>
        <Card.Body>
          <Bar options={options} data={dataWarehouse} />
        </Card.Body>
      </Card>

      <Card className={classnames('text-center monitor-card', { 'monitor-card-open': !className0 })} onClick={setClass0}>
        <Card.Header>
          Выданы в отделения: {sumIssued} шт.
        </Card.Header>
        <Card.Body>
          <Bar options={options} data={dataIssued} />
        </Card.Body>
      </Card>
      <Card className={classnames('text-center monitor-card', { 'monitor-card-open': !className2 })} onClick={setClass2}>
        <Card.Header>
          Статистика распределения. Всего выдано: {sumIssued} шт.
        </Card.Header>
        <Card.Body>
          <Bar options={options} data={dataHistory} />
        </Card.Body>
      </Card>
      <Card className={classnames('text-center monitor-card', { 'monitor-card-open': !className1 })} onClick={setClass1}>
        <Card.Header>На заправку: {sumRefuel} шт.</Card.Header>
        <Card.Body>
          <Bar options={options} data={dataRefuel} />
        </Card.Body>
      </Card>
      <Card className={classnames('text-center monitor-card', { 'monitor-card-open': !className3 })} onClick={setClass3}>
        <Card.Header>Утилизировано: {sumScrapped} шт.</Card.Header>
        <Card.Body>
          <Bar options={options} data={dataScrapped} />
        </Card.Body>
      </Card>
    </Row>
  );
}

export default ChartsComponent;
