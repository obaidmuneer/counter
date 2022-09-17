let count = 0

let result = document.querySelector('#result')
let btns = document.querySelectorAll('.btn')

btns.forEach(item => {
    item.addEventListener('click', function (e){
        if(e.currentTarget.classList.contains('dec')){
            result.innerHTML = --count
        }else if(e.currentTarget.classList.contains('inc')){
            // count++
            result.innerHTML = ++count
        }else{
            count = 0
            result.innerHTML = count
        }

        if (count < 0) {
            result.style.color = 'red'
        }else if (count > 0){
            result.style.color = 'green'
        }else{
            result.style.color = 'black'
        }
    })
})
