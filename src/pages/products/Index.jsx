import { useEffect, useState } from "react"
import { Observable } from 'rxjs';


const PRODUCT_API = 'http://localhost:8101/api/product/stream'

const observable = new Observable((subscriber) => {
    const eventSource  = new EventSource(PRODUCT_API);
    console.log(eventSource)
    eventSource.onmessage= (e)=> subscriber.next(e.data)
    eventSource.onerror = (e)=> subscriber.error(e)

    return () => eventSource.close();
});

export const ProductPage = () => {
    const [products, setProducts] = useState([]);


    useEffect(()=> {
        console.log(observable)
        const subs =  observable.subscribe({
            next: (e)=> addProduct(e)})
        return () => subs.unsubscribe()
    }, [])

    const addProduct = (product) => {
        const productObject = JSON.parse(product)
        setProducts((prev)=> {
            if(prev.find((e)=> e.productId === productObject.productId)){
                return prev.map((item)=>{
                    if(item.productId == productObject.productId){
                        return productObject;
                    }
                    return item;
                })
            }
            return [...prev, productObject]
            
        })
    }
    return (
        <span>
        <h2>Products</h2>
        <table className='table table-striped'>
            <thead>
            <tr>
                <th>Product Identification</th>
                <th>Price</th>
                <th>Description</th>
                <th>Quantity</th>
            </tr>
            </thead>
            <tbody>
                <TableBody list={products} />
            </tbody>
        </table>
        </span>
    )
}

const TableBody  = ({list}) => {
    return (
        <>
            {list.map((product)=> {
                return ( <tr key={product.productId}>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>{product.description.substring(0, 50)}...</td>
                    <td>{product.quantity}</td>
                </tr>)
            })}
        </>
    ) 
}