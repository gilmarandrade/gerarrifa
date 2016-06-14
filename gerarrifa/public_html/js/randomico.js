/* 
 * Gerador de numeros aleatórios para o sorteador
 * 
 * Código adaptado de https://rogeriolino.wordpress.com/2007/09/04/javascript-password-generator/
 */

var Password = function() {
    this.pass = "";

    this.generate = function(chars) {
        for (var i = 0; i < chars; i++) {
            this.pass += this.getRandomChar();
        }
        return this.pass;
    };

    this.getRandomChar = function() {
        /*
         *    matriz contendo em cada linha indices (inicial e final) da tabela ASCII para retornar alguns caracteres.
         *    [48, 57] = numeros;
         *    [64, 90] = "@" mais letras maiusculas;
         *    [97, 122] = letras minusculas;
         */
        var ascii = [[48, 57], [97, 122]];
        var i = Math.floor(Math.random() * ascii.length);
        return String.fromCharCode(Math.floor(Math.random() * (ascii[i][1] - ascii[i][0])) + ascii[i][0]);
    };
};


function realizarSorteio() {
    $("#btSortear").hide();
    var random = new Password();

    var digit1 = window.setInterval(function() {
        $("#digit1 .title-display").html(random.getRandomChar());
    }, 70);
    var digit2 = window.setInterval(function() {
        $("#digit2 .title-display").html(random.getRandomChar());
    }, 70);
    var digit3 = window.setInterval(function() {
        $("#digit3 .title-display").html(random.getRandomChar());
    }, 70);
    var digit4 = window.setInterval(function() {
        $("#digit4 .title-display").html(random.getRandomChar());
    }, 70);
    var digit5 = window.setInterval(function() {
        $("#digit5 .title-display").html(random.getRandomChar());
    }, 70);
    var digit6 = window.setInterval(function() {
        $("#digit6 .title-display").html(random.getRandomChar());
    }, 70);

    window.setTimeout(function() {
        clearInterval(digit1);
        $("#digit1").addClass("digit-out");
    }, 6000);
    window.setTimeout(function() {
        clearInterval(digit2);
        $("#digit2").addClass("digit-out");
    }, 5000);

    window.setTimeout(function() {
        clearInterval(digit3);
        $("body").addClass("animation-out");
        $("#digit3").addClass("digit-out");
    }, 6500);
    window.setTimeout(function() {
        clearInterval(digit4);
        $("#digit4").addClass("digit-out");
    }, 4500);

    window.setTimeout(function() {
        clearInterval(digit5);
        $("#digit5").addClass("digit-out");
    }, 5500);
    window.setTimeout(function() {
        clearInterval(digit6);
        $("#digit6").addClass("digit-out");
    }, 4000);
}



