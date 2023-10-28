let img1 = document.getElementById('img1');
let img2 = document.getElementById('img2');
let rock = document.getElementById('rock');
let scissor = document.getElementById('scissor');
let papper = document.getElementById('papper');
let text = document.getElementById('text');
let reset = document.getElementById('reset');

rock.onclick = function() {
    text = 'Loser';
    img1.src = 'image/rock.png';
    img2.src = 'image/papper.png';
    reset.style.display = 'block';
    img1.style.display = 'block';
    img2.style.display = 'block';

}

img1.onload = function() {
    alert('Loser')
}

papper.onclick = function() {
    text = 'Loser';
    img1.src = 'image/papper.png';
    img2.src = 'image/scissor.png';
    reset.style.display = 'block';
    img1.style.display = 'block';
    img2.style.display = 'block';

}

scissor.onclick = function() {
    text = 'Loser';
    img1.src = 'image/scissor.png';
    img2.src = 'image/rock.png';
    reset.style.display = 'block';
    img1.style.display = 'block';
    img2.style.display = 'block';

}

reset.onclick = function() {
    img1.style.display = 'none';
    img2.style.display = 'none';
    reset.style.display = 'none';
}