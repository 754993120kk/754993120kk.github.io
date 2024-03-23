import React, { Component } from 'react'
import { Avatar } from 'antd'
import {UserOutlined,FolderOutlined,GithubOutlined} from '@ant-design/icons'
import './User.css'
import pit from '../mag/user.webp'
import Info from './Info'
import Box from './Box'
export default class User extends Component {
  render() {
    return (
      <div className='con'>
        <div style={{height:'50px'}}></div>
        <div className='box'>
          <div style={{height:'150px'}}>
             <div style={{float:'left'}}><Avatar src={pit} 
          style={{height:'140px',width:'140px',marginLeft:'100px',marginTop:'30px'}}/>
          </div>
          <div style={{float:'right',height:'240px',width:'900px',backgroundColor:'',
        marginRight:'45px'}}>
            <h1 style={{textAlign:'center'}}><UserOutlined/>MYK的个人主页</h1>
            <Info/>
          </div>
          </div>
          <div className='cot'>
            <h2><GithubOutlined />个人简介</h2>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;本人是一名热爱计算机科学的学生，我目前就读于山东大学的计算机科学与技术学院，致力于探索和学习计算机科学领域的各种知识和技能。
我对计算机编程有着浓厚的兴趣，熟练掌握多种编程语言，包括Java、Python和C++等。我喜欢通过编写代码来解决问题，并享受着在编程过程中不断挑战自我的乐趣。
除了编程，我还对人工智能、机器学习和数据科学等领域充满好奇心。我经常探索如何利用机器学习技术来解决现实生活中的问题，这些经历使我对人工智能的应用有了更深入的理解。
在学术方面，我努力保持优秀的成绩，并积极参与课堂讨论和项目。我相信通过不断地学习和实践，我能够为未来的计算机科学领域做出积极的贡献。</p>
           <h2><FolderOutlined />云计算实验报告</h2> 
           <div style={{paddingBottom:'20px',paddingLeft:'50px'}}>   
            <Box />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
