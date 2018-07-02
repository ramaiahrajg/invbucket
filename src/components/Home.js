
import React from 'react'
import { Link } from 'react-router-dom'

import { List, Card,Avatar,Button } from 'antd';
const data = [
  {
    title: 'India 24x7',
    desc : 'Companies that will benefit from the government’s decision to allow shops to operate 24x7',
    img: 'https://www.smallcase.com/images/smallcases/130/SCNM_0018.png',
    price : 12000,
    index : 98,
    number: 1
  },
  {
    title: 'The Great Indian Middle Class',
    desc : 'Consumer companies expected to benefit from India’s growing middle class',
    img : 'https://www.smallcase.com/images/smallcases/130/SCNM_0010.png',
    price : 10400,
    index : 80,
    number: 2
  },
  {
    title: 'Electric Mobility',
    desc : 'Companies expected to benefit from growth in the electric vehicles ecosystem',
    img : 'https://www.smallcase.com/images/smallcases/130/SCNM_0025.png',
    price : 10400,
    index : 80,
    number: 3
  },
  {
    title: 'Rising Rural Demand',
    desc : 'Companies that stand to benefit from increasing rural consumption',
    img : 'https://www.smallcase.com/images/smallcases/130/SCNM_0012.png',
    price : 20000,
    index : 300,
    number: 4
  },
  {
    title: 'Magic Formula',
    desc : 'High-quality companies trading at attractive prices, screened using Greenblatts Magic Formula',
    img : 'https://www.smallcase.com/images/smallcases/130/SCMO_0006.png',
    price : 5000,
    index : 90,
    number: 5
  }
];


class Home extends React.Component {
  render(){
    return (
      <div style={{  padding: '30px' }}>
        <List
          grid={{ gutter: 16, column: 4}}
          dataSource={data}
          renderItem={item => (
            <List.Item avatar={<Avatar src="https://www.smallcase.com/images/smallcases/130/SCNM_0018.png" />} >
             <Card title={item.title}  style={{ width: 240,height:470 }} bodyStyle={{ padding: 10 }}>
             <div  padding='10px' >
                <img width="100%"  className="ant-menu-item" src={item.img}/>
              </div>
            <div >
              <h3>{item.desc}</h3>
              <p> Minimum Price : {item.price} &#8360; </p>
              <p> Index Value :  {item.index} </p>
             
              <p ><span align='left'> 
              <Link to={`/theme/${item.number}`}><Button type="primary" size='small' ghost>
                Details</Button></Link></span>   </p>
            </div>
          </Card>
            </List.Item>
        )}
        />
    </div>
    );
  }
  
}


export default Home