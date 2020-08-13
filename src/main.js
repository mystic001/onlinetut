var showMenu = (tog,nav) => {
    const toggle = document.querySelector(tog)
    const show = document.querySelector(nav);

    
        toggle.addEventListener('click', ()=>{
            toggle.classList.toggle('active')
            show.classList.toggle('active')
            
        })

    }

    



showMenu('.toggle','.navigation');
