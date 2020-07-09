<template>
  <div class="banner">
    <div class="images">
      <div
        class="image"
        v-for="img in images"
        :key="img.id"
        :style="{'background-image': 'url(' + img.src + ')'}"
      ></div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import axios from "axios";

export default {
  data() {
    return {
      images: [
        {
          src: "src"
        }
      ]
    };
  },
  methods: {
    bannerAnimate() {
      $(".images > div:gt(0)").hide();

      setInterval(function() {
        $(".images > div:first")
          .fadeOut(1000)
          .next()
          .fadeIn(1000)
          .end()
          .appendTo(".images");
      }, 3000);
    }
  },
  mounted() {
    var map = Array.prototype.map;
    var vm = this;
    axios
      .get("https://www.harmonizando.com/data_api/getSlideshow.php")
      .then(resp => {
        const data = resp.data;
        var its = [];

        map.call(data, function(d) {
          its.push({
            src:
              "https://beta.harmonizando.com/docs/images/crop/" +
              d.__images_file
          });
        });

        vm.$data.images = its;
      })
      .then(() => {
        vm.bannerAnimate();
      });
  }
};
</script>

<style lang="scss" scoped>
@function pxToEm($value) {
  $point: ($value * 3) / 4;
  $yem: $point / 12;

  @return $yem * 1rem;
}

.banner {
  margin-top: pxToEm(90);
  // padding: 0 pxToEm(130);
  height: pxToEm(390);
  background-color: #cbcbcb;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media only screen and (min-width: 1200px) {
    // padding: 0 pxToEm(80);
  }

  .images {
    width: 100%;
    height: 100%;
    position: relative;

    .image {
      position: absolute;
      width: 100%;
      height: 100%;
      background-size: cover;
      background-position: center;
    }
  }
}
</style>
