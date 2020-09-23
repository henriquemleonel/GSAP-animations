<template>
  <div class="app-page">
    <div class="spacer s0"></div>
    <div id="parallax1" class="parallaxParent">
      <div style="background-image: url(../../assets/img/example_parallax_bg1.png);"></div>
    </div>
    <div class="spacer s1">
      <div class="box2 blue">
        <p>Content 1</p>
        <a href="#" class="viewsource">view source</a>
      </div>
    </div>
    <div class="spacer s0"></div>
    <div id="parallax2" class="parallaxParent">
      <div style="background-image: url(../../assets/img/example_parallax_bg2.png);"></div>
    </div>
    <div class="spacer s1">
      <div class="box2 blue">
        <p>Content 2</p>
        <a href="#" class="viewsource">view source</a>
      </div>
    </div>
    <div class="spacer s0"></div>
    <div id="parallax3" class="parallaxParent">
      <div style="background-image: url(../../assets/img/example_parallax_bg3.png);"></div>
    </div>
    <div class="spacer s2"></div>
  </div>
</template>

<script>
import {ScrollMagic, Linear } from "scrollmagic";
// import gsap from "gsap/all";

export default {
  name: "Home",
  components: {},
  mounted() {
    const controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "200%"}});

    new ScrollMagic.Scene({triggerElement: "#parallax1"})
      .setTween("#parallax1 > div", {y: "80%", ease: Linear.easeNone})
      .addIndicators()
      .addTo(controller);

    new ScrollMagic.Scene({triggerElement: "#parallax2"})
      .setTween("#parallax2 > div", {y: "80%", ease: Linear.easeNone})
      .addIndicators()
      .addTo(controller);

    new ScrollMagic.Scene({triggerElement: "#parallax3"})
      .setTween("#parallax3 > div", {y: "80%", ease: Linear.easeNone})
      .addIndicators()
      .addTo(controller);
  },
};
</script>

<style lang="scss">

.parallaxParent {
  height: 100vh;
  overflow: hidden;
}

.parallaxParent > * {
  height: 200%;
  position: relative;
  top: -100%;
}

</style>

