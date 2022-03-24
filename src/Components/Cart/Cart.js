import React, { useContext } from 'react';
import AppContext from '../../Contex/AppContex';
import { Button } from 'react-bootstrap';
import './Cart.css';

function Cart() {
  const { carItens, setCarItens, priceCart, setPriceCart } = useContext(AppContext);

  const itensCartNew = carItens.filter(function (a) {
    return !this[JSON.stringify(a)] && (this[JSON.stringify(a)] = true);
  }, Object.create(null))
  

  function sumQuanty(name) {
    const quantity = carItens.filter((value) => value.name === name)
    return quantity.length;
  }

  function removeIten(price, name) {
    const itenCart = carItens.slice();
    const index = carItens.findIndex((item) => item.name === name);
    itenCart.splice(index, 1);
    setPriceCart(priceCart - price)
    setCarItens(itenCart);
  }

  function addItenCart(value) {
    setCarItens([...carItens, value]);
    setPriceCart(priceCart + value.price)
  }

  // function deleteIten(name, price) {
  //   const newArray = carItens.filter((value) => value.name !== name);
  //   setPriceCart(priceCart - (price * sumQuanty(name)))
  //   setCarItens(newArray);
  // }

  return (
    <div className="containerCart">
      <div className="header">Carrrinho de compras</div>

      <div className="containerItensCart">
        {itensCartNew.map((value, index) => (
          <div style={{display: 'flex', alignItems: 'center' }} key={index} className={index % 2 === 0 ? 'par' : 'impar'} >
            <img src={value.img} alt={value.name} style={{width: '50px', height: '50px', borderRadius: '50%', marginLeft: '3px', marginRight: '5px' }}/>
            <div>
              <p>{value.name}</p>
              <div>
                <Button onClick={() => removeIten(value.price, value.name)}>-</Button>{(sumQuanty(value.name))}<Button onClick={() => addItenCart(value)}>+</Button>
              </div>
              <strong>{`R$ ${(value.price * sumQuanty(value.name)).toFixed(2)}`}</strong>
            </div>
          </div>
        ))}

      </div>
          
      <div className="totalCart">
        <h5>TOTAL:</h5>
        <h5>{`R$ ${priceCart.toFixed(2)}`}</h5>
      </div>
    </div>
  )
}

export default Cart;
