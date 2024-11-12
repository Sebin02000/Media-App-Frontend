import axios from 'axios';

export const commonAPI=async(httpMethod,url,reqBody)=>{
      const reqConfig={
        method:httpMethod,
        url:url,
        data:reqBody
      }
      return await axios(reqConfig).then((response)=>{
        return response
      })
      .catch((error)=>{
        return error
      })
}
