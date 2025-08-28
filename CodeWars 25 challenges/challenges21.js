function hero(bullets, dragons){
  let neededBulletForOneDragon = dragons * 2;
  if(bullets >= neededBulletForOneDragon){
    return true;
  }else{
    return false;
  }
}