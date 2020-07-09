<template>
  <div class="about">
    <div class="content">
      <div class="row">
        <div class="left" :style="{ 'background-image': 'url(' + img_src + ')' }"></div>
        <div class="right">
          <div class="copy">
            <div class="title">{{ title }}</div>
            <div v-html="text" class="text"></div>
            <div class="cta-wrapper">
              <router-link to="/sobre-nos">
                <div class="cta">
                  <div class="txt">Saber mais ></div>
                </div>
              </router-link>
            </div>
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
      title: "",
      text: "",
      img_src: ""
    };
  },
  mounted() {
    axios
      .get("https://www.harmonizando.com/data_api/getAboutHomepage.php")
      .then(resp => {
        const data = resp.data;
        this.title = data[0].inicio_about_title;
        this.text = data[0].inicio_about_text;
        this.img_src =
          "https://beta.harmonizando.com/docs/images/main/" +
          data[0].__images_file;
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

.about {
  height: pxToEm(600);
  display: flex;
  flex-direction: row;
  padding: 0 pxToEm(130);

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
    margin: pxToEm(80) auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media only screen and (min-width: 992px) and (max-width: 1199px) {
      margin: 0 auto;
    }

    @media only screen and (min-width: 768px) and (max-width: 991px) {
      margin: 0 auto;
    }

    @media only screen and (min-width: 600px) and (max-width: 767px) {
      margin: 0 auto;
    }

    @media only screen and (max-width: 599px) {
      margin: 0 auto;
    }

    .row {
      @media only screen and (min-width: 1200px) and (max-width: 1919px) {
        display: flex;
        height: 100%;
      }

      @media only screen and (min-width: 992px) and (max-width: 1199px) {
        display: flex;
        height: 100%;
      }

      @media only screen and (min-width: 768px) and (max-width: 991px) {
        display: flex;
        height: 100%;
      }

      @media only screen and (min-width: 600px) and (max-width: 767px) {
        display: flex;
        height: 100%;
      }

      @media only screen and (max-width: 599px) {
        display: flex;
        height: 100%;
        flex-direction: column;
      }
    }

    .left {
      width: pxToEm(623);
      height: pxToEm(439);
      background-color: #f3f3f3;
      position: absolute;
      left: 0;
      background-size: cover;
      background-position: center;

      @media only screen and (min-width: 992px) and (max-width: 1199px) {
        position: relative;
        width: 100%;
        margin: pxToEm(40) pxToEm(40) pxToEm(40) 0;
      }

      @media only screen and (min-width: 768px) and (max-width: 991px) {
        position: relative;
        width: 100%;
        margin: pxToEm(40) pxToEm(40) pxToEm(40) 0;
      }

      @media only screen and (min-width: 600px) and (max-width: 767px) {
        position: relative;
        width: 100%;
        margin: pxToEm(40) pxToEm(40) pxToEm(40) 0;
      }
      
      @media only screen and (max-width: 599px) {
        position: relative;
        width: 100%;
        margin: pxToEm(40) pxToEm(0) pxToEm(40) 0;
      }
    }

    .right {
      position: absolute;
      width: pxToEm(720);
      height: pxToEm(310);
      background-color: #fafafa;
      border-radius: pxToEm(10);
      box-shadow: pxToEm(10) pxToEm(11) pxToEm(17) rgba(0, 0, 0, 0.1);
      top: pxToEm(25);
      right: 0;
      padding: pxToEm(40) pxToEm(60);

      @media only screen and (min-width: 1200px) and (max-width: 1919px) {
        max-width: pxToEm(600);
        width: 100%;
        height: auto;
        top: 0;
      }

      @media only screen and (min-width: 992px) and (max-width: 1199px) {
        position: relative;
        width: 100%;
        background-color: #fff;
        border-radius: 0;
        padding: 0;
        box-shadow: none;
        top: 0;
        margin: auto;
      }

      @media only screen and (min-width: 768px) and (max-width: 991px) {
        position: relative;
        width: 100%;
        background-color: #fff;
        border-radius: 0;
        padding: 0;
        box-shadow: none;
        top: 0;
        margin: auto;
      }

      @media only screen and (min-width: 600px) and (max-width: 767px) {
        position: relative;
        width: 100%;
        height: 100%;
        background-color: #fff;
        border-radius: 0;
        padding: 0;
        box-shadow: none;
        top: 0;
        margin: auto;
      }

      @media only screen and (max-width: 599px) {
        position: relative;
        width: 100%;
        height: auto;
        background-color: #fff;
        border-radius: 0;
        padding: 0;
        box-shadow: none;
        top: 0;
        margin: auto;
        margin-bottom: pxToEm(40);
      }

      .copy {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        @media only screen and (max-width: 767px) {
          justify-content: center;
          align-items: center;
        }

        .title {
          font-size: pxToEm(36);
          color: #707070;
        }

        .text {
          font-size: pxToEm(20);
          color: #707070;
          line-height: 1.5em;

          @media only screen and (max-width: 599px) {
            line-height: 1.1em;
            text-align: center;
          }
        }

        .cta-wrapper {
          width: pxToEm(170);
          margin-top: pxToEm(10);

          .cta {
            width: pxToEm(170);
            height: pxToEm(50);
            border-radius: pxToEm(10);
            background-color: #91c569;
            display: flex;
            align-items: center;
            justify-content: center;

            .txt {
              font-size: pxToEm(20);
              color: #fff;
            }
          }
        }
      }
    }
  }
}
</style>
