import { useState, useRef, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { motion } from "framer-motion";

import Nav from 'react-bootstrap/Nav';
import Popup_cart from './Popup_Cart';
const Header = () => {
  const [isHover, setIsHover] = useState(false)
  const showmenu = () => {
    setIsHover(!isHover)
  }
  const [showcart, setShowCart] = useState(false)
  const handelclick = () => {
    setShowCart(!showcart)
    if (isHover) {
      setIsHover(false)
  }}
  const cartRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setShowCart(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <>
      <div className='bg-body'>
        <div className='d-flex justify-content-around'>
          <div>
            logo
          </div>
          <div>
            <Nav className="justify-content-center" activeKey="/home">
              <Nav.Item>
                <Nav.Link href="/home" onMouseEnter={showmenu}>Photography</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-1">Máy cũ</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-2">Khuyến mãi</Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
          <div>
            <button onClick={handelclick}>giỏ hàng</button>
            {
              showcart && (
                <div ref={cartRef}>
                  <Popup_cart />
                </div>
              )
            }
          </div>
        </div>
        <motion.div className='backdrop_menu w-100 h-100'
          initial={{ opacity: 0, y: -20, position: "absolute"}}
          animate={{ opacity: isHover ? 1 : 0, y: isHover ? 0 : -20, position: !isHover ? "static" : "absolute"  }}
          exit={{ opacity: 0, y: -20}}
          transition={{ duration: 0.1 }}
        >
          <div className='bg-light d-flex flex-wrap justify-content-center shadow-lg position-absolute w-100 p-2'  onMouseLeave={isHover ? showmenu : undefined}>
            <div className='col d-flex align-items-center'>
              <ul>
                <h3>Máy Ảnh</h3>
                <li>Coffee</li>
                <li>Tea</li>
                <li>Milk</li>
              </ul>
            </div>
            <div className='col d-flex align-items-center'>
              <ul>
                <h3>Ống Kính</h3>
                <li>Coffee</li>
                <li>Tea</li>
                <li>Milk</li>
              </ul>
            </div>
            <div className='col d-flex align-items-center'>
              <ul>
                <h3>Camera Hành động</h3>
                <li>Coffee</li>
                <li>Tea</li>
                <li>Milk</li>
              </ul>
            </div>
            <div className='col d-flex align-items-center'>
              <ul>
                <h3>Camera Hành động</h3>
                <li>Coffee</li>
                <li>Tea</li>
                <li>Milk</li>
              </ul>
            </div> 
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default Header;