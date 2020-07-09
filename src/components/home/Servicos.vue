<template>
  <div class="servicos">
    <div class="content">
      <div class="title">A nossa oferta</div>
      <div class="items">
        <div class="item" v-for="item in items" :key="item.id">
          <div class="row subtitle">
            <div class="icon" :style="{ 'background-image': 'url(' + item.icon_src + ')' }"></div>
            <div class="txt">{{ item.title }}</div>
          </div>
          <div class="row">
            <div class="copy">{{ item.text }}</div>
          </div>
          <div class="row cta-wrapper">
            <router-link :to="item.ref">
              <div class="cta">
                <div class="txt">Saber mais ></div>
              </div>
            </router-link>
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
      items: [
        {
          title: "titulo",
          text: "texto",
          icon_src: "src",
          ref: ""
        }
      ]
    };
  },
  mounted() {
    var map = Array.prototype.map;
    var vm = this;
    axios
      .get("https://www.harmonizando.com/data_api/getServicosHomepage.php")
      .then(resp => {
        const data = resp.data;
        var its = [];
        map.call(data, function(d) {
          vm.items[0].title = d.inicio_servicos_title;
          var text = d.inicio_servicos_text;
          // remove HTML p tag
          var div = document.createElement("div");
          div.innerHTML = text;
          var txt = div.textContent || div.innerText || "";

          vm.items[0].text = txt;
          vm.items[0].icon_src = d.__images_file;
          its.push({
            title: d.inicio_servicos_title,
            text: txt,
            icon_src:
              "https://beta.harmonizando.com/docs/images/main/" +
              d.__images_file,
            ref: "/servicos/" + d.inicio_servicos_ref
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

.servicos {
  height: pxToEm(600);
  display: flex;
  flex-direction: row;
  padding: 0 pxToEm(130);
  background-color: #fafafa;

  @media only screen and (min-width: 1200px) and (max-width: 1919px) {
    padding: 0 pxToEm(80);
  }

  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    padding: 0 pxToEm(60);
  }

  @media only screen and (min-width: 768px) and (max-width: 991px) {
    padding: 0 pxToEm(60);
  }

  @media only screen and (max-width: 767px) {
    padding: 0 pxToEm(20);
    height: auto;
  }

  .content {
    position: relative;
    max-width: pxToEm(1400);
    width: 100%;
    margin: pxToEm(80) auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media only screen and (max-width: 767px) {
      margin: pxToEm(40) auto;
    }

    .title {
      font-size: pxToEm(40);
      color: #707070;
      text-align: center;
    }

    .items {
      display: flex;
      justify-content: space-between;

      @media only screen and (max-width: 599px) {
        flex-direction: column;
        align-items: center;
      }

      .item {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: pxToEm(420);
        height: auto;
        align-items: center;

        @media only screen and (max-width: 1919px) {
          align-items: center;
          width: 50%;
        }

        @media only screen and (max-width: 599px) {
          width: 100%;
          height: 100%;
          margin-bottom: pxToEm(40);
        }

        .subtitle {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;

          @media only screen and (max-width: 599px) {
            // align-self: flex-start;
          }

          .icon {
            width: pxToEm(87);
            height: pxToEm(87);
            background-color: #fff;
            border-radius: 50%;
            background-size: cover;
          }

          .txt {
            font-size: pxToEm(30);
            color: #707070;
            margin-bottom: pxToEm(15);
          }
        }

        .copy {
          color: #707070;
          font-size: pxToEm(20);
          line-height: 1.5em;
          height: pxToEm(150);
          overflow: hidden;
          text-align: center;
          margin-bottom: pxToEm(15);

          @media only screen and (max-width: 1919px) {
            text-align: center;
          }

          @media only screen and (max-width: 599px) {
            height: 100%;
          }
        }

        .cta-wrapper {
          @media only screen and (max-width: 599px) {
            margin-top: pxToEm(20);
          }
          .cta {
            width: pxToEm(170);
            height: pxToEm(50);
            background-color: #91c569;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: pxToEm(10);

            .txt {
              color: #fff;
              font-size: pxToEm(20);
            }
          }
        }
      }
    }
  }
}
</style>
