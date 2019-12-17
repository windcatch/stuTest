/**
 * Created by catchWind on 2019/12/11.
 */
function linkJS(){
    $("#upload").on("change",(e)=>{
        console.log(e.file);
    });
    $("#upload").on("click",(e)=>{
        $(this).next().click()
    });
    $("#download").on("click",()=>{
    
    });
}

export default linkJS;