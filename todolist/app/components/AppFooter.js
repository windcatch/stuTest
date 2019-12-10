import React from "react";

var styles = {
  title: {
    marginRight: 10,
    fontSize: 20
  },

  top: {
    marginTop: 20
  }
};

class AppFooter extends React.Component {
  /*处理点击不同按钮的事件*/
  handleAll(){
    let all=this.refs.all.value;/*获取ref为all的value值*/
    this.props.SubmitChooseValue(all);/*子组件调用父组件传来的方法，来操作state中的ChooseValue*/
  }

  handleActive(){
    let active=this.refs.active.value;
    this.props.SubmitChooseValue(active);
  }

  handleComplete(){
    let complete = this.refs.complete.value;
    this.props.SubmitChooseValue(complete);
  }
  render() {
    return (
      <div>
        <h2 style={styles.top}>show</h2>
        <div className="btn-group">
          <button
            type="submit"
            className="btn btn-primary"
            value="1"
            ref="all"
            onClick={this.handleAll.bind(this)}
          >
            全部
          </button>
          <button
            type="submit"
            className="btn btn-primary"
            value="2"
            ref="active"
            onClick={this.handleActive.bind(this)}
          >
            还未完成
          </button>
          <button
            type="submit"
            className="btn btn-primary"
            value="3"
            ref="complete"
            onClick={this.handleComplete.bind(this)}
          >
            已完成
          </button>
        </div>
      </div>
    );
  }
}

export default AppFooter;
