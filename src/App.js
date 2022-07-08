import React from 'react'
import { Routes , Route , Link , BrowserRouter} from 'react-router-dom';
import { Layout , Typography , Space } from 'antd';
import { Navbar , HomePage , Exchange , Cryptocurrencies , Cryptodetails , News } from './components';
import './App.css';

const App = () => {
  return (
    <>
    
    <div className='app'>
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='main'>
          <Layout>
              <div className='routes'>
              <Routes>
                <Route exact path='/' element={<HomePage />} />
                <Route exact path='/funds' element={<Exchange />} />
                <Route exact path='/cryptocurr' element={<Cryptocurrencies />} />
                <Route exact path='/crypto/:coinId' element={<Cryptodetails />} />
                <Route exact path='/news' element={<News />} />
              </Routes>
              </div>
          </Layout>
          <div className='footer'>
             <Typography.Title level={5} style={{ color:'white' , textAlign:'center' }}>
                Cryptoverse <br />
                All Rights Reserved
             </Typography.Title>
             <Space>
                <Link to='/'>Home</Link>
                <Link to='/funds'>Exchange</Link>
                <Link to='/news'>News</Link>
             </Space>
           </div>
      </div>
    </div>
    
    </>
  )
}

export default App