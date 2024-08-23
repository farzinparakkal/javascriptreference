let value=0
        function changeColor(color,tcolor) {
            document.body.style.background = color;
            document.body.style.color = tcolor;
        }

        function myFunc() {
            if(value==0){
                changeColor('gray','white');
                value=1
            }
            else{
                changeColor('white','black');
                value=0
            }
        }