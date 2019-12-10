class LikeButton {
    constructor() {
        this.isFalse = false;
    }
    createDomFromStr(str) { //字符串生成DOM元素
        this.el = document.createElement("div");
        this.el.innerHTML = str;
    }
    changeLikeText() {//点赞效果
        let likeBtn = this.el.querySelector(".like-btn");
        let likeText = likeBtn.querySelector(".like-text");
        likeBtn.addEventListener('click', function () {
            this.isFalse = !this.isFalse;
            likeText.innerHTML =this.isFalse? "取消":"点赞";
        });
    }
    render() {
        this.createDomFromStr(`<button class="like-btn">
        <span class="like-text">点赞</span>
        <span>👍</span>
        </button>`);
        this.changeLikeText();
        return this.el;
    }
}