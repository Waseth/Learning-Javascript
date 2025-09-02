function isToday(date) {
   let today = new Date;
   if(today.getDate() === date.getDate() && today.getMonth() === date.getMonth() && today.getFullYear === date.getFullYear){
     return true;
   }else{
     return false;
   }
}