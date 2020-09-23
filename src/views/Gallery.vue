<template>
  <div class="app-page">
    <div class="page-content">
      <div class="container">
        <div ref="scrollIn" class="scroll-indicator"></div>
        <div ref="scrollIn2" class="scroll">scroll</div>

        <button ref="close" class="close" @click="close()">
          <span class="lin1"></span>
          <span class="lin2"></span>
        </button>
        <button ref="lb" class="button-left" @click="leftClick()" @mouseenter="leftMouseEnter()" @mouseleave="leftMouseLeave()"><span class="view">left</span></button>
        <button ref="rb" class="button-right" @click="rightClick()" @mouseenter="rightMouseEnter()" @mouseleave="rightMouseLeave()"><span class="view">right</span></button>

        <div class="child-left-1">
          <div class="left1 left"></div>
          <div class="left2 left"></div>
          <div class="left3 left"></div>
          <div class="left4 left"></div>
          <div class="left5 left"></div>
        </div>
        <div class="child-right-1">
          <div class="right1 right"></div>
          <div class="right2 right"></div>
          <div class="right3 right"></div>
          <div class="right4 right"></div>
          <div class="right5 right"></div>
        </div>
        <div class="child-left-2">
          <div class="left1 left"></div>
          <div class="left2 left"></div>
          <div class="left3 left"></div>
          <div class="left4 left"></div>
          <div class="left5 left"></div>
        </div>
        <div class="child-right-2">
          <div class="right1 right"></div>
          <div class="right2 right"></div>
          <div class="right3 right"></div>
          <div class="right4 right"></div>
          <div class="right5 right"></div>
        </div>
        <div class="child-left-3">
          <div class="left1 left"></div>
          <div class="left2 left"></div>
          <div class="left3 left"></div>
          <div class="left4 left"></div>
          <div class="left5 left"></div>
        </div>
        <div class="child-right-3">
          <div class="right1 right"></div>
          <div class="right2 right"></div>
          <div class="right3 right"></div>
          <div class="right4 right"></div>
          <div class="right5 right"></div>
        </div>
        <div class="child-left-4">
          <div class="left1 left"></div>
          <div class="left2 left"></div>
          <div class="left3 left"></div>
          <div class="left4 left"></div>
          <div class="left5 left"></div>
        </div>
        <div class="child-right-4">
          <div class="right1 right"></div>
          <div class="right2 right"></div>
          <div class="right3 right"></div>
          <div class="right4 right"></div>
          <div class="right5 right"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import {ScrollMagic, Linear } from "scrollmagic";
// import gsap from "gsap/all";
import { TimelineLite, Power3, Power4 } from 'gsap';

// const $ = document.querySelectorAll;

// let tl = new TimelineLite({repeat: 0});
// const left = document.querySelector('.child-left-2>.left');
// const right = document.querySelector('.child-right-2>.right');
// const scrollIn = document.querySelectorAll('.scroll-indicator');
// const scrollIn2 = document.querySelectorAll('.scroll');
// const { scrollIn, scrollIn2 } = this.$refs;
// const close = document.querySelector('.close');
// const lb = document.querySelector('.button-left');
// const rb = document.querySelector('.button-right');

export default {
  name: "Home",
  components: {},
  data() {
    return {
      curPage: 1,
      scrolling: true,
      viewscroll: false,
      hoverr: true,
      animationTime: 1,
      lbutton: false,
      documentTop: 0,
    }
  },
  created() {
    // document.addEventListener('scroll', this.handleScroll);
    document.addEventListener('wheel', this.handleWheel);
  },
  destroyed() {
    // document.removeEventListener('scroll', this.handleScroll);
    document.removeEventListener('wheel', this.handleWheel);
  },
  mounted() {
    let tl = new TimelineLite({repeat: 0});

    for (let i = 2; i <= 4; i++) {
      for (let j = 1; j <= 5; j++) {
        tl.set(document.querySelectorAll(`.child-left-${i}`, `.left${j}`), {x: 0}, '+=100%');
        tl.set(document.querySelectorAll(`.child-right-${i}`, `.right${j}`), {x: 0}, '-=100%');
      }
    }

    tl.set(close, {
      scaleX: 0,
      transformOrigin: 'center'
    });
  },
  methods: {
    handleScroll() {
      console.log('scroll');
    },

    handleWheel(event) {
      if (event.deltaY < 0) {
        console.log("scrolling up");
        if (this.curPage === 1)
            return;
          this.navigateUp();
      } else if (event.deltaY > 0) {
        console.log("scrolling down")
        if (this.curPage === 4)
          return;
          this.navigateDown();
      }
    },

    navigateDown() {
      console.log('navigateDown');
      const { scrollIn, scrollIn2 } = this.$refs;

      if (this.scrolling && !this.viewscroll) {
        console.log('ww');
        this.scrolling = false;
        let tl = new TimelineLite({repeat: 0});
        for (let i = 1; i <= 5; i++) {
          if (i === 1 || i === 5) {
            tl.to([
              document.querySelectorAll('.child-left-' + this.curPage + '>.left' + i),
              document.querySelectorAll('.child-left-' + (this.curPage + 1) + '>.left' + i)
            ], this.animationTime, {
              x: '-=100%',
              ease: Power3.easeInOut
            }, .3).to([
              document.querySelectorAll('.child-right-' + this.curPage + '>.right' + i),
              document.querySelectorAll('.child-right-' + (this.curPage + 1) + '>.right' + i)
            ], this.animationTime, {
              x: '+=100%',
              ease: Power3.easeInOut
            }, .3);
            console.log('break1');
          } else if (i === 3) {
            tl.to([
              document.querySelectorAll('.child-left-' + this.curPage + '>.left' + i),
              document.querySelectorAll('.child-left-' + (this.curPage + 1) + '>.left' + i)
            ], this.animationTime, {
              x: '-=100%',
              ease: Power3.easeInOut
            }, .15).to([
              document.querySelectorAll('.child-right-' + this.curPage + '>.right' + i),
              document.querySelectorAll('.child-right-' + (this.curPage + 1) + '>.right' + i)
            ], this.animationTime, {
              x: '+=100%',
              ease: Power3.easeInOut
            }, .15);
            console.log('break2');
          } else {
            tl.to([
              document.querySelectorAll('.child-left-' + this.curPage + '>.left' + i),
              document.querySelectorAll('.child-left-' + (this.curPage + 1) + '>.left' + i)
            ], this.animationTime, {
              x: '-=100%',
              ease: Power3.easeInOut
            }, .25).to([
              document.querySelectorAll('.child-right-' + this.curPage + '>.right' + i),
              document.querySelectorAll('.child-right-' + (this.curPage + 1) + '>.right' + i)
            ], this.animationTime, {
              x: '+=100%',
              ease: Power3.easeInOut
            }, .25);
            console.log('break3');
          }
          console.log('end if');
        }
        this.curPage++;
        if (this.curPage == 4) {
          console.log('current page 4');
          scrollIn.classList.add('opacity');
          scrollIn2.classList.add('opacity');
        } else if (this.curPage != 4) {
          console.log('current page inst 4');
          scrollIn.classList.remove('opacity');
          scrollIn2.classList.remove('opacity');
        }

        setTimeout(() => {
          this.scrolling = true;
        }, 1300);
      }
    },

    navigateUp() {
      const { scrollIn, scrollIn2 } = this.$refs;

      if (this.scrolling && !this.viewscroll) {
        this.scrolling = false;
        let tl = new TimelineLite({repeat: 0});
        for (let i = 1; i <= 5; i++) {
          if (i === 1 || i === 5) {
            tl.to([
              document.querySelectorAll('.child-left-' + this.curPage + '>.left' + i),
              document.querySelectorAll('.child-left-' + (this.curPage - 1) + '>.left' + i)
            ], this.animationTime, {
              x: '+=100%',
              ease: Power3.easeInOut
            }, .4).to([
              document.querySelectorAll('.child-right-' + this.curPage + '>.right' + i),
              document.querySelectorAll('.child-right-' + (this.curPage - 1) + '>.right' + i)
            ], this.animationTime, {
              x: '-=100%',
              ease: Power3.easeInOut
            }, .4);
          } else if (i === 3) {
            tl.to([
              document.querySelectorAll('.child-left-' + this.curPage + '>.left' + i),
              document.querySelectorAll('.child-left-' + (this.curPage - 1) + '>.left' + i)
            ], this.animationTime, {
              x: '+=100%',
              ease: Power3.easeInOut
            }, .11).to([
              document.querySelectorAll('.child-right-' + this.curPage + '>.right' + i),
              document.querySelectorAll('.child-right-' + (this.curPage - 1) + '>.right' + i)
            ], this.animationTime, {
              x: '-=100%',
              ease: Power3.easeInOut
            }, .11);
          } else {
            tl.to([
              document.querySelectorAll('.child-left-' + this.curPage + '>.left' + i),
              document.querySelectorAll('.child-left-' + (this.curPage - 1) + '>.left' + i)
            ], this.animationTime, {
              x: '+=100%',
              ease: Power3.easeInOut
            }, .25).to([
              document.querySelectorAll('.child-right-' + this.curPage + '>.right' + i),
              document.querySelectorAll('.child-right-' + (this.curPage - 1) + '>.right' + i)
            ], this.animationTime, {
              x: '-=100%',
              ease: Power3.easeInOut
            }, .25);
          }
        }
        this.curPage--;
        if (this.curPage == 4) {
          scrollIn.addClass('opacity');
          scrollIn2.addClass('opacity');
        } else if (this.curPage != 4) {
          scrollIn.classList.remove('opacity');
          scrollIn2.classList.remove('opacity');
        }

        setTimeout(() => {
          this.scrolling = true;
        }, 1300);
      }
    },

    leftMouseEnter() {
      console.log('left mouse enter');
      // if (this.scrolling) {
      //   this.scrolling = false;
      //   let tl = new TimelineLite({repeat: 0});
      //   tl.to(document.querySelectorAll(`.child-left-${this.curPage}`), 1, {
      //     className: '+=l1',
      //     ease: Power4.easeOut
      //   }, 0).to(document.querySelectorAll(`.child-right-${this.curPage}`), 1, {
      //     className: '+=r1',
      //     ease: Power4.easeOut
      //   }, 0);
      //   for (let j = 0; j <= 5; j++) {
      //     tl.to(document.querySelectorAll(`.child-left-${this.curPage}`, `.left${j}`), 1, {
      //       className: '+=l1',
      //       ease: Power4.easeOut
      //     }, 0);
      //   }
      // }
    },

    leftMouseLeave() {
      // this.scrolling = true;
      // let tl = new TimelineLite({repeat: 0});
      // tl.to(document.querySelectorAll(`.child-left-${this.curPage}`), 1, {
      //   className: '-=l1',
      //   ease: Power4.easeOut
      // }, 0).to(document.querySelectorAll(`.child-right-${this.curPage}`), 1, {
      //   className: '-=r1',
      //   ease: Power4.easeOut
      // }, 0);
      // for (let j = 0; j <= 5; j++) {
      //   tl.to(document.querySelectorAll(`.child-left-${this.curPage}`, `.left${j}`), 1, {
      //     className: '-=l1',
      //     ease: Power4.easeOut
      //   }, 0);
      // }
    },

    leftClick() {
      const { scrollIn, scrollIn2, lb, rb, close } = this.$refs;

      console.log('left mouse click');
      if (!this.scrolling) {
        console.log(this.scrolling);
        this.viewscroll = true;
        let tl = new TimelineLite({repeat: 0});
        this.lbutton = true;
        tl.to(close, .5, {
          scaleX: 1,
          transformOrigin: 'center',
          autoAlpha: 1
        }, 0);
        tl.to(document.querySelectorAll(`.child-left-${this.curPage}`), {
          duration: 1,
          className: '+=cl1',
          ease: Power4.easeOut
        }, 0).to(document.querySelectorAll(`.child-right-${this.curPage}`), {
          duration: 1,
          className: '+=cr1',
          ease: Power4.easeOut
        }, 0);
        for (let j = 0; j <= 5; j++) {
          tl.to(document.querySelectorAll(`.child-left-${this.curPage}`, `.left${j}`), {
            duration: 1,
            className: '+=cl1',
            ease: Power4.easeOut
          }, 0);
        }
        tl.to(lb, .4, {
          width: '0px'
        }, 0);
        tl.to(rb, .4, {
          width: '0px'
        }, 0);
        this.scrolling = false;
        if (this.curPage <= 3) {
          scrollIn.classList.add('opa');
          scrollIn2.classList.add('opa');
        }
      }
      setTimeout(() => {
        this.scrolling = false
        console.log(this.scrolling);
      }, 100);
    },

    rightMouseEnter() {
      console.log('right mouse enter');
      if (this.scrolling) {
        this.scrolling = false;
        let tl = new TimelineLite({repeat: 0});
        tl.to(document.querySelectorAll(`.child-left-${this.curPage}`), 1, {
          className: '+=l2',
          ease: Power4.easeOut
        }, 0).to(document.querySelectorAll(`.child-right-${this.curPage}`), 1, {
          className: '+=r2',
          ease: Power4.easeOut
        }, 0);
        for (let j = 0; j <= 5; j++) {
          tl.to(document.querySelectorAll(`.child-right-${this.curPage}`, `.right${j}`), 1, {
            className: '+=rr',
            ease: Power4.easeOut
          }, 0);
        }
      }
    },

    rightMouseLeave() {
      console.log('right mouse leave');
      this.scrolling = true;
      let tl = new TimelineLite({repeat: 0});
      tl.to(document.querySelectorAll(`.child-left-${this.curPage}`), 1, {
        className: '-=l2',
        ease: Power4.easeOut
      }, 0).to(document.querySelectorAll(`.child-right-${this.curPage}`), 1, {
        className: '-=r2',
        ease: Power4.easeOut
      }, 0);
      for (let j = 0; j <= 5; j++) {
        tl.to(document.querySelectorAll(`.child-right-${this.curPage}`, `.right${j}`), 1, {
          className: '-=rr',
          ease: Power4.easeOut
        }, 0);
      }
    },

    rightClick() {
      const { scrollIn, scrollIn2, lb, rb, close } = this.$refs;

      console.log('right mouse click');
      if (!this.scrolling) {
        this.viewscroll = true;
        let tl = new TimelineLite({repeat: 0});
        tl.to(close, .5, {
          scaleX: 1,
          transformOrigin: 'center',
          ease: Power4.easeOut
        }, 0);
        tl.to(document.querySelectorAll(`.child-left-${this.curPage}`), 1, {
          className: '+=cl2',
          ease: Power4.easeOut
        }, 0).to(document.querySelectorAll(`.child-right-${this.curPage}`), 1, {
          className: '+=cr2',
          ease: Power4.easeOut
        }, 0);
        for (let j = 0; j <= 5; j++) {
          tl.to(document.querySelectorAll(`.child-right-${this.curPage}`, `.right${j}`), 1, {
            className: '+=crr',
            ease: Power4.easeOut
          }, 0);
        }
        tl.to(lb, .4, {
          width: '0px'
        }, 0);
        tl.to(rb, .4, {
          width: '0px'
        }, 0);
        this.scrolling = false;
        if (this.curPage <= 3) {
          scrollIn.classList.add('opa');
          scrollIn2.classList.add('opa');
        }
      }
      setTimeout(() => {
        this.scrolling = false
      }, 100);
    },

    close() {
      const { scrollIn, scrollIn2, lb, rb, close } = this.$refs;
      console.log('close click');

      this.scrolling = true;
      this.viewscroll = false;
      if (this.curPage <= 3) {
        scrollIn.classList.remove('opa');
        scrollIn2.classList.remove('opa');
      }
      let tl = new TimelineLite({repeat: 0});
      if (this.lbutton) {
        tl.to(close, .5, {
          scaleX: 0,
          transformOrigin: 'center',
          ease: Power4.easeOut
        }, 0).to(document.querySelectorAll(`.child-left-${this.curPage}`), 1, {
          className: '-=cl1',
          ease: Power4.easeOut
        }, 0).to(document.querySelectorAll(`.child-right-${this.curPage}`), 1, {
          className: '-=cr1',
          ease: Power4.easeOut
        }, 0)
        for (let j = 0; j <= 5; j++) {
          tl.to(document.querySelectorAll(`.child-left-${this.curPage}`, `.left${j}`), 1, {
            className: '-=cl1',
            ease: Power4.easeOut
          }, 0);
        };
        this.lbutton = false;
        tl.to(lb, .4, {
          width: '100px'
        }, 0).to(rb, .4, {
          width: '100px'
        }, 0);
      } else {
        tl.to(close, .5, {
          scaleX: 0,
          transformOrigin: 'center',
          ease: Power4.easeOut
        }, 0);
        tl.to(document.querySelectorAll(`.child-left-${this.curPage}`), 1, {
          className: '-=cl2',
          ease: Power4.easeOut
        }, 0).to(document.querySelectorAll(`.child-right-${this.curPage}`), 1, {
          className: '-=cr2',
          ease: Power4.easeOut
        }, 0);
        for (let j = 0; j <= 5; j++) {
          tl.to(document.querySelectorAll(`.child-right-${this.curPage}`, `.right${j}`), 1, {
            className: '-=crr',
            ease: Power4.easeOut
          }, 0);
        }
        tl.to(lb, .4, {
          width: '100px'
        }, 0).to(rb, .4, {
          width: '100px'
        }, 0);
      }
    },

    methodInTheEnd() {
      console.log('is the end');
    },
  },
};
</script>

<style lang="scss">

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  border: none;
  overflow: hidden;
}
@import url( 'https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400');

.container {
  width: 100vw;
  height: 100vh;
  position: fixed;
  overflow: hidden;
}

.child-left-1,
.child-left-2,
.child-left-3,
.child-left-4,
.child-right-1,
.child-right-2,
.child-right-3,
.child-right-4 {
  position: absolute;
  width: 50vw;
  height: 100vh;
  overflow: hidden;
  }

.child-right-1,
.child-right-2,
.child-right-3,
.child-right-4 {
  margin-left: 50vw;
}

.left,
.right {
  position: relative;
  width: 50vw;
  height: 20vh;
  background-attachment: fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  overflow: hidden;
}

.child-left-1,
.child-right-1 {
  z-index: 2;

  .left {
    background-image: url('https://images.unsplash.com/photo-1482625974755-1fccd66c1ceb?dpr=2&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=&bg=');
  }

  .right {
    background-image: url('https://images.unsplash.com/photo-1497380297067-185ce1f97bf9?dpr=2&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=&bg=');
  }
}

.child-left-2,
.child-right-2 {
  z-index: 4;

  .left {
    background-image: url('https://images.unsplash.com/photo-1497380297067-185ce1f97bf9?dpr=2&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=&bg=');
  }

  .right {
    background-image: url('https://images.unsplash.com/photo-1492762075047-0ef7e7a7816e?dpr=2&auto=format&fit=crop&w=1500&h=1001&q=80&cs=tinysrgb&crop=&bg=');
  }
}

.child-left-3,
.child-right-3 {
  z-index: 8;

  .left {
    background-image: url('https://images.unsplash.com/photo-1492762075047-0ef7e7a7816e?dpr=2&auto=format&fit=crop&w=1500&h=1001&q=80&cs=tinysrgb&crop=&bg=');
  }

  .right {
    background-image: url('https://images.unsplash.com/photo-1456610981819-586798dc53e2?dpr=2&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=&bg=');
  }
}

.child-left-4,
.child-right-4 {
  z-index: 10;

  .left {
    background-image: url('https://images.unsplash.com/photo-1456610981819-586798dc53e2?dpr=2&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=&bg=');
  }

  .right {
    background-image: url('https://images.unsplash.com/photo-1489395023347-f154a1b4a54e?dpr=2&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=&bg=');
  }
}

.button-left,
.button-right {
  width: 100px;
  height: 50px;
  background: #1b1b1b;
  z-index: 20;
  overflow: hidden;
  font-family: 'Roboto', sans-serif;
  font-weight: 100;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  transform: skewX(-6deg);
  margin-top: auto;
  margin-bottom: auto;
  text-align: center;
  padding-top: 14px;
  transition: all 0.5s cubic-bezier(0.785, 0.135, 0.15, 0.86);
  cursor: pointer;
  // -webkit-box-shadow: 0 0 25px 0 rgba(0,0,0,0.75);
  // -moz-box-shadow: 0 0 25px 0 rgba(0,0,0,0.75);
  // box-shadow: 0 0 25px 0 rgba(0,0,0,0.75);

  &:before {
    content: '';
    position: absolute;
    overflow: hidden;
    top: 25px;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100px;
    z-index: -1;
    height: 0;
    background: #fff;
    color: #1b1b1b;
    transition: all 0.5s cubic-bezier(0.785, 0.135, 0.15, 0.86);
  }

  &:hover {
    &:before {
      top: 0;
      height: 50px;
      padding-top: 14px;
    }
  }

  .view {
    color: #fff;
    mix-blend-mode: difference;
    z-index: 20;
  }
}

.button-left {
  margin-left: 19vw;
}

.button-right {
  margin-left: 69vw;
}

.l1{
width: 60vw;
}

.r1{
  width: 40vw ;
  margin-left: 60vw;
}

.l2{
width: 40vw;
}

.r2{
  width: 60vw ;
  margin-left: 40vw;
}
.rr{
  width: 60vw;
}

.cl1{
  width: 100vw;
}

.cr1{
  width: 0vw ;
  margin-left: 100vw;
}

.cl2{
width: 0vw;
}

.cr2{
  width: 100vw ;
  margin-left: 0vw;
}
.crr{
  width: 100vw;
}

.close{
  position: absolute;
  z-index: 30;
  width: 80px;
  height: 80px;
  background: #1b1b1b;
  top:0;
  bottom: 0;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
  cursor: pointer;

  span{
    display: block;
    position: absolute;
    width: 60px;
    height: 1px;
    background: #fff;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    margin-top: auto;
    margin-bottom: auto;
    cursor: pointer;
  }

  .lin1{
    transform-origin: center;
    transform: rotate(45deg);
  }
  .lin2{
    transform-origin: center;
    transform: rotate(-45deg);
  }

  &:hover{
    background: #fff;
    span{
      background: #000;
    }
  }
}

.scroll-indicator{
  width: 2px;
      position: absolute;
      height: 85px;
      background: #fff;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      margin-top: 95vh;
      margin-left: auto;
      margin-right: auto;
      z-index: 50;
      opacity: 1;
      transition: .4s;
      animation: ani 1s linear infinite;
}

@keyframes ani {
  0%{
    height: 0px;
  }

  25%{
    height: 85px;
  }

  55%{
    height: 85px;
  }

  100%{
    transform-origin: bottom;
    transform: scaleY(0);
  }
}


.scroll{
  font-family: 'Roboto', sans-serif;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    color: #fff;
    text-align: center;
    margin-top: 91vh;
    font-weight: 300;
    font-style: oblique;
    z-index: 50;
    opacity: 1;
    transition: .4s;
}

.opacity{
  opacity: 0;
}


</style>

