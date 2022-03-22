import React, { useContext } from 'react';
import AppContext from '../../Contex/AppContex';
import { Card, Button } from 'react-bootstrap'
import './Cart.css';

function Cart() {
  const { carItens } = useContext(AppContext);

  return (
    <div className="containerCart">
      <div className="header">Carrrinho de compras</div>

      <div>
        {carItens.map((value, index) => (
          <div style={{display: 'flex', alignItems: 'center' }} key={index}>
            <img src={value.img} alt={value.name} style={{width: '50px', height: '50px', borderRadius: '50%', marginLeft: '3px', marginRight: '5px' }}/>
            <div>
              <p>{value.name}</p>
              <strong>{value.price}</strong>
            </div>
          </div>
        ))}

      </div>

      <div>

      </div>
    </div>
  )
}

export default Cart;
