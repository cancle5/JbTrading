var string = `

<div style="padding-top: 10vh;"></div>

<div class="box">

     <h1 id="Header1">Name</h1>

     <div id="Image"></div>

     <div class="box-wide-information">

         <div>

             <div class="text" style="font-size: 3.3rem;">Information</div>
 
             <div id="Value" class="text" style="color: rgb(0, 255, 0);">Value: loading</div>
             <div id="Price" class="text" style="color: rgb(0, 255, 0);">Price: loading</div>
             <div id="Demand" class="text" style="color: rgb(255, 191, 0);">Demand: loading</div>
             <div id="MaxSpeed" class="text" style="color: rgb(255, 0, 0);">Max Speed: loading</div>
             <div id="Rarity" class="text" style="color: rgb(255, 255, 255);">Estimated Rarity: loading</div>
 
         </div>

     </div>

     <div class="chart">

         <canvas style="border: 3px solid rgb(15, 15, 15);" id="myChart" width="500" height="150"></canvas>

     </div>

     <p id="Text"></p>

</div>

 <div style="padding-top: 10vh;"></div>

`

document.writeln(string)