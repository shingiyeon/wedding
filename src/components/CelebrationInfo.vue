<template>
  <div>
    <SectionDivider />
    <div class="celebrate">
      <img src="~@/assets/images/cat.png" class="cat" />
      <div class="description">how to celebrate</div>
      <h2 class="h2">축하의 마음 전하는 방법</h2>
      <div class="accountDisplay" @click="bumExpanded = !bumExpanded" 
      :class="{active: bumExpanded}"> 
        <Transition name="display" mode="out-in">
          <button class="accountInfo" v-if="!showBumInfo">신랑측 계좌번호</button>
          <div v-else>
            <p class="black">신랑 혼주 계좌</p>
            <p class="account">{{bumdad.account}} (예금주: {{ bumdad.name }})</p>
            <button class="copyAccount" @click="urlLink(bumdad)">계좌번호 복사하기</button>
            <p class="black">신랑 혼주 계좌</p>
            <p class="account">{{bummom.account}} (예금주: {{  bummom.name }})</p>
            <button class="copyAccount" @click="urlLink(bummom)">계좌번호 복사하기</button>
            <p class="black">신랑 계좌</p>
            <p class="account"> {{bum.account }} (예금주: {{ bum.name }})</p>
            <button class="copyAccount" @click="urlLink(bum)">계좌번호 복사하기</button>
          </div>
        </Transition>
      </div>
      <br/>
      <div class="accountDisplay" @click="heyExpanded = !heyExpanded" 
      :class="{active: heyExpanded}"> 
        <Transition name="display" mode="out-in">
          <button class="accountInfo" v-if="!showHeyInfo">신부측 계좌번호</button>
          <div v-else>
            <p class="black">신부 혼주 계좌</p>
            <p class="account">{{ heydad.account }}(예금주: {{ heydad.name }})</p>
            <button class="copyAccount" @click="urlLink(heydad)">계좌번호 복사하기</button>
            <p class="black">신부 혼주 계좌</p>
            <p class="account">{{ heymom.account }} (예금주: {{ heymom.name }})</p>
            <button class="copyAccount" @click="urlLink(heymom)">계좌번호 복사하기</button>
            <p class="black">신부 계좌</p>
            <p class="account">{{ hey.account }} (예금주: {{ hey.name }})</p>
            <button class="copyAccount" @click="urlLink(hey)">계좌번호 복사하기</button>
          </div>
        </Transition>
      </div>
    </div>
  </div>
</template>

<script>
import SectionDivider from './SectionDivider.vue';

export default {
  name: "CelebrationInfo",
  components: {
    SectionDivider
  },
  data() {
    return {
      showBumInfo: false,
      showHeyInfo: false,
      bumExpanded: false,
      heyExpanded: false,
      bum: {
        name: "신기연",
        account: "국민은행 80350200031139"
      },
      bumdad: {
        name: "신조용",
        account: "농협 123123123123"
      },
      bummom: {
        name: "한세숙",
        account: "농협 123123123123"
      },
      hey: {
        name: "이은지",
        account: "국민은행 80350200031139"
      },
      heydad: {
        name: "이기봉",
        account: "농협 123123123123"
      },
      heymom: {
        name: "남길연",
        account: "농협 123123123123"
      },
    }
  },
  props: {
    presents: {
      type: Array,
      default: () => [],
    },
  },
  watch: {
    bumExpanded() {
      this.showBumInfo = !this.showBumInfo;
    },
    heyExpanded() {
      this.showHeyInfo = !this.showHeyInfo;
    }
  },
  methods: {
    handleSubmitClick(present) {
      if (present.isSoldout) {
        const isConfirmed = confirm("이미 선물 받은 상품이에요. 혹시 구매링크가 궁금하신가요?");
        if (isConfirmed) {
          window.open(present.link);
        }
        return;
      }

      this.$emit("click", present);
    },
    toggleShowBumInfo() {
      this.showBumInfo = !this.showBumInfo;
    },
    toggleShowHeyInfo() {
      this.showHeyInfo = !this.showHeyInfo;
    },
    urlLink(who) {
      this.$copyText(who.account).then(function () {
        alert(`${who.name} 님의 계좌번호가 복사되었습니다.`);
      })
    }
  },
};
</script>

<style lang="scss" scoped>
.display-enter-active,
.display-leave-active {
  transition: opacity 0.3s ease; // 0.3초 동안 투명도 변화
}

.display-enter-from,
.display-leave-to {
  opacity: 0; // 등장하기 시작, 퇴장의 마지막은 투명도 0
}

.celebrate {
  padding-top: 10px;
  padding-bottom: 30px;
  padding-left: $padding-vertical;
  padding-right: $padding-vertical;
  text-align: center;
  color: #295138;

  .accountDisplay {
    background-color: #ffffff;
    border: 1px solid #295138;
    border-radius: 10px;
    align-items: center;
    margin-bottom: 3px;
    overflow: hidden;
    transition: all 0.3s ease; // 0.3초 동안 높이 변화

    &.active{
        align-items: center;
        padding-top: 10px;
        padding-bottom: 10px;
        width: 100%;
      }

  }

  button {
    margin-top: 3px;
    margin-bottom: 3px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: $padding-vertical;
    padding-right: $padding-vertical;
    background-color: none;
    
    &.accountInfo {
      color: #295238;
      padding-top: 5px;
      padding-bottom: 5px;
      background-color: white;
    }

    &.copyAccount {
      color: white;
      background-color: #295238;
      font-size: 12px;
      padding-left: 5px;
      padding-right: 5px;
      padding-top: 3px;
      padding-bottom: 3px;
    }
  }
  .description {
    font-size: 12px;
    letter-spacing: 6px;
    margin-bottom: 30px;
  }
  .h2 {
    font-size: 16px;
    font-weight: normal;
    margin-bottom: 24px;
  }
  p {
    line-height: 24px;
    &.black {
      margin-top: 10px;
      line-height: 12px;
      color: #202121;
      font-size: 18px;
      margin-bottom: 10px;
    }

    &.account{
      line-height: 7px;
    }
  }
  .goose {
    width: 90px;
    margin-top: 67px;
    margin-bottom: 20px;

    display: inline;
  }
  .cat {
    width: 85px;
    height: 67px;
    margin-top: 10px;
    margin-bottom: 10px;

    display: inline;
  }

  .gift-list {
    width: 298px;
    margin: 32px auto;

    .gift {
      display: inline-block;
      width: calc(50% - 7px);
      box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.16);
      margin-bottom: 16px;
      cursor: pointer;
      background: white;

      &.is-disable {
        cursor: default;
      }

      &:nth-child(2n -1) {
        margin-right: 14px;
      }

      .overlay {
        background: white;
        width: 100%;
        height: 100%;
        position: absolute;
        opacity: 0;

        &.is-disable {
          display: block;
          opacity: 0.7;
        }
      }
      .thumbnail {
        width: 100%;
        height: auto;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .contents {
        padding: 8px;
        text-align: left;
        color: #202121;
        .title {
          font-size: 14px;
          line-height: 1.43;
          height: 40px;
          word-break: keep-all;
        }
        .action {
          font-size: 10px;
          margin-top: 12px;
          display: flex;
          align-items: center;

          img {
            margin-right: 4px;
          }
        }
      }
    }
  }
}
</style>
