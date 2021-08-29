import React from'react'
import  ReactDOM  from 'react-dom'
import CommentDetail from './CommentDetail'
import faker from 'faker'
import ApprovalCard from './ApprovalCard'

const App = () => {
  
  return (
    <div className ="ui container comments">
      <ApprovalCard>
        <CommentDetail author="Sam" comment="Nice Post!" timeAgo="Today at 4:45 PM" imgSrc={faker.image.avatar()}/>
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail author="Alex" comment="Nice Post!" timeAgo="Today at 4:45 PM" imgSrc={faker.image.avatar()}/>
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail author="Jane" comment="Nice Post!" timeAgo="Today at 4:45 PM" imgSrc={faker.image.avatar()}/>
      </ApprovalCard>
      
    </div>
    )
    
}

ReactDOM.render(<App/>, document.querySelector('#root'));
