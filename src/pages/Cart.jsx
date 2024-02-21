import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { emptyCart, removeFromCart } from '../redux/slice/cartSlice'





function Cart() {
  const cartArray = useSelector(state=>state.cartReducer)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [total,setTotal]= useState(0)

  const getCartTotal =()=>{
    if(cartArray.length>0){
      setTotal(cartArray.map(item=>item.price).reduce((p1,p2)=>p1+p2))
    }else{
      setTotal(0)
    }
  }

  useEffect(()=>{
    getCartTotal()
  },[cartArray])

  const handleCart=()=>{
    dispatch(emptyCart())
    alert("your order placed successfully.....")
    navigate('/')
  }






  return (
    <div style={{marginTop:'100px'}}>
      {
        cartArray.length>0?
        <div className="row">
          <div className="col-lg-8">
            <table className='table shadow rounded'>
              <thead>
                <tr>
                  <th style={{color:'white'}}>#</th>
                  <th style={{color:'white'}}>product</th>
                  <th style={{color:'white'}}>product image</th>
                  <th style={{color:'white'}}>price</th>
                  <th style={{color:'white'}}>action</th>
                </tr>
              </thead>
              <tbody>
                {
                  cartArray.map((products,index)=>(
                    <tr key={index}>
                      <td style={{color:'white'}}>{index+1}</td>
                      <td style={{color:'white'}}>{products.title}</td>
                      <td style={{color:'white'}}><img width={'100px'} height={'100px'} src={products.thumbnail} alt="" /></td>
                      <td style={{color:'white'}}>{products.price}</td>
                      <td><Button  onClick={()=>dispatch(removeFromCart(products.id))} className='btn ' ><i class="fa-solid fa-trash text-danger" style={{color: '#d22014'}}></i> </Button></td>

                    </tr>
                  ))
                }

              </tbody>
            </table>

          </div>

          <div className='col-lg-3'>
            <div className='border mt-3 rounded shadow p-2 w-100'>
              <h1 className='text-primary p-2'>Cart Summary</h1>
              <h4>Total Products: <span>{cartArray.length}</span></h4>
              <h4>Total: <span className='text-danger fw-bolder fs-2'>${total}</span></h4>
              <div className='d-grid'>
                <button onClick={handleCart} className='btn btn-success mt-5 rounded'>Check out</button>
              </div>

            </div>

          </div>
        
        
        </div>
        
        
        : <div style={{height:'100vh'}} className='w-100 d-flex flex-column justify-content-center align-items-center'>
        <img height={'500px'} width={'500px'} src="https://assets-v2.lottiefiles.com/a/cbbb0d80-1185-11ee-bb81-1f8a0ee065ae/kGZag9os6n.gif" alt="" />
        <h3 className='text-center text-danger'>Cart is empty</h3>
        <Link style={{textDecoration:'none'}}  className='btn btn-warning rounded' to={'/'}>Back to home</Link>

      </div>
      }
    </div>
  )
}

export default Cart