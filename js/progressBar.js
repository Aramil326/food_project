// function analysis() {
//   var bar = new ProgressBar.Circle(progressBar, {
//     color: '#2DC747',
//     strokeWidth: 4,
//     trailWidth: 1,
//     easing: 'easeInOut',
//     duration: 10000,
//     text: {
//       autoStyleContainer: false
//     },
//     from: { color: '#2DC747', width: 1 },
//     to: { color: '#2DC747', width: 4 },
//     // Set default step function for all animate calls
//     step: function (state, circle) {
//       circle.path.setAttribute('stroke', state.color);
//       circle.path.setAttribute('stroke-width', state.width);
  
//       var value = Math.round(circle.value() * 100);
//       if (value === 0) {
//         circle.setText('');
//       } else {
//         circle.setText(`${value}%`);
//       }
  
//     }
//   });
//   bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
//   bar.text.style.fontSize = '2rem';
  
//   bar.animate(1)
  
//   const checkpoint1 = document.querySelector('.checkpoints li img[data-check="1"]'),
//     checkpoint2 = document.querySelector('.checkpoints li img[data-check="2"]'),
//     checkpoint3 = document.querySelector('.checkpoints li img[data-check="3"]'),
//     checkpoint4 = document.querySelector('.checkpoints li img[data-check="4"]')
  
  
  
//   function checkpointsRotate(checkpoint) {
//     let start = Date.now();
  
//     let timer = setInterval(function () {
//       let timePassed = Date.now() - start;
  
//       checkpoint.style.transform = `rotate(${timePassed / 5}deg)`;
  
//       if (timePassed > 2500) {
//         clearInterval(timer)
//         checkpoint.style.transform = `rotate(0deg)`;
//         checkpoint.src = 'img/check.png'
//       }
//     }, 20);
//   }
  
//   checkpointsRotate(checkpoint1)
  
//   setTimeout(() => checkpointsRotate(checkpoint2), 2500);
//   setTimeout(() => checkpointsRotate(checkpoint3), 5000);
//   setTimeout(() => checkpointsRotate(checkpoint4), 7500);  
// }