import axios from "axios"
import { useEffect } from "react"
import { useParams } from "react-router-dom"


const ProductDetails = () => {
let productId = useParams()

let singleProduct = ()=>{
    axios.get(`https://dummyjson.com/products/${productId.id}`).then((res)=>{
      console.log(res.data);
    })
}
useEffect(()=>{
   singleProduct()
},[])


  return (
    <>
      <div className="lg:w-10/12 mx-auto">
        <div className="">
            <p>hello</p>
        </div>
      </div>
    </>
  )
}

export default ProductDetails