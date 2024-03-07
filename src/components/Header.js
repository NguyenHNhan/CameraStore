import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
const Header = () => {
  const style = {
    height: '50vh',
    zIndex: 1000,
  }
  const [isHover, setIsHover] = useState(false)
  const onMouseEnter = () => {
    setIsHover(true)
  }
  const onMouseLeave = () => {
    setIsHover(false)
  }
  return (
    <>

      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>Photography</Nav.Link>
        </Nav.Item>
        

        <Nav.Item>
          <Nav.Link eventKey="link-1">Máy cũ</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Khuyến mãi</Nav.Link>
        </Nav.Item>
      </Nav>
      {isHover && (
        <div className=' d-flex justify-content-center'>
          <Container className='bg-primary position-absolute' style={style}>
            <div className='mt-5 d-flex flex-wrap justify-content-center'>
              <div className='col d-flex align-items-center'>
                <img src="https://kyma.vn/StoreData/images/Product/may-anh-sony-alpha-ilce6700-a6700-body.webp" className='rounded-circle' style={{ height: '100px' }} alt="Camera" />
                <ul>
                  <span>Máy Ảnh</span>
                  <li>Coffee</li>
                  <li>Tea</li>
                  <li>Milk</li>
                </ul>
              </div>
              <div className='col d-flex align-items-center'>
                <img src="https://kyma.vn/StoreData/images/Product/may-anh-sony-alpha-ilce6700-a6700-body.webp" className='rounded-circle' style={{ height: '100px' }} alt="Ống Kính" />
                <ul>
                  <span>Ống Kính</span>
                  <li>Coffee</li>
                  <li>Tea</li>
                  <li>Milk</li>
                </ul>
              </div>
              <div className='col d-flex align-items-center'>
                <img src="https://kyma.vn/StoreData/images/Product/may-anh-sony-alpha-ilce6700-a6700-body.webp" className='rounded-circle' style={{ height: '100px' }} alt="Camera Hành động" />
                <ul>
                  <span>Camera Hành động</span>
                  <li>Coffee</li>
                  <li>Tea</li>
                  <li>Milk</li>
                </ul>
              </div>
              <div className='col d-flex align-items-center'>
                <img src="https://kyma.vn/StoreData/images/Product/may-anh-sony-alpha-ilce6700-a6700-body.webp" className='rounded-circle' style={{ height: '100px' }} alt="Phụ Kiện" />
                <ul>
                  <span>Phụ Kiện</span>
                  <li>Coffee</li>
                  <li>Tea</li>
                  <li>Milk</li>
                </ul>
              </div>
            </div>
          </Container>


        </div>
      )
      }


    </>
  );
}

export default Header;