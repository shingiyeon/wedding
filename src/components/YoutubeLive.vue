<template>
  <div>
    <SectionDivider />
    <div class="live">
      <img src="~@/assets/images/hands.png" class="hands" />
      <div>
        <p class = "header">
          "우리 손 잡을까요?"<br />
        </p>
        <p>
          혼자 걷는 것이 익숙했던 저희가,<br />
          이제는 손을 잡고 함께 걸어가려 합니다.<br /> <br />
          사랑한다는 말을 나눌 수 있는 유일한 사람과<br />
          오래도록 있는 힘을 다해 행복해지겠습니다.<br /> <br />
          손을 맞잡고 첫 발을 떼는 저희의 결혼식날<br />
          소중한 분들을 모시고자 합니다.
        </p>
        <p class = "header">
          26년 1월 10일 토요일 오후 1시 30분<br />
          루이비스중구점 18층 다산홀<br />
        </p>
        <p class = "name">
          <span>신조용</span> ∘ <span>한세숙</span>의 차남 <span>신기연</span>
        </p>
        <p class = "name">
          <span>이기봉</span> ∘ <span>남길연</span>의 차녀 <span>이은지</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import SectionDivider from './SectionDivider.vue';
export default {
  name: "YoutubeLive",
  components: {
    SectionDivider
  },
  methods: {
    attendance() {
    },
  }
};
</script>

<style lang="scss" scoped>
.live {
  padding-top: 10px;
  padding-left: $padding-vertical;
  padding-right: $padding-vertical;
  padding-bottom: 25px;
  text-align: center;
  .hands {
    width: 75px;
    margin-bottom: 16px;
    display: inline;
  }
  p {
    margin-bottom: 16px;
    line-height: 24px;
    &.desc {
      color: #295238;
      font-size: 10px;
      opacity: 0.6;
      margin-bottom: 36px;
    }
    &.header {
      color: #295238;
    }
    &:last-child {
      margin-bottom: 40px;
    }
    &.name {
      color: black;
      margin-bottom: 10px;
      font-size: 17px;
      span{
        font-size: 20px;
      }
    }
  }
}
</style>
