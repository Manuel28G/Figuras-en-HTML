 var animacionBoxS= new BABYLON.Animation("AnimacionBS","rotation.x",30,BABYLON.Animation.ANIMATIONTYPE_FLOAT,BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
 var animacionBoxLat1=new BABYLON.Animation("AnimacionBL","position.y",30,BABYLON.Animation.ANIMATIONTYPE_FLOAT,BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE); 
 var animacionBoxLat2=new BABYLON.Animation("AnimacionBL","position.y",30,BABYLON.Animation.ANIMATIONTYPE_FLOAT,BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);       
 var animacionMartillo2x=new BABYLON.Animation("AnimacionBL","rotation.z",30,BABYLON.Animation.ANIMATIONTYPE_FLOAT,BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);       
 var animacionMartillo2xT=new BABYLON.Animation("AnimacionBL","position.x",30,BABYLON.Animation.ANIMATIONTYPE_FLOAT,BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);       
 var animacionMartillo2y=new BABYLON.Animation("AnimacionBL","position.y",30,BABYLON.Animation.ANIMATIONTYPE_FLOAT,BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);       
 var animacionContrapesoy=new BABYLON.Animation("AnimacionBL","position.y",30,BABYLON.Animation.ANIMATIONTYPE_FLOAT,BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);       
 var animacionContrapesox=new BABYLON.Animation("AnimacionBL","rotation.x",30,BABYLON.Animation.ANIMATIONTYPE_FLOAT,BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);       
 var animacionContrapesoxT=new BABYLON.Animation("AnimacionBL","position.x",30,BABYLON.Animation.ANIMATIONTYPE_FLOAT,BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);       
 var animaciontuboy=new BABYLON.Animation("AnimacionBL","position.y",30,BABYLON.Animation.ANIMATIONTYPE_FLOAT,BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);       
 var animaciontubox=new BABYLON.Animation("AnimacionBL","position.x",30,BABYLON.Animation.ANIMATIONTYPE_FLOAT,BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);       

          var keys=[];

          keys.push({
             frame:0,
             value:1

          });
          keys.push({
             frame:20,
             value:1.7

          });
          keys.push({
             frame:50,
             value:1

          });
          keys.push({
             frame:100,
             value:1

          });
          animacionBoxS.setKeys(keys);
          keys=[];
           keys.push({
             frame:0,
             value:-20

          });
          keys.push({
             frame:20,
             value:-10

          });
          keys.push({
             frame:50,
             value:-20

          });
          keys.push({
             frame:100,
             value:-20

          });
          animacionBoxLat1.setKeys(keys);
          animacionBoxLat2.setKeys(keys);
          keys=[];
          keys.push({
             frame:0,
             value:1

          });
          keys.push({
             frame:20,
             value:0

          });
          
          keys.push({
             frame:50,
             value:1

          });
          keys.push({
             frame:100,
             value:1

          });
          animacionMartillo2x.setKeys(keys);
          keys=[];
          keys.push({
             frame:0,
             value:15

          });
          keys.push({
             frame:20,
             value:-5

          });
          
          keys.push({
             frame:50,
             value:15

          });
          keys.push({
             frame:100,
             value:15

          });
          animacionMartillo2y.setKeys(keys);
          keys=[];
          keys.push({
             frame:0,
             value:20

          });
          keys.push({
             frame:20,
             value:23

          });
          
          keys.push({
             frame:50,
             value:20

          });
          keys.push({
             frame:100,
             value:20

          });
          animacionMartillo2xT.setKeys(keys);

          keys=[];
         keys.push({
             frame:0,
             value:-11

          });
          keys.push({
             frame:20,
             value:1

          });
          
          keys.push({
             frame:50,
             value:-11

          });
          keys.push({
             frame:100,
             value:-11

          });
          animacionContrapesoy.setKeys(keys);
          keys=[];
          keys.push({
             frame:0,
             value:1

          });
          keys.push({
             frame:20,
             value:1.7

          });
          
          keys.push({
             frame:50,
             value:1

          });
          keys.push({
             frame:100,
             value:1

          });
          animacionContrapesox.setKeys(keys);

           keys=[];
          keys.push({
             frame:0,
             value:-16

          });
          keys.push({
             frame:20,
             value:-19

          });
          
          keys.push({
             frame:50,
             value:-16

          });
          keys.push({
             frame:100,
             value:-16

          });
          animacionContrapesoxT.setKeys(keys);

          keys=[];
          keys.push({
             frame:0,
             value:-7

          });
          keys.push({
             frame:20,
             value:-35

          });
          
          keys.push({
             frame:50,
             value:-7

          });
          keys.push({
             frame:100,
             value:-7

          });
          animaciontuboy.setKeys(keys);
           keys=[];
          keys.push({
             frame:0,
             value:27

          });
          keys.push({
             frame:20,
             value:25

          });
          
          keys.push({
             frame:50,
             value:27

          });
          keys.push({
             frame:100,
             value:27

          });
          animaciontubox.setKeys(keys);
  


          //box.animations.push(animacionBoxS);
          //Escenario.beginAnimation(box,0,100,true);