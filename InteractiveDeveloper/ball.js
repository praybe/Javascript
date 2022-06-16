// 4번
// Ball은 움직이는 공, 
export class Ball {
    // 스테이지사이즈와 반지름 그리고 속도를 가져옴
    constructor(stageWidth, stageHeight, radius, speed ) {
        /* 1 */
        this.radius = radius;
        this.vx = speed; //vx와 vy는 x,y 좌표값을 움직이는 속도
        this.vy = speed;
    
    
        /* 2 */
        // stage에 random으로 위치할 수 있게 함수를 정의
        const diameter = this.radius * 2;
        // '반지름'에서 '화면사이즈-반지름' 사이 랜덤값으로 두겠다.
        this.x = diameter + (Math.random() * (stageWidth - diameter)); 
        this.y = diameter + (Math.random() * (stageHeight - diameter));
    }
    
    
    /* 3 */
    // draw함수를 만들어서 context와 stageSize를 가져온다.
    draw(ctx, stageWidth, stageHeight) {
        // x와 y값에 vx와 vy값을 더해줘서 공이 움직이도록 한다
        this.x += this.vx;
        this.y += this.vy;

        /* 5 */
        this.bounceWindow(stageWidth, stageHeight);

        // 공에 색을 정하고 그림을 그린다.
        ctx.fillStyle = '#fdd700'
        ctx.beginPath();
        ctx.arc(this.x, this.y,  this.radius,  0, 2 * Math.PI);
        ctx.fill();
    }

    //여기까지 하면 캔버스 context에 그림을 그릴 수 있 는 함수 완성


    /* 4 */
    // 스테이지상 닿았는지 판단하는 함수
    bounceWindow(stageWidth, stageHeight) {
        const minX = this.radius;
        const maxX = stageWidth - this.radius;
        const minY = this.radius;
        const maxY = stageHeight - this.radius;

        // 닿으면 공이 반대로 튕기는거 구현
        if (this.x <= minX || this.x >= maxX) {
            this.vx *= -1;
            this.x += this.vx;
        } else if(this.y <= minY || this.y >= maxY) {
            this.vy *= -1;
            this.y += this.vy; 
        }
 
    }
    
     
//app.js로 가서 ball.js를 import 해준다.
}
