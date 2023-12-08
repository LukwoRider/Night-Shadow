// game.js
const canvas = document.getElementById('gameCanvas');

const ctx = canvas.getContext('2d');

const playerImage = document.getElementById('playerImage');
const playerShootingImage = document.getElementById('playerShootingImage');

const co2Ennemy = document.getElementById('Ennemy_01');
const ch4Ennemy = document.getElementById('Ennemy_02');

const shoot_img = document.getElementById('Hadouken');

var myAudio = document.getElementById("ost-ryu");

var replayButton = document.getElementById("replayButton");
var returnButton = document.getElementById("returnButton");

function playAudio() {
    myAudio.play();
}

function stopAudio() {
    myAudio.pause();
    myAudio.currentTime = 0;
}

const player = {
    x: canvas.width / 2,
    y: canvas.height - 40,
    life: 5,
    width: 80,
    height: 80,
    speed: 5,
    score: 0
};

function start() {
    player.x = canvas.width / 2;
    player.y = canvas.height - 30;
    player.life = 5;
    player.score = 0;
    isLoosing = false;
    document.getElementById('lifeDisplay').textContent = 'Vie: ' + player.life;
    document.getElementById('scoreDisplay').textContent = 'Score: ' + player.score;
    playAudio();
}

const bullets = [];
const bulletSpeed = 7;

const enemies = [];
const enemySpeed = 2;

const tolerance = 50;

let isMovingLeft = false;
let isMovingRight = false;;

let isLoosing = false;

let isShooting = false;

function drawPlayer() {
    const imageToDraw = isShooting ? playerShootingImage : playerImage;
    ctx.drawImage(imageToDraw, player.x - player.width / 2, player.y - player.height / 2, player.width, player.height);
}

function checkLife() {
    if (player.life <= 0) {
        isLoosing = true;
        enemies.splice(0, enemies.length);
        bullets.splice(0, bullets.length); 
        stopAudio();
        ctx.fillStyle = 'red';
        ctx.font = 'bold 80px Arial';
        ctx.fillText('Game Over', canvas.width / 2 - 200, canvas.height / 2 - 40);
        ctx.fillText('Score: ' + player.score, canvas.width / 2 - 180, canvas.height / 2 + 50);
        replayButton.style.display = 'block';
        returnButton.style.display = 'block';
    }
}

function checkCollisions() {
    for (let i = bullets.length - 1; i >= 0; i--) {
        const bullet = bullets[i];
        for (let j = enemies.length - 1; j >= 0; j--) {
            const enemy = enemies[j];
            if (
                bullet.x >= enemy.x - enemy.width / 2 &&
                bullet.x <= enemy.x + enemy.width / 2 &&
                bullet.y >= enemy.y - enemy.height / 2 &&
                bullet.y <= enemy.y + enemy.height / 2
            ) {
                bullets.splice(i, 1);
                enemies.splice(j, 1);

                player.score += 10;
                document.getElementById('scoreDisplay').textContent = 'Score: ' + player.score;
            }
        }
    }
    for (let i = enemies.length - 1; i >= 0; i--) {
        const enemie = enemies[i]

        if (enemie.y > canvas.height){
            enemies.splice(i, 1);

            player.life -= 1;
            document.getElementById('lifeDisplay').textContent = 'Vie: ' + player.life;
            checkLife();
        }
        if (Math.abs(enemie.y - player.y) < tolerance && Math.abs(enemie.x - player.x) < tolerance) {
            enemies.splice(i, 1);
            player.life -= 1;
            document.getElementById('lifeDisplay').textContent = 'Vie: ' + player.life;
            checkLife();
        }
    }
}

function drawEnemies() {
    for (const enemy of enemies) {
        ctx.drawImage(enemy.img, enemy.x - enemy.width / 2, enemy.y - enemy.height / 2, enemy.width, enemy.height);
    }
}

function drawBullets() {
    for (const bullet of bullets) {
        ctx.drawImage(shoot_img, bullet.x - bullet.width / 2, bullet.y - bullet.height / 2, bullet.width, bullet.height);
    }
}

function moveBullets() {
    for (let i = bullets.length - 1; i >= 0; i--) {
        bullets[i].y -= bulletSpeed;
        if (bullets[i].y < 0) {
            bullets.splice(i, 1);
        }
    }
}

function moveEnemies() {
    for (let i = enemies.length - 1; i >= 0; i--) {
        enemies[i].y += enemySpeed;
    }
}

function chooseEnemyImg() {
    const alea = Math.floor(Math.random() * 2);
        if (alea === 0) {
            return ch4Ennemy;
        }
        else {
            return co2Ennemy;
        }
}

function createEnemy() {
    const enemy = {
        x: Math.random() * canvas.width,
        y: 0,
        width: 80,
        height: 80,
        img : chooseEnemyImg()
    };
    enemies.push(enemy);
}

function shoot() {
    if (isShooting === false){
        const bullet = {
            x: player.x,
            y: player.y - player.height / 2,
            width: 45,
            height: 45,
            img : shoot_img
        };
        bullets.push(bullet);
    }
}

function updatePlayer() {
    if (isMovingLeft && player.x - player.width / 2 > 0) {
        player.x -= player.speed;
    }

    if (isMovingRight && player.x + player.width / 2 < canvas.width) {
        player.x += player.speed;
    }
}

function update() {
    moveBullets();
    moveEnemies();
    updatePlayer();
    checkCollisions();
    drawPlayer();
    drawBullets();
    drawEnemies();
}

function gameLoop() {
    if (isLoosing != true){
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        if (Math.random() < 0.02) {
            if (enemies.length < 6) {
                createEnemy();
            } 
        }
        update();
        requestAnimationFrame(gameLoop);
    }

}

document.addEventListener('keydown', function (event) {
    switch (event.code) {
        case 'ArrowLeft':
            isMovingLeft = true;
            break;
        case 'ArrowRight':
            isMovingRight = true;
            break;
        case 'Space':
            shoot();
            isShooting = true;
            break;

    }
});

document.addEventListener('keyup', function (event) {
    switch (event.code) {
        case 'ArrowLeft':
            isMovingLeft = false;
            break;
        case 'ArrowRight':
            isMovingRight = false;
            break;
        case 'Space':
            isShooting = false; 
            break;
    }
});

replayButton.addEventListener("click", function() {
    start();
    gameLoop();
    replayButton.style.display = 'none';
    returnButton.style.display = 'none';
});

returnButton.addEventListener("click", function() {
    window.history.back();
});

myAudio.addEventListener('ended', function() {
    playAudio;
});

window.onload = playAudio;
gameLoop();
