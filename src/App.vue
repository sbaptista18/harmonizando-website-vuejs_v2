<template>
  <div id="app">
    <app-header></app-header>
    <banner></banner>
    <router-view style="flex: 1 1 auto;"></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
/* eslint-disable */
import Header from "./components/includes/Header";
import Banner from "./components/includes/Banner";
import Footer from "./components/includes/Footer";

export default {
  components: {
    appHeader: Header,
    banner: Banner,
    appFooter: Footer
  },
  methods: {
    stickyFooter() {
      var totalHeight = $("body").height();
      if ($(window).height() > totalHeight) {
        var marginBanner = parseInt($('.banner').css("margin-top"))
        var routerSection = $("#app > div:not(.menu-container):not(.banner):not(#footer)");

        var minSectionHeight = ($(window).height() - totalHeight);

        routerSection.css("min-height",routerSection.height() + minSectionHeight + "px");
      }
    }
  },
  // created(){
  //   console.log('created')
  //   this.stickyFooter();
  // },
  // mounted(){
  //   console.log('mounted')
  //   this.stickyFooter();
  // },
  updated(){
    this.stickyFooter();
  }
};
</script>

<style lang="scss">
html,
body {
  font-family: "Tahoma", sans-serif;
  scroll-behavior: smooth;
  margin: 0;
  font-size: 14px;
  height: auto;
  overflow-y: auto;

  &.open {
    overflow-y: hidden;
  }

  @media only screen and (max-width: 600px) {
    font-size: 8px;
  }

  @media only screen and (min-width: 600px) {
    font-size: 9px;
  }

  @media only screen and (min-width: 768px) {
    font-size: 10px;
  }

  @media only screen and (min-width: 992px) {
    font-size: 12px;
  }

  @media only screen and (min-width: 1200px) {
    font-size: 14px;
  }

  @media only screen and (min-width: 1920px) {
    font-size: 16px;
  }

  a {
    text-decoration: none;
    color: #707070;
  }
}

#app {
  height: auto;
  background-color: #fff;
  // display: flex;
  // flex-direction: column;

  > .container {
    padding: 0 130px;

    > div {
      max-width: 1920px;
      width: 100%;
      margin: auto;
    }
  }
}
</style>
