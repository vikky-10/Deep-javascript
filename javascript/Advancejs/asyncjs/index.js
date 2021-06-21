'use strict';
// callback hell
setTimeout(() => {
  console.log('1️⃣ work done');
  setTimeout(() => {
    console.log('2️⃣ work done');
    setTimeout(() => {
      console.log('2️⃣ work done');
      setTimeout(() => {
        console.log('3️⃣ work done');
        setTimeout(() => {
          console.log('4️⃣ work done');
          setTimeout(() => {
            console.log('5️⃣ work done');
            setTimeout(() => {
              console.log('6️⃣ work done');
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
