/* 结构复用 */
class LikeButton {
    render() {
        return `   <button id='like-btn'>
        <span class='like-text'>赞</span>
        <span>👍</span>
      </button>`
    }
}

//第一个按钮
let wrapper=document.querySelector("#box1");
let likeButton1=new LikeButton();
wrapper.innerHTML=likeButton1.render();

//第二个按钮
let wrapper2=document.querySelector("#box2");
let likeButton2=new LikeButton();
wrapper2.innerHTML=likeButton2.render();

