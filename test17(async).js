'use strict';

/************************ */
/* async함수, await 키워드 */
/************************ */
// async 함수는 리턴값을 감싸 이행된 promise를 반환 
// await 키워드는 async함수 안에서만 사용가능. promise가 처리될 때까지 기다린다 


class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = 'HttpError';
    this.response = response;
  }
} 

async function loadJson(url) {
  let response = await fetch(url);
  
  if (response.status == 200) {
    return response.json();       // return 하기 전에 await해도 이 함수를 사용하는 곳에서 await를 또 해줘야 함
  } else {
    throw new HttpError(response);
  }    
}

// 유효한 사용자를 찾을 때까지 반복해서 username을 물어봄
async function demoGithubUser() {
  let result;
  while(1) {
      let name = prompt("GitHub username: ", "lukas");  

      try {
        result = await loadJson(`https://api.github.com/users/${name}`);  // 여기서 await 하지 않으면 아래 코드가 먼저 실행됨
        break;
      } catch(err) {
        if( err instanceof HttpError && err.response.status == 404 ) {
          alert("input again...");
        } else {
          throw err;
        }
      }
  }

  alert(result.name);
  return result;
} 
demoGithubUser();



// async function showAvatar(name) {
//   try {
//     let response = await fetch(`https://api.github.com/users/${name}`);
//     let userInfo = await response.json();  // await가 없으면 에러 발생함

//     let img = document.createElement('img');
//     img.src = userInfo.avatar_url;
//     img.className = 'promise-avatar-example';
//     document.body.append(img);  

//     await new Promise( (resolve) => setTimeout(resolve, 2000) );
//     img.remove();

//     return userInfo;
//   } catch(err) {
//     alert(err);
//     return null;
//   }    
// }
// showAvatar('lukas');


// async function f() {
//   let prms = new Promise( (res, rej) => {
//     setTimeout(() => res('OK'), 1000);
//   });
//   console.log('1');
//   let result = await prms;
//   console.log('2');
//   return result;
// }
// f().then(console.log);


// async function f() {
//   return 1;
// }
// console.log(f());   // promise가 반환됨
// f().then(console.log);  // f() 함수의 리턴값이 출력됨
   

