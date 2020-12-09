<template>
  <div class="container">
    <div class="background">
      <div class="title-wrapper">
        <h1 class="title">
          where Is It
        </h1>
        <h2 class="sub-title">경찰청 분실물 조회 서비스</h2>
      </div>
    </div>

    <div class="main-wrapper">
      <div class="filter">
        기간
        <input type="number" placeholder="검색 시작 날짜" v-model="START_YMD"> ~ 
        <input type="number" placeholder="검색 종료 날짜" v-model="END_YMD">

        <button @click="getGoodsList()">검색</button>
      </div>

      <div class="goods-list-wrapper">
        <table>
          <thead>
            <tr>
              <td>분실 장소</td>
              <td>분실물</td>
              <td>분실 내용</td>
              <td>분실물 등록 날짜</td>
              <td>분류</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            <tr :key="(item,i)" v-for="(item,i) in goods">
              <td>{{item.lstPlace}}</td>
              <td>{{item.lstPrdtNm}}</td>
              <td>{{item.lstSbjt}}</td>
              <td>{{item.lstYmd}}</td>
              <td>{{item.prdtClNm}}</td>
              <td><button @click="showGoodDetail(item.atcId)">상세</button></td>
            </tr>
          </tbody>
        </table>
        <button v-show="goods.length" @click="pageNo++; getGoodsList();">다음 10개 가져오기</button>
      </div>
    </div>

    <GoodDetail v-if="good_detail.show" :good_detail="good_detail"></GoodDetail>
    
  </div>
</template>

<script>
import { getLostGoodsInfoAccToClAreaPd } from '../external/APIs';
import goodsApi from '../external/const'
import axios from 'axios';

export default {
  data() {
    return {
      START_YMD : 20200101,
      END_YMD : 20201204,
      pageNo : 1,
      goods : [],
      good_detail : {
        show : false,
        id : null
      }
    }
  },
  methods: {
    async getGoodsList() {
      await axios.get( 'https://cors-anywhere.herokuapp.com/' + goodsApi.url + '/getLostGoodsInfoAccToClAreaPd?serviceKey=' + goodsApi.serviceKey, {
        params : {
          START_YMD : this.START_YMD,
          END_YMD : this.END_YMD,
          pageNo : this.pageNo,
        },
        headers : {
          'Access-Control-Allow-Origin' : '*'
        }
      }).then( (response) => {
        this.goods = response.data.response.body.items.item;
      }).catch( (error) => {
        
      })
    },
    showGoodDetail(id) {
      this.good_detail.id = id;
      this.good_detail.show = true;
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  text-align: center;
}

.background {
  width: calc(100% - 1080px);
  height:100vh;
  background-color: #4e4e4e;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
} 

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #fff;
  letter-spacing: 1px;
}

.sub-title {
  font-weight: 300;
  color: #fff;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.main-wrapper {
  width:1080px;
  height:100vh;
}

.filter input[type=number] {
  width: 100px;
  height: 30px;
}
</style>
