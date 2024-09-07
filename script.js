
let level1=[
   [1,1,1,1,1],
   [1,1,1,1,1],
   [1,1,1,1,1],
   [1,1,1,1,1],
   [1,1,0,1,1],
   [1,1,0,1,1]
];


let level2=[
   [1,0,1,0,1,0,1,1,1,0,1,0],
   [1,1,0,0,1,1,1,0,1,1,1,1],
   [0,1,0,1,1,0,1,0,1,0,1,0],
   [1,1,1,1,0,0,0,0,0,1,1,1],
   [0,1,0,1,1,1,1,1,1,0,0,1],
   [1,0,1,0,1,0,1,1,1,0,1,0],
   [1,1,0,0,1,1,1,0,1,1,1,1],
   [0,1,0,1,1,0,1,0,1,0,1,0],
   [1,1,1,1,0,0,0,0,0,1,1,1],
   [0,1,0,1,1,1,1,1,1,0,0,1]
];

let level3=[
   [1,0,1,0,1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0],
   [1,1,0,0,1,1,1,0,1,1,1,1,1,1,0,1,0,0,0,0,0,1,1,1],
   [0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,1,1,1,1,1,0,0,1],
   [1,1,1,1,0,0,0,0,0,1,1,1,0,1,0,1,1,0,1,0,1,0,1,0],
   [0,1,0,1,1,1,1,1,1,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1],
   [1,0,1,0,1,0,1,1,1,0,1,0,0,1,0,1,1,0,1,0,1,0,1,0],
   [1,1,0,0,1,1,1,0,1,1,1,1,0,1,0,1,1,1,1,1,1,0,0,1],
   [0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0],
   [1,1,1,1,0,0,0,0,0,1,1,1,0,1,0,1,1,0,1,0,1,0,1,1],
   [0,1,0,1,1,1,1,1,1,0,0,1,0,1,0,1,1,0,1,0,1,0,1,0],
   [1,0,1,0,1,0,1,1,1,0,1,0,0,1,1,1,1,0,1,1,1,0,0,1],
   [1,1,0,0,1,1,1,0,1,1,1,1,0,1,0,1,0,0,1,0,0,0,1,0],
   [0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,1,1,1,0,1,1,1,0],
   [1,1,1,1,0,0,0,0,0,1,1,1,0,1,0,1,1,0,1,0,1,0,1,0],
   [0,1,0,1,1,1,1,1,1,0,0,1,1,0,1,0,1,0,1,1,1,0,1,0],
   [1,0,1,0,1,0,1,1,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,0],
   [1,1,0,0,1,1,1,0,1,1,1,1,1,1,0,1,1,1,0,0,1,1,1,0],
   [0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,1,0,1,0,1,0,1,0],
   [1,1,1,1,0,0,0,0,0,1,0,1,0,1,0,1,1,1,1,0,1,0,1,0],
   [0,1,0,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,1,1,1,0,1,1],
   [1,0,1,0,1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0],
   [1,1,0,0,1,1,1,0,1,1,1,1,1,1,0,1,0,0,0,0,0,1,1,1],
   [0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,1,1,1,1,1,0,0,1],
   [1,1,1,1,0,0,0,0,0,1,1,1,0,1,0,1,1,0,1,0,1,0,1,1],
   [0,1,0,1,1,1,1,1,1,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1],
 
];
let mazeArray=level1;
let Level=document.querySelector('#selecter')
let maz=document.querySelector('.countainer-met');
let ret=document.querySelector('#ret');
let chise=document.querySelector('#chise');

Level.addEventListener("change",function (){

   /*switch (parseInt(Level.value)) {
      case 1:
         mazeArray=Level1;
         break;
      case 2:
         mazeArray=level2;
         break;
      case 3:
         mazeArray=Level3;
         break;
      default:
         console.log("Print Nothing")
         break;
   }*/
let level=Level.value;
if (level==1) {
   
   mazeArray=level1;
}
else if (level==2) {
 
   mazeArray=level2;
}
else  {
  
   mazeArray=level3;
}
createmaz()
maz.innerHTML=`
<img id="ret" src="DeliveryBoy.png" height="50px" width="50px" />
<img id="chise" src="chese.png" height="50px" width="50px" />
`
createmaz()

})

function createmaz(){
   for (let i = 0; i < mazeArray.length; i++) {
      let row=document.createElement('div');
      row.classList.add('row');

      for (let j = 0; j <mazeArray[i].length; j++) {
         let column=document.createElement('div');
         column.classList.add('column');


         if(mazeArray[i][j]==0){
            column.classList.add('empty');
            // console.log("ADD",[i],[j])
         }


         if(i==0 && j==0){
            mazeArray[i][j]=2;
            // console.log(mazeArray[i][j])
         }
         

         row.appendChild(column)
      }
      maz.appendChild(row);
      
   }
   // changePositionrat(200,200)
   // console.log(mazeArray)
   ratposition();
}

function ratposition(){
   let position=[0,0];
   for(let i=0;i<mazeArray.length;i++){
      for (let j = 0; j < mazeArray[i].length; j++) {
         // console.log(mazeArray[i][j])
         if (mazeArray[i][j]==2) {
            // console.log(mazeArray[i][j])
            position[0]=i;
            position[1]=j;

         }
      }
   }
   // console.log(position)
   return position;
}
let length=()=>{
   let len=0;
   for(let i=1;i<=mazeArray[0].length;i++){
      len=i;
   }
   return len;

}

document.addEventListener("keydown",(e)=>{
   let ret=document.querySelector('#ret');
   let chise=document.querySelector('#chise');
   let retleft=ret.offsetLeft;
   let retop=ret.offsetTop;
   let chiseleft=ret.offsetLeft;
   let chisetop=ret.offsetTop;
   let retposition= ratposition();
   // console.log(retleft)

   if(e.key=="ArrowRight"){
     if ((retleft<(length())*50)&&(mazeArray[retposition[0]][retposition[1]+1]==1)) {
      console.log(retleft)
      retleft+=50;
      ret.style.left=`${retleft}px`
      mazeArray[retposition[0]][retposition[1]]=1;

      mazeArray[retposition[0]][retposition[1]+1]=2;
      console.log(retposition)
      console.log(mazeArray)
     }
      
   }


   if(e.key=="ArrowLeft"){
      if (retleft>0&&(mazeArray[retposition[0]][retposition[1]-1]==1)) {
      retleft-=50;
      ret.style.left=`${retleft}px`
      mazeArray[retposition[0]][retposition[1]]=1;

      mazeArray[retposition[0]][retposition[1]-1]=2;
      console.log(retposition)
      console.log(mazeArray)
     }
   }


   if(e.key=="ArrowUp"){
      if (retop>0&&(mazeArray[retposition[0]-1][retposition[1]]==1)) {
      retop-=50;
      ret.style.top=`${retop}px`
      mazeArray[retposition[0]][retposition[1]]=1;
      mazeArray[retposition[0]-1][retposition[1]]=2;
      console.log(retposition)
      console.log(mazeArray)
     }
   }


   if(e.key=="ArrowDown"){
      if ((retop<(mazeArray.length-1)*50)&&(mazeArray[retposition[0]+1][retposition[1]]==1)) {
      console.log((mazeArray.length-1)*50)
      console.log(retop)
      retop+=50;
      ret.style.top=`${retop}px`
      mazeArray[retposition[0]][retposition[1]]=1;

      mazeArray[retposition[0]+1][retposition[1]]=2;
      console.log(retposition)
      console.log(mazeArray)
     }
   }

})


function changePositionrat(t,l){
   ret.style.top=t+"px";
   ret.style.left=l+"px";
}
