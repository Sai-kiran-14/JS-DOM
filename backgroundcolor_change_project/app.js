const buttons = document.querySelectorAll('.button')
// console.log(buttons)

// buttons.forEach(function(button){
//     button.addEventListener('click',()=>{
//         console.log(`${button.id} button clicked`)
//         document.querySelector('body').style.backgroundColor=button.id
//     })
// })


buttons.forEach(function(button){
    button.addEventListener('click',(e)=>{
        // console.log(e.target)
        if(e.target.id === 'grey'){
            document.querySelector('body').style.backgroundColor=e.target.id
        }
        if(e.target.id === 'white'){
            document.querySelector('body').style.backgroundColor=e.target.id
        }
        if(e.target.id === 'blue'){
            document.querySelector('body').style.backgroundColor=e.target.id
        }
        if(e.target.id === 'yellow'){
            document.querySelector('body').style.backgroundColor=e.target.id
        }
    })
})