import { commonAPI } from "./commonAPI";
import { serverUrl } from "./serverUrl";
//add video to json file
export const addVideoAPI=async(reqBody)=>{
   return await commonAPI('post',`${serverUrl}/allvideos`,reqBody);
};
//get video from json file
export const getVideoAPI=async()=>{
   return await commonAPI('get',`${serverUrl}/allvideos`,"")
}
//delete video from json file
export const deleteVideoAPI=async(id)=>{
   return await commonAPI('delete',`${serverUrl}/allvideos/${id}`,"")
}
//add category API
export const addCategoryAPI=async(reqBody)=>{
   return await commonAPI('post',`${serverUrl}/category`,reqBody)
 
}
//get category API
export const getCategoryAPI=async()=>{
   return await commonAPI('get',`${serverUrl}/category`,{})
}
//delete category API
export const deleteCategoryAPI=async(id)=>{
   return await commonAPI('delete',`${serverUrl}/category/${id}`,{})
}

//add history details to server
export const addHistoryDetailsAPI=async(reqBody)=>{
   return await commonAPI('post',`${serverUrl}/watch-history`,reqBody)
}
//get history details from server
export const getWatchHistoryAPI=async()=>{
   return await commonAPI('get',`${serverUrl}/watch-history`,"") 
}
//delete history details from server
export const deleteWatchHistoryAPI=async(id)=>{
   return await commonAPI('delete',`${serverUrl}/watch-history/${id}`,"")  
}
//get video to be dropped
export const getAVideoAPI=async(id)=>{
   return await commonAPI('get',`${serverUrl}/allvideos/${id}`,"")
}
//put video to json server
export const updateCategoryAPI=async(cid,reqBody)=>{
   return await commonAPI('put',`${serverUrl}/category/${cid}`,reqBody)
}



