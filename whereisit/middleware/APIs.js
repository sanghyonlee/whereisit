import axios from 'axios'
import goods from '../external/const'

export async function getLostGoodsInfoAccToClAreaPd(params) {
  params.serviceKey = goods.serviceKey;
  await axios.get( 'https://cors-anywhere.herokuapp.com/' + goods.url + '/getLostGoodsInfoAccToClAreaPd', {
    headers: {"Access-Control-Allow-Origin": "*"},
    params : params
  }).then((response)=>{
    console.log(response);
  })
}
