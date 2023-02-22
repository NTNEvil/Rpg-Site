import React from 'react';
import SideMenu from './components/sidemenu';
import Nav from './components/nav';
import Login from './components/Login';

function Inv() {


  return (
    <div className="Inv">
        <Nav></Nav>
        <SideMenu></SideMenu>
        <Login></Login>
        <h1 className='inventarioTitle'>Inventario</h1>
      <div className="inventory">
        <div className='Invetory-canvas'>
            <div className='inv'>
            <div className="item-inv">
                <img src='https://cdn-icons-png.flaticon.com/512/1205/1205664.png'/>
                <div className='item-text'>
                <p>Poção</p>
                <span>1X</span>
                </div>

            </div>

            </div>

        </div>
      </div>
      <div className="inventoryW"></div>
    </div>
  );
}

export default Inv;