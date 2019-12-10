import React from "react"
import AppList from "./AppList.js"
import AppForm from "./AppForm.js"
import AppFooter from "./AppFooter.js"


class App extends React.Component {
    state = {
        choosevalue: 1, /*添加一个choosevalue的state，默认为1，即全选*/
        data: this.props.data
    }

    ChooseValue(id) {/*选择任务状态的函数*/
        this.setState({choosevalue: id});
    }

    OnAddTodoItem(newItem) {/*添加数据的函数*/
        let newdata = this.state.data.concat(newItem);
        this.setState({data: newdata});
        /*setState方法会重新渲染组件，直接用this.state.xxx不会重新渲染组件。它的参数是对象或者函数*/
    }

    /*添加两个方法AllChangeComplete：改变状态；AllOnDeleteItem：删除list的方法。*/
    AllChangeComplete(id) {
        let newdata = this.state.data.map((item, index) => {
            if (item.id === id) {/*匹配传来的id*/
                item.complete=!item.complete;
            }
            return item;
        });
        this.setState({data:newdata});/*以新数据来渲染组件*/
    }

    AllOnDeleteItem(id){
        let newdata2=this.state.data.map((item)=>{
            if(item.id==id){
                item.deleteFlag=true;/*新增一个属性，判定是否要删除*/
            }
            return item;
        });
        this.setState({data:newdata2});
    }


    render() {
        const {data} = this.state;
        return (
            <div className="ui comments">
                <h1>My todo with React</h1>
                <hr/>
                <AppForm AddTodoItem={this.OnAddTodoItem.bind(this)}/>
                {/*父组件传递一个方法给子组件(这个方法可以让子组件的数据传给父组件)*/}
                <AppList
                    data={data}
                    choosevalue={this.state.choosevalue} /*将选择值choosevalue传给AppList组件*/
                    ChangeCompleteTop={this.AllChangeComplete.bind(this)}/*传入改变完成状态的方法*/
                    DeleteItemTop={this.AllOnDeleteItem.bind(this)}/*传入删除工作任务的方法*/
                />
                <AppFooter
                    SubmitChooseValue={this.ChooseValue.bind(this)}/*将ChooseValue方法以SubmitChooseValue为名称传递给子组件*/
                />
            </div>
        )
    }
}


export default App;