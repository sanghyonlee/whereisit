import axios from 'axios'
import goods from './const'

export async function getLostGoodsInfoAccToClAreaPd(params) {
  params.serviceKey = goods.serviceKey;
  await axios.get( goods.url + '/getLostGoodsInfoAccToClAreaPd', {
    headers: {
      'access-controll-allow-origin' : '*'
    },
    params : params
  }).then((response)=>{
    console.log(response);
  })
}
