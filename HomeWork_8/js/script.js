(function() {

    $('button').click(function(e) {

        var container = $('.container');

        // Координаты начала контейнера
        var containerStart = container.offset();
        console.log('Координаты начала контейнера:', container.offset());

        // Следовательно
        console.log('Отступ слева:', containerStart.left);
        console.log('Отступ сверху:', containerStart.top);

        // Ширина и высота контейнера
        console.log('Ширина и высота контейнера:', container[0].clientWidth, container[0].clientHeight);

        /**
         * 1. После этого мы можем получить координаты конца контейнера сложив его ширину и длину с координатами начала
         * 2. Теперь у нас есть все 4 границы области, куда будет вставляться прямоугольник. То есть мы должны его
         *    вставить на страницу так, чтобы его координаты были случайными, но при этом не больше и не меньше
         *    координатов краёв нашего контейнера.
         * 3. Ширину, высоту и цвет прямоугольника, мы также можем выбрать случайным образом из заданного диапазона чисел
         * 4. Напоминаю как создавать генератор случайных чисел (например от 1 до 10)
         *    Math.floor(Math.random() * 10) + 1
         */

        // Пример вставки прямоугольника на страницу
        var squareWidth = 200;
        var squareHeight = 100;
        var squareLeft = 400;
        var squareTop = 200;

        var square = '<div style="width: ' + squareWidth + 'px; height: ' + squareHeight + 'px; background: rgb(255, 100, 13); position: absolute;  left: ' + squareLeft + 'px; top: ' + squareTop + 'px"></div>';

        container.append(square);

    });

    function move(div){
        square.onmousedown=function(){return false}
        div.style.cursor='move';
        square.onmousemove=function(e){
            x=e.pageX;
            y=e.pageY;
            left1=div.offsetLeft;
            top1=div.offsetTop;
            left1=x-left1;
            top1=y-top1;
            square.onmousemove=function(e){
                x=e.pageX;
                y=e.pageY;
                div.style.top=y-top1+'px';
                div.style.left=x-left1+'px';
            }
        }
        square.onmouseup=function(){
            div.style.cursor='auto';
            square.onmousedown=function(){}
            square.onmousemove=function(){}
        }
}
}());