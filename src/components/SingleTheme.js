import React from 'react'
import { Link } from 'react-router-dom'
import { List, Card,Avatar,Button } from 'antd';
import chart from '../chart.PNG';

import { Menu, Icon ,Switch,Tabs,Divider  } from 'antd';

const TabPane = Tabs.TabPane;

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
const  weightage = [
    {
        segment : 'Chemicals' , 
        weightage : 24.99,
        stocks : [{
            stock : 'Bodal Chemicals Ltd',
            weightage : 8.33
            },
            {
                stock : 'Coromandel International Ltd',
                weightage : 8.33
            },
            {
                stock : 'Castrol India Ltd',
                weightage : 8.33
            }
        ]
    },
    {
        segment : 'Software' , 
        weightage : 8.33,
        stocks : [{
            stock : 'Bodal Chemicals Ltd',
            weightage : 8.33
            },
            {
                stock : '8K Miles Software Services Ltd',
                weightage : 8.33
            }
        ]
    }
];
const performance = [
    {chart : 'chart.PNG'}
];
const recentNews = [];

class SingleTheme extends React.Component {
    state = {
        current: 'performance',
        theme : 'light'
      }
    constructor(props){
        super(props);
        
       
    }

    callback = (e) => {
        console.log('click ', e);
        this.setState({
          current: e.key,
        });
      }
    render() {
        let number = parseInt(this.props.match.params.number);
        let item = data[number-1];
        return(
          <div>
            <div style={{  padding: '10px' }}>
                <Card title={item.title}   bodyStyle={{ padding: 10 }}>
                    <div  padding='10px' >
                        <img width="20%"  className="ant-menu-item" src={item.img}/>
                        <h3>{item.desc}</h3>
                    </div>
                    <div >
             
                    <p> Minimum Price : {item.price} &#8360; </p>
                    <p> Index Value :  {item.index} </p>
                    <p ><span align='left'> 
                        <Button type="primary" size='small' ghost>
                            Buy</Button></span>    <span align='right'><Button type="primary"  size='small' ghost>Add to WatchList</Button> </span></p>
                    </div>
                </Card>
         </div>
         <div style={{  padding: '10px' }}>   
        <Card >
        
        <Tabs defaultActiveKey="1" onChange={this.callback}>
            <TabPane tab="Past Performance" key="1">
            <List
                itemLayout="horizontal"
                dataSource={performance}
                renderItem={item => (
                <List.Item>
                    <div><img src={chart} /> </div>
                   
               </List.Item>
            )}
            />
            </TabPane>
            <TabPane tab="Stocks and Weights" key="2">
            <List
                itemLayout="horizontal"
                dataSource={weightage}
                renderItem={item => (
                <List.Item>
                    <List.Item.Meta
                   title={<div><span align='left'>{item.segment}</span> <Divider type="vertical" /><span align='right'>{item.weightage} %</span></div>}
                    />
                    <Divider type="vertical" />
                    <List
                        itemLayout="horizontal"
                        dataSource={item.stocks}
                        renderItem={stock => (
                        <List.Item>
                            <List.Item.Meta
                        title={<div><span align='left'>{stock.stock}</span> <Divider type="vertical" /><span align='right'>{stock.weightage} %</span></div>}
                            />
                    </List.Item>
                    )}
                    />
               </List.Item>
            )}
            />
            </TabPane>
            <TabPane tab="Recent News" key="3">
            <List
                itemLayout="horizontal"
                dataSource={recentNews}
                renderItem={item => (
                <List.Item>
                    <List.Item.Meta
                    title={<a href="https://ant.design">{item.title}</a>}
                    description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                    />
               </List.Item>
            )}
            />
            </TabPane>
        </Tabs>

        
      </Card>
      <Link to='/theme'>Back</Link>
        </div>
        </div>
         
         
          
        );
    }
}

export default SingleTheme
