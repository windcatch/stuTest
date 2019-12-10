import React from 'react';
import uuid from 'uuid';

var styles = {
  'title': {
    width: 200,
    display: 'inline-block',
    marginRight: 10,
    verticalAlign: 'top'
  }
}

class AppForm extends React.Component {
  
  handleSubmit(event) {/*声明一个函数来处理onsubmit事件*/
    event.preventDefault();/*阻止事件默认行为*/
    let text=this.refs.text.value;
    /*通过this.refs.xxx  来取react用特殊属性ref绑定的组件*/
    if(!text.trim()){
      alert("Input can't be null");
      return ;
    }
    let id=uuid();/*通过uuid生成的id*/
    this.props.AddTodoItem({id,text,complete:false});
    /*通过父组件传来的方法传值给父组件 (完成状态默认false)*/
  }

  render () {
    return (
      <form
         className='ui reply form'
         onSubmit={this.handleSubmit.bind(this)}>
      {/* React项目里 是JSX语法，样式用className而不是js中的class ，事件绑定：onClick onSubmit onChange*/}
        <div className='field input-md' style={styles.title}>
          <input type='text' placeholder='TODO' ref='text' />
          {/*React 支持一种非常特殊的属性 ref ，可以用来绑定到 render() 输出的任何组件上。*/}
        </div>

        <button type='submit' className='btn btn-primary'>
            添加
        </button>
      </form>
    )
  }
}

export default AppForm;