<template>
  <div class="parceiros">
    <div class="content">
      <div class="title">Os nossos parceiros</div>
      <div class="items">
        <div class="item" v-for="item in items" :key="item.id">
          <div class="row img">
            <img :src="item.img_src" />
          </div>
          <div class="row name">
            <div class="txt">{{ item.name }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import axios from "axios";

export default {
  data() {
    return {
      items: [{ name: "name", img_src: "src" }]
    };
  },
  mounted() {
    var map = Array.prototype.map;
    var vm = this;
    axios
      .get("https://www.harmonizando.com/data_api/getParceiros.php")
      .then(resp => {
        const data = resp.data;
        var its = [];
        map.call(data, function(d) {
          vm.items[0].name = d.parceiros_name;
          vm.items[0].img_src = d.__images_file;
          its.push({
            name: d.parceiros_name,
            img_src:
              "https://beta.harmonizando.com/docs/images/main/" +
              d.__images_file
          });
        });

        vm.$data.items = its;
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

.parceiros {
  height: pxToEm(430);
  display: flex;
  flex-direction: row;
  padding: 0 pxToEm(130);
  background-color: #fff;

  @media only screen and (min-width: 1200px) and (max-width: 1919px) {
    padding: 0 pxToEm(80);
  }

  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    padding: 0 pxToEm(60);
    height: auto;
  }

  @media only screen and (min-width: 768px) and (max-width: 991px) {
    padding: 0 pxToEm(40);
    height: auto;
  }

  @media only screen and (min-width: 600px) and (max-width: 767px) {
    padding: 0 pxToEm(20);
    height: auto;
  }

  @media only screen and (max-width: 599px) {
    padding: 0 pxToEm(20);
    height: auto;
  }

  .content {
    position: relative;
    max-width: pxToEm(1400);
    width: 100%;
    margin: pxToEm(50) auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .title {
      font-size: pxToEm(40);
      color: #707070;
      text-align: center;
      margin-bottom: pxToEm(30);
    }

    .items {
      display: flex;
      justify-content: space-between;

      @media only screen and (max-width: 599px) {
        flex-direction: row;
        flex-wrap: wrap;
      }

      .item {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 33%;
        height: pxToEm(225);

        @media only screen and (min-width: 1200px) and (max-width: 1919px) {
          height: pxToEm(225);
        }

        @media only screen and (min-width: 992px) and (max-width: 1199px) {
          height: pxToEm(225);
        }

        @media only screen and (min-width: 768px) and (max-width: 991px) {
          height: pxToEm(225);
        }

        @media only screen and (min-width: 600px) and (max-width: 767px) {
          height: pxToEm(225);
        }

        @media only screen and (max-width: 599px) {
          height: 100%;
          margin-bottom: pxToEm(40);
        }

        .row {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .img {
          color: #707070;
          font-size: pxToEm(20);
          line-height: 1.5em;

          @media only screen and (min-width: 600px) and (max-width: 1919px) {
            height: 100%;
            overflow: hidden;
          }

          @media only screen and (max-width: 599px) {
            height: 100%;
            overflow: hidden;
          }

          img {
            @media only screen and (min-width: 600px) and (max-width: 1919px) {
              height: 100%;
            }

            @media only screen and (max-width: 599px) {
              height: 100%;
              width: 100%;
            }
          }
        }

        .name {
          .txt {
            font-size: pxToEm(25);
            color: #707070;
          }
        }
      }
    }
  }
}
</style>
