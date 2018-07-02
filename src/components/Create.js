import React from 'react';
import ReactDOM from 'react-dom';
import { Transfer ,Card,Upload, Button, Icon,Input } from 'antd';
const { TextArea } = Input;

const mockData = [
  {
    key: 1,
    title: 'FEDERALBNK',
  },
  {
    key: 2,
    title: 'BANKBARODA',
  },
  {
    key: 3,
    title: 'INDUSINDBK',
  },
  {
    key: 4,
    title: 'YESBANK',
  },
  {
    key: 5,
    title: 'KOTAKBANK',
  },
  {
    key: 6,
    title: 'RBLBANK',
  },

];
const props = {
  name: 'file',
  action: '//jsonplaceholder.typicode.com/posts/',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      //message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      //message.error(`${info.file.name} file upload failed.`);
    }
  },
};

const targetKeys =[];

class Create extends React.Component {


  state = {
    targetKeys,
    selectedKeys: [],
    fileList: [{
      uid: -1,
      name: 'xxx.png',
      status: 'done',
      url: 'http://www.baidu.com/xxx.png',
    }],
  }

  

  handleChange = (nextTargetKeys, direction, moveKeys) => {
    this.setState({ targetKeys: nextTargetKeys });

    console.log('targetKeys: ', targetKeys);
    console.log('direction: ', direction);
    console.log('moveKeys: ', moveKeys);
  }

  handleSelectChange = (sourceSelectedKeys, targetSelectedKeys) => {
    this.setState({ selectedKeys: [...sourceSelectedKeys, ...targetSelectedKeys] });

    console.log('sourceSelectedKeys: ', sourceSelectedKeys);
    console.log('targetSelectedKeys: ', targetSelectedKeys);
  }

  handleScroll = (direction, e) => {
    console.log('direction:', direction);
    console.log('target:', e.target);
  }

  render() {
    const state = this.state;
    const props = {
      action: '//jsonplaceholder.typicode.com/posts/',
      onChange: this.handleChange,
      multiple: true,
    };
    return (
      <div style={{padding:30}}>

       <Card  style={{ width: 500,height:500 }} bodyStyle={{ padding: 10 }}>
            
                <p style={{padding:10}}>
                  <Input placeholder="Enter Theme Name" style={{width:250}}/>
               </p>

                  <p style={{padding:10}}>
                  <TextArea placeholder="Enter Theme Description" autosize />
               </p>

               
             <p style={{padding:10}}>
                <Transfer
                  dataSource={mockData}
                  
                  targetKeys={state.targetKeys}
                  selectedKeys={state.selectedKeys}
                  onChange={this.handleChange}
                  onSelectChange={this.handleSelectChange}
                  onScroll={this.handleScroll}
                  render={item => item.title}
                />
            </p>

             <p style={{padding:10}}> 
        
        <div style={{align:'right'}}>  
        
          <Upload {...props}>
            <Button>
              <Icon type="upload" /> Upload Custom Themes Image
            </Button>
          </Upload>
        </div>
       </p>
            <p style={{padding:10}}>
             <span align='left'> 
                        <Button type="primary" size='small' ghost>
                            Create Theme</Button></span></p>

          </Card>
         
      </div>
    );
  }
}

export default Create