<template>
  <div class="good-detail-container">
<!-- atcId:"L2020120900000001"
lstFilePathImg:"https://www.lost112.go.kr/lostnfs/images/sub/img04_no_img.gif"
lstHor:18
lstLctNm:"전라북도"
lstPlace:"해바라기 원룸 앞"
lstPlaceSeNm:"노상"
lstPrdtNm:"LG GRAM 노트북"
lstSbjt:"LG GRAM 노트북(화이트(흰)색)을 분실하였습니다."
lstSteNm:"담당자 접수"
lstYmd:"2020-12-01"
orgId:"O0001439"
orgNm:"서신지구대"
prdtClNm:"컴퓨터 > LG노트북"
tel:"063-208-0649"
uniq:"개인정보보호정책에 의해 정보가 제공되지 않습니다." -->
    <img :src="good.lstFilePathImg" alt="">

    <div class="about-product">
      <div class="title"></div>
      <div>Id : {{good.atcId}}</div>
      <div>지역 : {{good.lstLctNm}}</div>
      <div>장소 : {{good.lstPlace}}</div>
      <div>위치 : {{good.lstPlaceSeNm}}</div>
      <div>물품명 : {{good.lstPrdtNm}}</div>
      <div>분실 내용 : {{good.lstSbjt}}</div>
      <div>분류 : {{good.prdtClNm}}</div>
    </div>

    <div class="about-place">
      <div class="title"></div>
      <div>보관장소 : {{good.orgNm}}</div>
      <div>전화번호 : {{good.tel}}</div>
    </div>
    
    

    <button class="close-button" @click="good_detail.show = false">닫기</button>
  </div>
</template>

<script>
import axios from 'axios'
import goodsApi from '../external/const';

export default {
  props: [
    'good_detail'
  ],
  data() {
    return {
      good : {},
    }
  },
  methods : {
    async getGoodDetail() {
      console.log(this.good_detail.id)
      await axios.get( 'https://cors-anywhere.herokuapp.com/' + goodsApi.url + '/getLostGoodsDetailInfo?serviceKey=' + goodsApi.serviceKey, {
        params : {
          ATC_ID : this.good_detail.id
        },
        headers : {
          'Access-Control-Allow-Origin' : '*'
        }
      }).then( (response) => {
        this.good = response.data.response.body.item;
      }).catch( (error) => {
        
      })
    }
  },
  mounted() {
    this.getGoodDetail();
  }
}
</script>

<style>
.good-detail-container {
  left: calc(50% - 500px);
  top: calc(50% - 500px);
  width:1000px;
  height: 1000px;
  position:fixed;
  box-shadow : rgba(0,0,0,0.5) 0 0 0 9999px;
  z-index:1000;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  align-content: center;
  background-color:white;
}

.good-detail-container .title {
  font-size:18px;
  font-weight: bold;
  color:#6e6e6e;
}

.close-button {
  width:100px;
}
</style>
