var Particle=function(){function a(){this.x=Math.random()*width,this.y=Math.random()*height,this.alpha=1,this.generate(!1)}return a.prototype.generate=function(a){return this.radius=30*Math.random()+5,this.xSpeed=10*Math.random()-5,this.ySpeed=10*Math.random()-5,this.alphaDecay=Math.random()/10,this.fadeBack=a},a.prototype.update=function(){return this.x+=this.xSpeed,this.y+=this.ySpeed,this.alpha-=this.alphaDecay,this.alpha<=0&&(this.x=Math.random()*width,this.y=Math.random()*height,this.generate(!0)),this.fadeBack===!0&&(this.alpha+=.15,this.alpha>=1)?this.fadeBack=!1:void 0},a}(),color=d3.scale.category20(),width,height;window.addEventListener("load",function(){width=window.innerWidth,height=window.innerHeight,canvas=d3.selectAll("svg"),canvas.style("width",width),canvas.style("height",height),particles=[];for(var a=0;100>a;a++)particles.push(new Particle);var b=canvas.selectAll().data(particles).enter();b.append("svg:circle").attr("fill",function(a,b){return color(b%20)}).attr("r",function(a){return a.radius}).attr("cx",function(a){return a.x}).attr("cy",function(a){return a.y}).attr("stroke",function(a,b){return d3.rgb(color(b%20)).brighter(.7)}).attr("stroke-width",function(a){return a.radius/(2*Math.random()+1)}).attr("stroke",function(a,b){return d3.rgb(color((b-20*Math.random())%20)).brighter(.2)}).attr("stroke-width",function(a){return a.radius/(3*Math.random()+2)});var c=d3.select("svg");c.append("svg:image").attr("x",5*(window.innerWidth/12)).attr("y",3*(window.innerHeight/12)).attr("width",2*(window.innerWidth/12)).attr("height",401*(2*(window.innerWidth/12)/231)).attr("xlink:href","./images/viral_logo_vertical_A.png").attr("data-300","display:none");var d=d3.selectAll("circle");d3.selectAll("image"),setInterval(function(){d.attr("cx",function(a){return a.x}).attr("cy",function(a){return a.y}).attr("fill-opacity",function(a){return a.alpha}).attr("stroke-opacity",function(a){return a.alpha});for(var a in particles)particles[a].update()},1e3/30)});