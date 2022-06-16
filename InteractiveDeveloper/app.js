//3번

 /* 6 */
 // 만들어둔 공을 import해서 Ball을 화면에 생성
 import {
    Ball
 } from './ball.js';

class App {
    constructor() {
        /* 1 */
        this.canvas = document.createElement('canvas'); //캔버스를 스크립트 코드로 하나 생성
        this.ctx = this.canvas.getContext('2d'); // 그리고 context를 가지고 옴

        // 스크립트상에서 작업하면 제어하기 좋음 = 코드가 모든 것을 다 처리
        document.body.appendChild(this.canvas);

        /* 2 */
        // 항상 윈도우에 리사이즈 이벤트를 걸어두고 시작
        // 현재 만들고자 하는 애니메이션의 크기를 아는 것이 중요해서 
        window.addEventListener('resize', this.resize.bind(this), false);
        this.resize();

         /* 7*/
         //draw 함수를 이용해서 Ball이 화면에 움직이는 것을 확인
         // 반지름을 60, 속도를 15로 줬는데 임의의 값 아무거나 넣어도 가능
         this.ball = new Ball(this.stageWidth, this.stageHeight, 60, 15);

        /* 4 */
        //request어쩌고 함수를 추가해서 애니메이션 구동 함수 불러옴
        window.requestAnimationFrame(this.animate.bind(this));
    }

    /* 3 */
    // 리사이즈 이벤트를 걸고 스크린 사이즈를 가져와서 애니메이션을 정의
    // 브라우저는 가변적이라 스크린사이즈를 가져오는 함수를 먼저 정의
    resize() {
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        this.canvas.width = this.stageWidth * 2;
        this.canvas.height = this.stageHeight * 2;
        this.ctx.scale(2, 2);
    }

    /* 5 */
    // 실제로 애니메이션을 구동시키는 함수 생성
    animate(t) { 
        window.requestAnimationFrame(this.animate.bind(this));

        /* 7*/
        this.ball.draw(this.ctx, this.stageWidth, this.stageHeight);

    }

}

window.onload = () => {
    new App();
};
