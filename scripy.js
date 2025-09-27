// let move_speed = 3, grativy = 0.5;
// let bird = document.querySelector('.bird');
// let img = document.getElementById('bird-1');
// //
// img.src='./bird.png';
// let sound_point = new Audio('sounds effect/point.mp3');
// let sound_die = new Audio('sounds effect/die.mp3');

// // getting bird element properties
// let bird_props = bird.getBoundingClientRect();

// // This method returns DOMReact -> top, right, bottom, left, x, y, width and height
// let background = document.querySelector('.background').getBoundingClientRect();




// let score_val = document.querySelector('.score_val');
// let message = document.querySelector('.message');
// let score_title = document.querySelector('.score_title');

// let game_state = 'Start';
// img.style.display = 'none';
// message.classList.add('messageStyle');

// document.addEventListener('keydown', (e) => {
    
//     if(e.key == 'Enter' && game_state != 'Play'){
//         document.querySelectorAll('.pipe_sprite').forEach((e) => {
//             e.remove();
//         });
//         img.style.display = 'block';
//         bird.style.top = '40vh';
//         game_state = 'Play';
//         message.innerHTML = '';
//         score_title.innerHTML = 'Score : ';
//         score_val.innerHTML = '0';
//         message.classList.remove('messageStyle');
//         play();
//     }
// });

// function play(){
//     function move(){
//         if(game_state != 'Play') return;

//         let pipe_sprite = document.querySelectorAll('.pipe_sprite');
//         pipe_sprite.forEach((element) => {
//             let pipe_sprite_props = element.getBoundingClientRect();
//             bird_props = bird.getBoundingClientRect();

//             if(pipe_sprite_props.right <= 0){
//                 element.remove();
//             }else{
//                 if(bird_props.left < pipe_sprite_props.left + pipe_sprite_props.width && bird_props.left + bird_props.width > pipe_sprite_props.left && bird_props.top < pipe_sprite_props.top + pipe_sprite_props.height && bird_props.top + bird_props.height > pipe_sprite_props.top){
//                     game_state = 'End';
//                     message.innerHTML = 'Game Over'.fontcolor('red') + '<br>Press Enter To Restart';
//                     message.classList.add('messageStyle');
//                     img.style.display = 'none';
//                     sound_die.play();
//                     return;
//                 }else{
//                     if(pipe_sprite_props.right < bird_props.left && pipe_sprite_props.right + move_speed >= bird_props.left && element.increase_score == '1'){
//                         score_val.innerHTML =+ score_val.innerHTML + 1;
//                         sound_point.play();
//                     }
//                     element.style.left = pipe_sprite_props.left - move_speed + 'px';
//                 }
//             }
//         });
//         requestAnimationFrame(move);
//     }
//     requestAnimationFrame(move);

//     let bird_dy = 0;
//     function apply_gravity(){
//         if(game_state != 'Play') return;
//         bird_dy = bird_dy + grativy;
//         document.addEventListener('keydown', (e) => {
//             if(e.key == 'ArrowUp' || e.key == ' '){
//                 img.src = './bird2.png';
//                 bird_dy = -7.6;
//             }
//         });

//         document.addEventListener('keyup', (e) => {
//             if(e.key == 'ArrowUp' || e.key == ' '){
//                 img.src = './bird.png';
//             }
//         });

//         if(bird_props.top <= 0 || bird_props.bottom >= background.bottom){
//             game_state = 'End';
//             message.style.left = '28vw';
//             window.location.reload();
//             message.classList.remove('messageStyle');
//             return;
//         }
//         bird.style.top = bird_props.top + bird_dy + 'px';
//         bird_props = bird.getBoundingClientRect();
//         requestAnimationFrame(apply_gravity);
//     }
//     requestAnimationFrame(apply_gravity);

//     let pipe_seperation = 0;

//     let pipe_gap = 35;

//     function create_pipe(){
//         if(game_state != 'Play') return;

//         if(pipe_seperation > 115){
//             pipe_seperation = 0;

//             let pipe_posi = Math.floor(Math.random() * 43) + 8;
//             let pipe_sprite_inv = document.createElement('div');
//             pipe_sprite_inv.className = 'pipe_sprite';
//             pipe_sprite_inv.style.top = pipe_posi - 70 + 'vh';
//             pipe_sprite_inv.style.left = '100vw';
//             pipe_sprite_inv.textContent = "RIALO";

//             document.body.appendChild(pipe_sprite_inv);
//             let pipe_sprite = document.createElement('div');
//             pipe_sprite.className = 'pipe_sprite';
//             pipe_sprite.style.top = pipe_posi + pipe_gap + 'vh';
//             pipe_sprite.style.left = '100vw';
//             pipe_sprite.increase_score = '1';
//             pipe_sprite.textContent = "RIALO";

//             document.body.appendChild(pipe_sprite);
//         }
//         pipe_seperation++;
//         requestAnimationFrame(create_pipe);
//     }
//     requestAnimationFrame(create_pipe);

// }
// ----- config & elements -----
const move_speed = 3;
const gravity = 0.5;

const bird = document.querySelector('.bird');
const img  = document.getElementById('bird-1');
const bgEl = document.querySelector('.background');

const scoreVal   = document.querySelector('.score_val');
const messageEl  = document.querySelector('.message');
const scoreTitle = document.querySelector('.score_title');

const sndPoint = new Audio('sounds effect/point.mp3');
const sndDie   = new Audio('sounds effect/die.mp3');

// default states
let game_state = 'Start';
img.src = './bird.png';
img.style.display = 'none';
messageEl.classList.add('messageStyle');

// geometry
let birdRect = bird.getBoundingClientRect();
let bgRect   = bgEl.getBoundingClientRect();
window.addEventListener('resize', () => (bgRect = bgEl.getBoundingClientRect()));

// preload game background
new Image().src = './background-img.png';

// ----- start game on Enter -----
// document.addEventListener('keydown', (e) => {
//   if (e.key === 'Enter' && game_state !== 'Play') {
//     // switch background to in-game image
//     bgEl.style.backgroundImage = 'url("./background-img.png")';
//     bgEl.style.backgroundAttachment = 'scroll';
//     bgEl.style.backgroundRepeat = 'no-repeat';
//     bgEl.style.backgroundPosition = 'center';
//     bgEl.style.backgroundSize = 'cover';
//     bgRect = bgEl.getBoundingClientRect();

//     // reset world
//     document.querySelectorAll('.pipe_sprite').forEach(el => el.remove());
//     img.style.display = 'block';
//     bird.style.top = '40vh';
//     scoreTitle.textContent = 'Score : ';
//     scoreVal.textContent = '0';
//     messageEl.textContent = '';
//     messageEl.classList.remove('messageStyle');

//     game_state = 'Play';
//     play();
//   }
// });
document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && game_state !== 'Play') {

    // FORCE background swap (overrides any prior CSS)
    const v = Date.now(); // cache-bust
    bgEl.style.setProperty(
      'background',
      `url("./background-img.png?v=${v}") no-repeat center center`,
      'important'
    );
    bgEl.style.backgroundSize = 'cover';
    bgEl.style.backgroundAttachment = 'scroll';

    bgRect = bgEl.getBoundingClientRect();

    // reset & start
    document.querySelectorAll('.pipe_sprite').forEach(el => el.remove());
    img.style.display = 'block';
    bird.style.top = '40vh';
    scoreTitle.textContent = 'Score : ';
    scoreVal.textContent = '0';
    messageEl.textContent = '';
    messageEl.classList.remove('messageStyle');
    game_state = 'Play';
    play();
  }
});


// ----- bird control (pressed / released) -----
let bird_dy = 0;
document.addEventListener('keydown', (e) => {
  if (game_state !== 'Play') return;
  if (e.key === 'ArrowUp' || e.key === ' ') {
    img.src = './bird2.png';
    bird_dy = -7.6;
  }
});
document.addEventListener('keyup', (e) => {
  if (game_state !== 'Play') return;
  if (e.key === 'ArrowUp' || e.key === ' ') {
    img.src = './bird.png';
  }
});

// ================== GAME LOOP ==================
function play() {
  // pipes
  let pipe_sep = 0;
  const pipe_gap = 35; // vh

  // move everything
  function move() {
    if (game_state !== 'Play') return;

    document.querySelectorAll('.pipe_sprite').forEach((el) => {
      const r = el.getBoundingClientRect();
      birdRect = bird.getBoundingClientRect();

      // offscreen -> remove
      if (r.right <= 0) {
        el.remove();
        return;
      }

      // collision
      const hit =
        birdRect.left < r.left + r.width &&
        birdRect.left + birdRect.width > r.left &&
        birdRect.top < r.top + r.height &&
        birdRect.top + birdRect.height > r.top;

      if (hit) {
        endGame();
        return;
      }

      // score when bird passes the pipe
      if (r.right < birdRect.left && el.increase_score === '1') {
        scoreVal.textContent = (+scoreVal.textContent) + 1;
        el.increase_score = '0';
        sndPoint.play();
      }

      // move pipe left
      el.style.left = (r.left - move_speed) + 'px';
    });

    requestAnimationFrame(move);
  }

  // gravity
  function apply_gravity() {
    if (game_state !== 'Play') return;

    bird_dy += gravity;

    // top/bottom bounds using background rect
    if (birdRect.top <= 0 || birdRect.bottom >= bgRect.bottom) {
      endGame();
      return;
    }

    bird.style.top = (birdRect.top + bird_dy) + 'px';
    birdRect = bird.getBoundingClientRect();

    requestAnimationFrame(apply_gravity);
  }

  // create pipes
  function create_pipe() {
    if (game_state !== 'Play') return;

    if (pipe_sep > 115) {
      pipe_sep = 0;

      const pipe_posi = Math.floor(Math.random() * 43) + 8;

      const topPipe = document.createElement('div');
      topPipe.className = 'pipe_sprite';
      topPipe.style.top = (pipe_posi - 70) + 'vh';
      topPipe.style.left = '100vw';
      topPipe.textContent = 'RIALO';
      topPipe.increase_score = '0';
      document.body.appendChild(topPipe);

      const bottomPipe = document.createElement('div');
      bottomPipe.className = 'pipe_sprite';
      bottomPipe.style.top = (pipe_posi + pipe_gap) + 'vh';
      bottomPipe.style.left = '100vw';
      bottomPipe.textContent = 'RIALO';
      bottomPipe.increase_score = '1';
      document.body.appendChild(bottomPipe);
    }

    pipe_sep++;
    requestAnimationFrame(create_pipe);
  }

  function endGame() {
    game_state = 'End';
    messageEl.innerHTML = 'Game Over'.fontcolor('red') + '<br>Press Enter To Restart';
    messageEl.classList.add('messageStyle');
    img.style.display = 'none';
    sndDie.play();
    // small delay so the user can see the message, then reload
    setTimeout(() => window.location.reload(), 600);
  }

  requestAnimationFrame(move);
  requestAnimationFrame(apply_gravity);
  requestAnimationFrame(create_pipe);
}






