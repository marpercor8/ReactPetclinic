import moment from "moment/moment";
import { useEffect, useState } from "react"
import { Observable } from 'rxjs';

const PRODUCT_API = 'http://localhost:8101/api/stock/stream'

const observable = new Observable((subscriber) => {
    const eventSource  = new EventSource(PRODUCT_API);
    console.log(eventSource)
    eventSource.onmessage= (e)=> subscriber.next(e.data)
    eventSource.onerror = (e)=> subscriber.error(e)

    return () => eventSource.close();
});

const compareDate = (a, b)=>{
  return moment(a).isBefore(moment(b))
}

export const StockPage = () => {

  const [stock, setStock] = useState([]);


    useEffect(()=> {
        const subs =  observable.subscribe({
            next: (e)=> addStock(e)})
        return () => subs.unsubscribe()
    }, [])

    const addStock = (stock) => {
      let stockObject = JSON.parse(stock)
      setStock((prev) => [
        stockObject,
        ...prev].sort((a, b) => compareDate(a, b)))
  }


    return (
        <span>
        <h2>Stock Historial {stock.length}</h2>
        <table className='table table-striped'>
          <thead>
            <tr>
              <th>Stock Identification</th>
              <th>Quantity</th>
              <th>Check in</th>
              <th>Product Identification</th>
            </tr>
          </thead>
          <tbody>
            <TableBody list={stock} />
          </tbody>
        </table>
      </span>
    )
}

const TableBody  = ({list}) => {
  return (
      <>
          {list.map((stock)=> {
              return ( <tr key={stock.id}>
                  <td>{stock.id}</td>
                  <td>{stock.quantity}</td>
                  <td>{moment().format('LTS')}: {moment(new Date(stock.checkIn)).fromNow('ss')}</td>
                  <td>{stock.productId}</td>
              </tr>)
          })}
      </>
  ) 
}