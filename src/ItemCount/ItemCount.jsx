import Button from 'react-bootstrap/Button'
import React, { useState } from 'react'
import s from './ItemCount.module.css'

function ItemCount({stock}) {
    const [count, setCount] = useState(0);

    function adding () {
        if(count < stock) {
        setCount(count + 1);}
    }
    function subs () {
        if(count > 0) {
        setCount(count - 1);}

    }
    function onAdd () {
        alert('You added ' + count + ' items to your cart');
    }

  return (
    <div>
        <div className={s.botonesContador}>
        <Button onClick={subs} variant="danger">-</Button>
        <p>{count}</p>
        <Button onClick={adding} variant="success">+</Button>
        </div>
        <Button onClick={onAdd} variant="primary">Comprar</Button>
    </div>
  )
}

export default ItemCount