<template>
  <div>
    <SectionDivider />
    <div class="gallery">
      <img src="~@/assets/images/bunny.png" class="bunny" />
      <div class="description">
        photo gallery
      </div>
      <div></div>
      <div class="gallery-container" ref="gal">
        <div class="gallery-inner">
          <div class="gallery-item" v-for="n in 16" :key="n">
            <div class="image">
              <img
                :src="`/wedding/gallery/${n - 1}.jpeg`"
                
              />
            </div>
            <div class="arch"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SectionDivider from './SectionDivider.vue';

export default {
  name: "PhotoGallery",
  components: {
    SectionDivider
  },
  data() {
    return {
      scrollX: 0,
      width: 320,
    };
  },
  mounted() {
    this.$refs.gal.addEventListener("scroll", (event) => {
      this.scrollX = event.target.scrollLeft;
    });
    this.width = Math.max(
      document.documentElement.clientWidth || 0,
      window.innerWidth || 0
    );
    this.$refs.gal.scrollLeft = 0;
  },
};
</script>

<style lang="scss" scoped>
.gallery {
  padding-top: 30px;
  padding-bottom: 10px;
  padding-left: $padding-vertical;
  padding-right: $padding-vertical;
  text-align: center;
  color: #295138;
  overflow: hidden;
  .bunny {
    width: 65px;
    margin-bottom: 20px;
  }
  .description {
    font-size: 12px;
    letter-spacing: 6px;
    margin-bottom: 30px;
  }
  .gallery-container {
    padding-left: 3%;
    padding-right: 3%;
    margin-left: -22px;
    margin-right: -22px;
    overflow-x: auto;
    .gallery-inner {
      display: flex;
      width: 2500px;
      .gallery-item {
        flex: 0 0 198px;
        position: relative;
        width: 198px;
        height: 352px;
        margin-right: 10px;
        &:before {
          position: absolute;
          top: 0;
          left: -1px;
          display: block;
          content: "";
          width: 2px;
          height: 352px;
          background-color: #fffdf9;
          z-index: 11;
        }
        &:after {
          position: absolute;
          top: 0;
          right: -1px;
          display: block;
          content: "";
          width: 2px;
          height: 352px;
          background-color: #fffdf9;
          z-index: 11;
        }
        .arch {
          position: absolute;
          top: 0;
          left: 0;
          width: 198px;
          height: 352px;
          background-image: url("~@/assets/images/arch.png");
          background-repeat: no-repeat;
          background-size: 198px auto;
          background-position: top left;
          z-index: 10;
        }
        .image {
          position: absolute;
          top: 0;
          left: 0;
          width: 198px;
          height: 352px;
          overflow: hidden;
          img {
            transition: transform 100ms;
            width: 198px;
            height: 352px;
          }
        }
      }
    }
  }
}
</style>
