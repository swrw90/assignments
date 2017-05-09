function addNum() {
    var userNum = document.getElementById("addBtn");
    var numText = userNum.value;

    console.log(addNum(numText));

    function subNum() {
        var userNum = document.getElementById("subBtn");
        var numText = userNum.value;

        console.log(subNum(numText));

        function mulNum() {
            var userNum = document.getElementById("mulBtn");
            var numText = userNum.value;

            console.log(mulNum(numText));

            function divNum() {
                var userNum = document.getElementById("divBtn");
                var numText = userNum.value;

                console.log(divNum(numText));






                <
                div1 >
                    <
                    input > < /input> <
                    button type = "button"
                onclick = "addNum()" > Add < /button> <
                    input id = "addBtn"
                type = "text" > < br >
                    <
                    /div1> <
                    div2 >
                    <
                    button type = "button"
                onclick = "subNum()" > Sub < /button> <
                    input id = "subBtn"
                type = "text" > < br >
                    <
                    input2 > < /input2> <
                    /div2> <
                    div3 >
                    <
                    button type = "button"
                onclick = "mulNum()" > Mul < /button> <
                    input id = "mulBtn"
                type = "text" > < br >

                    <
                    /div3>

                    <
                    /body>

                    <
                    /html> <
                    script type = "text/javascript"
                src = "main.js" > < /script>
