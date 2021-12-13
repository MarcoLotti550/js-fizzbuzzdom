const scatola = document.getElementById("scatola");

for ( let i=1; i<=100; i++){

    if (i%3 == 0 && i%5 == 0){
        scatola.innerHTML += '<div class="fizzbuzz">' + "fizzbuzz" + '</div>';

    }else if (i%5 == 0){
        scatola.innerHTML += '<div class="buzz">' + "buzz" + '</div>';

    }else if (i%3 == 0){
        scatola.innerHTML += '<div class="fizz">' + "buzz" + '</div>';

    }else{
        scatola.innerHTML += '<div class="box">' + i + '</div>';

    }
}