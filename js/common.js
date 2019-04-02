

// 返回上一页全局
$(".go_back").click(function () {
    history.back(-1);
})

// // 计算字符个数
// function getByteLen(val) {
//     var len = 0;
//     for (var i = 0; i < val.length; i++) {
//         var patt = new RegExp(/[^\x00-\xff]/ig);
//         var a = val[i];
//         if (patt.test(a)) {
//             len += 2;
//         } else {
//             len += 1;
//         }
//     }
//     return len;
// }


// // 计算多行输入框的字数
// function inputCount($str, $str2, $str3) {
//     $str.bind('input propertychange', function () {
//         var length = $(this).val().length;
//         if (length <= $str3) {
//             $str2.html(length)
//         }
//     });
// }


// // 判断安卓手机还是苹果手机
// function detectingSystem() {
//     var u = navigator.userAgent;
//     if (u.indexOf("Android") > -1 || u.indexOf("Linux") > -1) {
//         return 1;
//     } else if (u.indexOf("iPhone") > -1) {
//         return 2;
//     }else{
//         return 3;
//     }
// }


// if(detectingSystem() == 1){

// }else if(detectingSystem() == 2){

// }else{

// }