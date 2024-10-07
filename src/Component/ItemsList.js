import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

const ItemsList = ({itemsData}) => {
  return (
    <Row>


        {
            itemsData.length>=1 ? (itemsData.map((item)=>{
                return(
 <Col sm='12' className='mb-3'>
        
        <Card className='d-flex flex-row'>
            <Card.Img style={{width :' 250px' , height : '180px'}} variant="top" src={item.imgUrl} />
            <Card.Body>
              <Card.Title className='d-flex justify-content-between'>
                <div className='item-title'>{item.title}</div>
                <div className='item-price'>{item.price}</div>
                </Card.Title>
              <Card.Text className='py-3'>
              {item.description}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
                )
            })):<h1>aucun types à regarder</h1>

        }
        
       
    </Row>
  )
}

export default ItemsList
