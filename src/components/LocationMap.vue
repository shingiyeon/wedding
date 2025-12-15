<template>
  <div>
    <SectionDivider />
    <div class="map">
      <img src="~@/assets/images/goose.png" class="goose">
      <div class="description">
        Location
      </div>
      <div class="map-container" ref="gal">
        <KakaoMap style="width: 100%" :lat="center.lat" :lng="center.lng" :draggable="true">
          <KakaoMapMarker :lat="center.lat" :lng="center.lng"></KakaoMapMarker>
        </KakaoMap>
      </div>
      <div class="cover">
        <div class="navi-apps">
          <a v-bind:href="tmapUrl">
            <div class="ico_comm ico_tmap"><img src="~@/assets/images/icons/tmap.png"/></div>
            <div class="link">T맵</div>
          </a>
        </div>
        <div class="navi-apps">
          <a v-bind:href="kakaoTaxiUrl">
            <div class="ico_comm ico_taxi"><img src="~@/assets/images/icons/kakaot.png"/></div>
            <div class="link">카카오택시</div>
          </a>
        </div>
        <div class="navi-apps">
          <a v-bind:href="navermapUrl">
            <div class="ico_comm ico_navermap"><img src="~@/assets/images/icons/navermap.png"/></div>
            <div class="link">네이버맵</div>
          </a>
        </div>
        <div class="navi-apps">
          <a v-bind:href="kakaomapUrl">
            <div class="ico_comm ico_kakaomap"><img src="~@/assets/images/icons/kakaomap.png"/></div>
            <div class="link">카카오맵</div>
          </a>
        </div>
      </div>
      <h2 class="h2">오시는길</h2>
      <p>
        서울시 중구 청파로 463 한국경제신문사 루이비스웨딩 18F (다산홀)
      </p>
      <h2 class="h2">자가용</h2>
      <p class="black">
        "한국경제신문사" 또는 <br/>
        "서울시 중구 청파로 463 한국경제신문사" 검색<br/>
        본 건물 지하주차장 이용
      </p>
      <h2 class="h2">셔틀버스</h2>
      <p class="black">
        1, 4호선 서울역 하차 후 에스컬레이터 이용해 지상으로 이동 </br/>
        ZARA 매장 (롯데 아울렛) 및 롯데마트 사이 길로 주차장 출입구까지 직진<br/>
        횡단보도 건너 계단으로 내려가면 "루이비스 웨딩 셔틀버스 타는 곳" 작은 입간판<br/>
        루이비스웨딩 노란색 셔틀버스 수시운행 (약 5분 간격)
      </p>
      <h2 class="h2">지하철</h2>
      <p class="black">
        2, 5호선 충정로역 4번출구 도보 5분
      </p>
      <h2 class="h2">버스</h2>
      <p class="black">
        한국경제신문사, 종근당, 서울역 서부, 경찰청(서대분경찰서) 하차 <br/><br/>
        <span>간선:</span> 370, 603, 172, 472, 173, 261, 262, 463, 503, 604,<br/>
        101, 700, 701, 704, 705, 707, 750, 752, 742 <br/>
        <span>지선:</span> 7011, 7017, 7019, 7021, 7024 <br/>
        <span>광역:</span> 1000, 1100, 1101, 1200, 1300, 1301, 1400, 1500, <br/>
        1601, 9701, 9710, 9703, 9709, 9714, M7106
      </p>
    </div>
  </div>
</template>

<script>

import { KakaoMap, KakaoMapMarker} from 'vue3-kakao-maps';
import SectionDivider from './SectionDivider.vue';

export default {
  name: "LocationMap",
  components: {KakaoMap, KakaoMapMarker, SectionDivider},
  
  data() {
    return {
      scrollX: 0,
      width: 320,
      appKey: 'cf37e4b461393d6f5bda4dca156feb23', // 테스트용 appkey
      center: {lat: 37.560635, lng: 126.967378}, // 지도의 중심 좌표
      level: 3, // 지도의 레벨(확대, 축소 정도),
      libraries: ["drawing"], // 추가로 불러올 라이브러리
      map: null, // 지도 객체. 지도가 로드되면 할당됨.
      daum: null, // 다음 API 객체. 지도가 로드되면 할당됨.w
      //////////////
      tmapUrl: "",
      kakaoTaxiUrl: "",
      navermapUrl: "",
      kakaomapUrl: ""

    };
  },
  mounted() {
    this.makeUrls();
  },
  methods: {
    // 지도가 로드 완료되면 load 이벤트 발생
    onLoad(map, daum) {
      this.map = map;
      this.daum = daum;

      // 지도를 클릭한 위치에 표출할 마커입니다
      var marker = new kakao.maps.Marker({
        // 지도 중심좌표에 마커를 생성합니다
        position: map.getCenter()
      });
      // 지도에 마커를 표시합니다
      marker.setMap(map);
    },
    makeUrls() {
      // 장소데이터의 이름정보 불러온 뒤
      this.tmapUrl = "https://apis.openapi.sk.com/tmap/app/poidetail?appKey=YqPXcIppwj6jVD4zxaZcG7SyZXvNlttC7s9YYw0a&poiId=10243691"
      this.kakaoTaxiUrl = "https://t.kakao.com/launch?type=taxi&amp;dest_lat=37.560635&amp;dest_lng=126.967378&amp;ref=localweb"
      this.navermapUrl = "https://m.place.naver.com/place/20688305/home"
      this.kakaomapUrl = "https://place.map.kakao.com/14921865"
    }
  }
};
</script>

<style lang="scss" scoped>

.map {
  padding-top: 20px;
  padding-bottom: 10px;

  padding-left: $padding-vertical;
  padding-right: $padding-vertical;
  text-align: center;

  .goose {
    width: 75px;
    height: 73px;
    margin-bottom: 20px;

    display: inline;
  }
}

.map-container {
  margin-bottom: 30px;
}

.description {
  font-size: 12px;
  letter-spacing: 6px;
  margin-bottom: 30px;
  color: #295138;
}

.navi-apps {
  align-content: center;
  position: relative;

  .ico_comm img {
    display: inline;
    vertical-align: middle;
    width: 40px
  }

  div {
    text-align: center;
    padding-top: 10px;
  }

  a{
    text-decoration: none;
  }
}


.h2 {
  font-size: 16px;
  font-weight: normal;
  margin-bottom: 16px;
  text-align: center;
  color: #295138;
}


p {
  line-height: 16px;
  text-align: middle;
  color: #295138;
  &.black {
    color: #202121;
  }
  margin-bottom: 30px;
  font-size: 13px;

  span {
    font-size: 15px;
  }
}

.cover {
  display: flex;
  justify-content: space-between;
  margin: 22px 10% 22px 10%;
}

.link {
  color: #295238;
}

</style>
