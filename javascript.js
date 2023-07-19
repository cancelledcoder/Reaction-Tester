var start=new Date().getTime();

            function getRandomColor() {
                
                const letters = '0123456789ABCDEF'.split('');
    
                let color = '#';
    
                for (let i = 0; i < 6; i++ ) {
        
                    color += letters[Math.floor(Math.random() * 16)];
    
                }
    
                return color;

            }

            function showshape(){

                let top = Math.random() * 400;
                let left = Math.random() * 400;
                let width = Math.random() * 250 + 20 ;
                let height = Math.random() * 250 + 20;

                document.getElementById("shape").style.display = "block";
                start= new Date().getTime();
                document.getElementById("shape").style.top = top + "px";
                document.getElementById("shape").style.left = left + "px";
                document.getElementById("shape").style.width = width + "px";
                document.getElementById("shape").style.height = height + "px";
                document.getElementById("shape").style.backgroundColor = getRandomColor();

                if(Math.random() > 0.5){

                    document.getElementById("shape").style.borderRadius = "50%";
                    
                }
                else{

                    document.getElementById("shape").style.borderRadius = "0%";
                }

            }

            function appearafterdelay(){

                setTimeout(showshape, Math.random()*2000);
            }

            appearafterdelay();
            
            document.getElementById("shape").onclick = function(){

                var end = new Date().getTime();
                var timetaken = (end - start)/1000 ;
                document.getElementById("timeTaken").innerHTML = timetaken;
                //alert(timetaken);
                document.getElementById("shape").style.display = "none";
                
                appearafterdelay();
                

            }