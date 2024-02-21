import React from 'react'
import { Row,Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import useFetch from '../hooks/useFetch';
import { addToWishlist } from '../redux/slice/wishlistslice';
import {useDispatch} from 'react-redux'
import { addToCart } from '../redux/slice/cartSlice';

function Home() {

  const data=useFetch("https://dummyjson.com/products")
  console.log(data)
  const dispatch = useDispatch()
  return (
    <div>

      <Row>
        {
          data?.length>0?data?.map((products,index)=>(
        <Col key={index} style={{marginBottom:"10px"}}>
        <Card style={{ width: '20rem',height:'30rem' }}>
      <Card.Img  height={"200px"} variant="top" src={products?.thumbnail} />
      <Card.Body>
        <Card.Title style={{color:"black"}}>{products.title}</Card.Title>
        <Card.Text>
          {products.description.slice(0,50)}...
        </Card.Text>
        <Card.Text style={{color:"red"}}>
           $ {products.price}
        </Card.Text>
       <div className='d-flex  justify-content-between'>
       <Button onClick={()=>dispatch(addToWishlist(products))} className='btn ' ><i class="fa-solid fa-heart" style={{color: '#d22014'}}></i> </Button>
        <Button onDoubleClick={()=>dispatch(addToCart(products))} className=' btn '><i class="fa-solid fa-cart-shopping" style={{color: '#eb1405'}}></i> </Button>

       </div>
      </Card.Body>
    </Card>
        </Col>
        )):<p className='text-danger fw-bolder'>Nothing to display</p>
}
      </Row>
    </div>
  )
}

export default Home