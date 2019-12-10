import React from 'react'
import AppTodos from './AppTodos'

class AppList extends React.Component {
    SubmitDelete(id){
        this.props.DeleteItemTop(id);
    }

    ChangeDone(id){
        this.props.ChangeCompleteTop(id);
    }

    render() {
        var value = this.props.choosevalue;
        /*AppList组件根据choosevalue来渲染*/

        const a = this.props.data.map(({id, text, complete,deleteFlag}, index) => {
            if (value == '1' && deleteFlag!==true) {/*1---------all全部*/
                return (
                    <AppTodos
                        key={index}
                        id={id}
                        text={text}
                        complete={complete}
                        ChangeCompleteItem={this.ChangeDone.bind(this)}/*再把修改完成状态的方法传到AppTodos组件*/
                        SubmitDeleteItem={this.SubmitDelete.bind(this)}
                    />)
            }
            if (value == "2" && complete === false && deleteFlag!==true) {/*2----------active未完成 则返回complete为false的部分*/
                return (
                    <AppTodos
                        key={index}
                        id={id}
                        text={text}
                        complete={complete}
                        ChangeCompleteItem={this.ChangeDone.bind(this)}
                        SubmitDeleteItem={this.SubmitDelete.bind(this)}
                    />)
            }
            if (value == "3" && complete === true && deleteFlag!==true) {/*3----------complete完成 则返回complete为true的部分*/
                return (
                    <AppTodos
                        key={index}
                        id={id}
                        text={text}
                        complete={complete}
                        ChangeCompleteItem={this.ChangeDone.bind(this)}
                        SubmitDeleteItem={this.SubmitDelete.bind(this)}
                    />)
            }
        })

        return (
            <div> { a } </div>
        )
    }
}

export default AppList;