/* 优化组件
    一个组价的显示形态由多个状态决定情况非常常见，代码中
    混杂着对DOM的操作是一种不好的实践，手动管理数据与DOM
    之间的关系会导致代码可维护性差、容易出错。 
    所以 1.状态改变 -> 构建新的DOM元素更新页面
*/
class LikeButton {
    constructor() {
        this.state={isFalse : false};
    }
    createDomFromStr(str) { //字符串生成DOM元素
        this.el = document.createElement("div");
        this.el.innerHTML = str;
    }
    changeLikeText() {//点赞效果
        this.state.isFalse=!this.state.isFalse;
    }
    render() {
        this.createDomFromStr(`<button class="like-btn">
        <span class="like-text">${this.state.isFalse?"点赞":"取消"}</span>
        <span>👍</span>
        </button>`);
        this.changeLikeText();
        return this.el;
    }
}