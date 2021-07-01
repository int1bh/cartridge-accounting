import React from 'react'
import { Col, Spinner, Alert } from 'react-bootstrap';
import TableTrash from './TableTrash';



const TrashContent = ( {trashCandidate, states} ) => {
  let load;
  let alert;
  let noContent = <div className="no_content"><p>Нет данных для отображения</p></div>

  if (states.isLoading & !states.isNoContent) {
      load = <div className="no_content no_content_center"><Spinner animation="border" variant="danger" /></div>
  } else if (!states.isLoading & !states.isNoContent) {
    load = <TableTrash data={trashCandidate}/>
  } else if (states.isError) {
    alert = <Alert variant='danger'>Все пропало</Alert>
  } else {
      load = noContent
  }

    return (
        <Col sm={12}>
          {alert}
        {/* {setTimeout(() => alert, 3000)}   */}
        {load}
        </Col>
    )
}


export default TrashContent