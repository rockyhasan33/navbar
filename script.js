const navBtn = document.querySelector('.dots');
console.log(navBtn);
const navList = document.querySelector('.nav_lists');

console.log(navList)


navBtn.addEventListener('click', clickBtn);

function clickBtn() {
    let value = navList.classList.contains('navbar_collapse');
    console.log(value)
    if(value) {
        navList.classList.remove('navbar_collapse');
    }else {
        navList.classList.add('navbar_collapse');
    }

    
}