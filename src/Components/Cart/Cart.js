import React, { useContext } from 'react';
import AppContext from '../../Contex/AppContex';
import './Cart.css';

function Cart() {
  const { carItens, setCarItens, priceCart, setPriceCart } = useContext(AppContext);

  function sumQuanty(idx) {
    const quantity = carItens.filter((value) => value.index === idx)
    return quantity.length;
  }

  function deleteIten(index, price) {
    const newArray = carItens.filter((value) => value.index !== index);
    setPriceCart(priceCart - (price * sumQuanty(index)))
    setCarItens(newArray);
  }

  const itensCartNew = carItens.filter(function (a) {
    return !this[JSON.stringify(a)] && (this[JSON.stringify(a)] = true);
  }, Object.create(null))

  return (
    <div className="containerCart">
      <div className="header">Carrrinho de compras</div>

      <div className="containerItensCart">
        {itensCartNew.map((value, index) => (
          <div style={{display: 'flex', alignItems: 'center' }} key={index} className={index % 2 === 0 ? 'par' : 'impar'} onClick={() => deleteIten(value.index, value.price)}>
            <img src={value.img} alt={value.name} style={{width: '50px', height: '50px', borderRadius: '50%', marginLeft: '3px', marginRight: '5px' }}/>
            <div>
              <p>{value.name}</p>
              <p>{`QUANTIDADE: ${(sumQuanty(value.index))}`}</p>
              <strong>{`R$ ${(value.price * sumQuanty(value.index)).toFixed(2)}`}</strong>
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
