/**
 * Created by catchWind on 2019/12/11.
 */
import "./css/down.css";
import "./node_modules/bootstrap/dist/css/bootstrap.css";
import "./node_modules/bootstrap/dist/js/bootstrap";
// import linkJS from "./js/down";


$("#file").on("change",function(e){
    console.log(e.target.files);
});
$("#upload").on("click",function(){
    $(this).next().click()
});
$("#download").on("click",function() {
});