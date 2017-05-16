/*var lunbdian=document.querySelectorAll(".lbdian");
var banner=document.querySelector(".banner");
var lunbtu=document.querySelectorAll(".banner-daohang-bannertu .banner-tu .bannertu");
var contain=document.querySelector(".banner-daohang-bannertu .banner-tu");
var obj=lunbtu[0];
var obj1=lunbdian[0];
var ti=setInterval(move1,3000);
var num1=0;
var color=["#E8E6EE","#FE6C04","#E8E6EE","#E8E6EE","#D6C3BF","#1D52D4","#E8E6EE"];
for(let i=0;i<lunbdian.length;i++){

    lunbdian[i].onmouseover=function () {
        num1=i;
        obj.style.zIndex=1;
        obj.style.opacity=0;
        obj1.style.border=0;
        obj1.style.background="#A2A2A2";
        lunbdian[i].style.border=" 2px solid #A2A2A2";
        lunbdian[i].style.background="#F1F1F1";
        lunbtu[i].style.zIndex=2;
        lunbtu[i].style.opacity=1;
        banner.style.background=color[i];
        obj=lunbtu[i];
        obj1=lunbdian[i];
    };
    contain.onmouseover=function () {
        clearInterval(ti);
    };
    contain.onmouseout=function () {
        ti=setInterval(move1,3000);
    };

}
function move1() {
    num1++;
    if(num1==lunbdian.length){
        num1=0;
    }
    for (var k=0;k<lunbdian.length;k++){
        lunbtu[k].style.zIndex=1;
        lunbtu[k].style.opacity=0;


    }
    obj1.style.border=0;
    obj1.style.background="#A2A2A2";
    lunbdian[num1].style.border=" 2px solid #A2A2A2";
    lunbdian[num1].style.background="#F1F1F1";

    lunbtu[num1].style.zIndex=2;
    lunbtu[num1].style.opacity=1;
    obj=lunbtu[num1];
    obj1=lunbdian[num1];
    banner.style.background=color[num1];
}*/
var btndians=document.querySelectorAll(".lunbo .lbdian");
var btntus=document.querySelectorAll(".banner-tu .bannertu");
var conta=document.querySelector(".banner-tu");
var banner=document.querySelector(".banner");
var contentleft=document.querySelector(".content1-left-center");
var imgs=document.querySelectorAll(".content1-left-center .lunbotu");
var leftj=document.querySelector(".zuojiantou");
var rightj=document.querySelector(".youjiantou");
var hovbox=document.querySelectorAll(".banner-daohang-bannertu .ul1 li");
var hov=document.querySelectorAll(".hover");
var zbyg=document.querySelectorAll(".fc-item");
var yugao=document.querySelector("div.yugao");
var num2=0;
var num3=0;
Array.from(hovbox).forEach(function (val,ind) {
    val.onmouseover=function () {
        hov[ind].style.opacity="1";
    }
    val.onmouseout=function () {
        hov[ind].style.opacity="0";
    }
});
function moves1() {
    num3++;
    if(num3==zbyg.length){
        num3=0;
    }
    yugao.style.marginTop=-40*num3+"px";
}

setInterval(moves1,2000);
//
function moves() {
    num2++;
    if(num2==2){
        num2=0;
    }
    contentleft.style.marginLeft=-488*num2+"px";
}

/*setInterval(moves,4500);*/
/*leftj.style.display="none";*/
//console.log(contentleft.style.marginLeft);
/*if(contentleft.style.marginLeft==0){
    leftj.style.display="none";
    rightj.style.display="block";
}*/
leftj.style.display="none";
leftj.onclick=function () {
    num2-=2;
    moves();
    leftj.style.display="none";
    rightj.style.display="block";
};
rightj.onclick=function () {
    moves();
    rightj.style.display="none";
    leftj.style.display="block";
};
//
// var color=["#E8E6EE","#FE6C04","#E8E6EE","#E8E6EE","#D6C3BF","#1D52D4","#E8E6EE"];
// /*console.log(container);*/
// var obj1=btndians[0];
// var obj2=btntus[0];
// var ti=setInterval(move1,4000);
// var num1=0;
// function move1() {
//     num1++;
//     if(num1==btndians.length){
//         num1=0;
//     }
//     obj2.style.zIndex=1;
//     obj2.style.opacity=0;
//     obj1.style.border=0;
//     obj1.style.background="#a2a2a2";
//     btndians[num1].style.border="2px solid #a2a2a2";
//     btndians[num1].style.background="#f1f1f1";
//     btntus[num1].style.zIndex=2;
//     btntus[num1].style.opacity=1;
//     obj1=btndians[num1];
//     obj2=btntus[num1];
//     banner.style.background=color[num1];
// }
// Array.from(btndians).forEach(function (ele,index) {
//     ele.onmouseover=function () {
//         num1=index;
//         obj2.style.zIndex=1;
//         obj2.style.opacity=0;
//         obj1.style.border=0;
//         obj1.style.background="#a2a2a2";
//         this.style.border="2px solid #a2a2a2";
//         this.style.background="#f1f1f1";
//         btntus[index].style.zIndex=2;
//         btntus[index].style.opacity=1;
//         obj1=btndians[index];
//         obj2=btntus[index];
//         banner.style.background=color[index];
//     };
//     conta.onmouseover=function () {
//         clearInterval(ti);
//     };
//     conta.onmouseout=function () {
//         ti=setInterval(move1,4000);
//     }
// });


