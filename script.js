const status_update = document.querySelector('.status');
const btn = document.querySelector('.btn');
let check = 0;


btn.addEventListener('click', ()=>{
        if(check == 0){
            status_update.innerHTML = "Friends"
            status_update.style.color = 'green';
            btn.innerHTML = "Remove Friend"
            btn.style.backgroundColor = 'rgb(218, 218, 218)';
            btn.style.color = 'black'
            check = 1;
        }else{
            status_update.innerHTML = "Stranger"
            status_update.style.color = 'red';
            btn.innerHTML = "Add Friend"
            btn.style.backgroundColor = 'skyblue';
            btn.style.color = 'white'
            check = 0;
        }

});

