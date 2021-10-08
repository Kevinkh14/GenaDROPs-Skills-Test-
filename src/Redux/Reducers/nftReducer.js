import axios  from "axios";


const initialState={
    nft :""
}
const POST_NFT = "POST_NFT"
const GET_NFT ='GET_NFT'


export function postnft(nft){
    let data = axios.post(`/api/nft`,nft)
    return{
        type:POST_NFT,
        payload: data,
        console:console.log(nft)
    }
}
export function getNft() {
    let data = axios.get(`/api/getnft`,)
    return {
      type: GET_NFT,
      payload: data,
      
    };
  };



export default function reducer (state =initialState,action){
    const { type, payload } = action;
    switch(type){
        case POST_NFT:
            return{
                ...state,
                nft:payload.data.nft
                
            };
        case GET_NFT:
            return{
                ...state,
                nft:payload.data
            
            }    
            
                default:return state;
            }
}