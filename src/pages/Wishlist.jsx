import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToWishlist, removeFromWishlist } from '../redux/slice/wishlistslice'
import { addToCart } from '../redux/slice/cartSlice'








function Wishlist() {
  const wishlistArray = useSelector((state)=>state.wishlistReducer)
  const dispatch = useDispatch()
  const handleWishlistCart= (products)=>{
    dispatch(addToCart(products))
    dispatch(removeFromWishlist(products.id))
  }

  return (
    <div style={{marginTop:'100px'}}>
    <Row>
      {
        wishlistArray.length>0?
        wishlistArray.map((products,index)=>(

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
       <Button onClick={()=>dispatch(removeFromWishlist(products.id))}  className='btn ' ><i class="fa-solid fa-trash text-danger" style={{color: '#d22014'}}></i> </Button>
        <Button onClick={()=>handleWishlistCart(products)} className=' btn '><i class="fa-solid fa-cart-shopping" style={{color: '#eb1405'}}></i> </Button>

       </div>
      </Card.Body>
    </Card>
        </Col>
        )):
        <div style={{height:'100vh'}} className='w-100 d-flex flex-column justify-content-center align-items-center'>
          <img height={'500px'} width={'500px'} src="https://assets-v2.lottiefiles.com/a/cbbb0d80-1185-11ee-bb81-1f8a0ee065ae/kGZag9os6n.gif" alt="" />
          <h3 className='text-center text-danger'>Wishlist is empty</h3>
          <Link style={{textDecoration:'none'}}  className='btn btn-warning rounded' to={'/'}>Back to home</Link>

        </div>

        
      }
    </Row>

    </div>
  )
}

export default Wishlist