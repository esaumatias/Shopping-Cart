import React, { useContext } from 'react';
import AppContext from '../../Contex/AppContex';
import { Button } from 'react-bootstrap';
import './Cart.css';

function Cart() {
  const { carItens, setCarItens, priceCart, setPriceCart } = useContext(AppContext);

  const removeRepeatItems = carItens.filter(function (a) {
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

  function removeAllCarItens() {
    setCarItens([]);
    setPriceCart(0);
  }

  return (
    <div className="containerCart">
      <div className="header">Carrrinho de compras</div>

      <div className="containerItensCart">
        {removeRepeatItems.map((value, index) => (
          <div
            style={{ display: "flex", alignItems: "center" }}
            key={index}
            className={index % 2 === 0 ? "par" : "impar"}
          >
            <img
              src={value.img}
              alt={value.name}
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                marginLeft: "3px",
                marginRight: "5px",
              }}
            />
            <div className="conatinerButons">
              <p>{value.name}</p>
              <div>
                <button className="buttonCart" onClick={() => removeIten(value.price, value.name)}>
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAADi0lEQVRoge2ZT0gUURzHv783m+Gsm6ERpEVBkEJHxUUk2rTooof+LBUhQafSoA5dhT3UOTIVOniyiESCqIukImFsuto5g4jMjP6olOtumzvz69BSMDO7M293dhL0c/y9N/M+X97MvJk3wCabbGzIjZNwBCI5EWxg5mYw1TFxDQhVYJRlRomDsUDg1wwxI3QaKz38MkYR6IWOXVCARCi4WxfoBHE7gGrJw+cBHhDs61XHoh/zdcgrwI+Whkoi3CDGRQAl+Q6eIUWg/rRPdJUPR5dkD5YOsNISPEvgHgCVssfa8I2JOwMjsUGZgxwH4FDIF/cl7hDjkrybjBD3qpr/Go2Pp531dwA3NpauqtoggNaC7JzzxJ9QzlA0mrTrKOw6cDisxFXtPryTB4C2VVUb5FDIZ9fRNkB8+X0PASfc8ZKiNeFL3LLrlPMSytywD9xzkodB4cDo5FC29qwBvh9vrFDS2iyAHUUxc86iDtRsG51atGrMegkJTbuJ/y8PAJUKIZKt0XIGEqHgbl3htyh8kXKLlGBlv9WKbTkDukAn1o88AGzVSOuwajAF4AgEiM8X30kOAi5wOKwY66YAyYlgA4A9nljJUZ1cfFdnLJpnQOcWb3zk0SGOGGumADrBlHK9QIR6Y820VBNwwMnJ/COTbjj9ZfVo0LYPg2uMNaun0C43hIoDmdysApR5YJIvAWPB9mVuvWMVIO65hXNWjAWrAJ88EMkTNrmZn0JMs0x80O5UTp4abkNEr4018wwQz3hikwfMmDbWTAFIF6Pe6MhDAmPGmilA6eGXMQAfPDGSY05tmnplLJpnIAId4HveODmHCQNWW5GW64DQRB+AVNGtnJMStKXPqsEygDo+OU+g/uI6yUB3/c9eLFi1ZF2J0z7RBcbX4kk55ks6tSXrN3HWAOXD0SUWfKU4Ts5h4svbJyaWs7XnfBcKjMQGCdzrvpZT+HZgJPYoVw/blzm1Yt9VYsp5kiLx1K/5r9t1ktncfQigrWAtJ+MBj8sSyjlXNncBgKLRpF9TTxKhp3A929G6yyr2nnIiD+T3g+N05r7YKe2Wm89M3GF3zRuR/qAJjE4OpVMltZnZcGOx+wlQ95r2q1ZWHijwJ9/qsaYqXV/rJKAd8ntJc0wYEIrW6x+eyfsbxL3frM/r63VBzcRU92f3gKrx7/s6DmCegDfMmCbiMfVQbMaN36ybbLLR+Q3h4BmjP4CF/gAAAABJRU5ErkJggg==" alt="remover" />
                </button>
                {sumQuanty(value.name)}
                <button className="buttonCart" onClick={() => addItenCart(value)}>
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAADnElEQVRoge2ZTUgUYRjH/8/MrIcoispAtGPpyQ4bdVa6GDusa6xFFnSIPtCgewQTRPfItezQySC1dGXWoot4DoXCSwVdyjKyomhJ3J2Zp0sRzcfO+87OTkH+bvs8zzvz//O+O+8XsMEG/zcUx0PyE3l1TbMOsOJ0KUxpB+ggoIWAzQDAQBlM74j4hUO8qNjqXHqp84lhGE69767LQLaY3e04yiADJ0DcKtl8GcRjtq0WHh2ZWo6qIZKBnol8s5aqXmXgFICmqC//SQXEd0h1Lpu6+VG2sbQBvZg9zkw3AGyXbRvCJ2Yamu2bvifTSNhAevRMqqV5dQTEp+W1icNMo+9Xmy8snr1dFakXMqCb+ia21PsAeupSJ85D0uy8qZvfwwqVsIL06JlUwuIB4DBb6kx+Ih/6/wo10NK8OoJkxf/i0FpT5XpYUc0hlJnKDYB4LD5NESA+VuqdGQ9MByVyU7kdVeLnAHY2RJg4n0mz24M+sYFDyCK+hr8vHgC2O5Z6JSjp2wM9D/raVMV5hTomKbN3+o/fejEX9VEAUCHN3mPq5mt3wrcHNOIh1D/DxkkT28p5v4THgGEYChMPNF6TJI5yMj+RV91hj4GFzmcHAbQlIkoG4ta1VDXtDnsMsOJ0JaNIHmLqdsc8BshR9icjRx4GwnsAwN4EtESCiNvdMc1bxS2iD3R/KqPWin5iGfBo8+uBzcKqkmeLOxC6mPvX8TNQTlyFON/cAe9/gGkFxELbxVpjN+alBACAgBV3zK8HXtb9pgbBTC/cMb+JbCEZOfL4afMYUGx1Lhk58vhp8xhIL3U+AfAmEUVyvE4vdS66g36rUQfEd5PRJMVdv6NI33nAttUCgErDJYmzDs0q+CUC98SZYvYmmM41TpMUw6Vc8YJfInAmrlaaLgGQPqtsAJ9IswP3xIEGHvdPfmYmX9dJwkznax361lwLzfZN32Om0fhlCUJcmO2bnqxVErqY22RpgwCKsYkShIhny1u/XgyrCzUw2T9pk2YPAHgYizIxSlCd/vmueSusUGg5berm95UPu3pBfKt+bSEQF8rbvuRETqaBCBccmWL2KJiGEf+p3SozDYaNeTfSG5pS78x4iqmDgREA67LtfVgHMFytpjpkxQN1XvJlzEwrbHUITAMAdks2fwNgDJpVKOmlt1E1xHLNahiGsrDv6X5i6mYgTcTtDLTi9/66DKZlAC9ZcRZ+XrMuxnHNusEG/zs/ALe1NIuYBW+AAAAAAElFTkSuQmCC" alt="adicionar"/>
                </button>
              </div>
              <strong>{`R$ ${(value.price * sumQuanty(value.name)).toFixed(
                2
              )}`}</strong>
            </div>
          </div>
        ))}
      </div>

      <div className="totalCart">
        <h5>TOTAL:</h5>
        <h5>{`R$ ${priceCart.toFixed(2)}`}</h5>
      </div>

      <Button onClick={removeAllCarItens}>Envaziar carrinho</Button>
    </div>
  );
}

export default Cart;
