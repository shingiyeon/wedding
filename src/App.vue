

<template>
  <div id="kyong">
    <MusicButton />
    <FlowerRain />
    <IntroMovie v-if="showMap" data-aos-offset="60" data-aos="fade-up"/>
    <Live v-if="showMap" data-aos="fade-up" data-aos-offset="60" data-aos-delay="100"/>
    <Gallery v-if="showMap" data-aos="fade-up" data-aos-offset="60" data-aos-delay="100"/>
    <LocationMap v-if="showMap" data-aos="fade-up" data-aos-offset="60" data-aos-delay="100"/>
    <CelebrationInfo v-if="showMap" data-aos="fade-up" data-aos-offset="60" data-aos-delay="100"/>
  </div>
</template>

<script>
import IntroMovie from "./components/IntroMovie.vue";
import Live from "./components/YoutubeLive.vue";
import CelebrationInfo from "./components/CelebrationInfo.vue";
import Gallery from "./components/PhotoGallery.vue";
import LocationMap from "./components/LocationMap.vue";
import FlowerRain from "./components/FlowerRain.vue";
import MusicButton from "./components/MusicButton.vue";

import AOS from "aos";

export default {
  name: "App",
  components: {
    IntroMovie,
    Live,
    CelebrationInfo,
    Gallery,
    FlowerRain,
    LocationMap,
    MusicButton
  },
  data() {
    return {
      showMap: false,
      isOpen: false
    };
  },
  methods: {
    handleClick(present) {
      this.isOpen = true;
      this.selectedPresent = present;
    },
    handleClose() {
      this.isOpen = false;
    },
  },
  mounted() {
    setTimeout(() => {
      this.showMap = true;
      this.$nextTick(() => AOS.init()) // DOM 렌더링 후 refresh
    }, 100) // 50~100ms 정도 지연
  }
};
</script>

<style>
@font-face {
  font-family: "Cafe24Oneprettynight";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_twelve@1.1/Cafe24Oneprettynight.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;
}
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
button {
  margin: 0;
  padding: 0;
  outline: none;
  border: none;
  font: inherit;
}
* {
  box-sizing: border-box;
}
#kyong {
  font-family: "Cafe24Oneprettynight", sans-serif;
  max-width: 460px;
  margin: 0 auto;
  font-size: 15px;
  color: #202121;
  background-color: #fffdf9;
}
</style>
