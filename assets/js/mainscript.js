const buttonTab = document.querySelectorAll('.tab__controls button');

buttonTab.forEach((button) =>{
    button.addEventListener('click', ()=>{
        const parent = button.parentNode;
        const grantParent = parent.parentNode;
        const container = grantParent.querySelector('.tab__contenedor');

        const childrenList = Array.from(parent.children);
        const index = childrenList.indexOf(button);
        container.style.transform =  `translatex(-${index * 100}%)`;

        parent.querySelectorAll('button.active').forEach(activeBtn => activeBtn.classList.remove('active'));

        button.classList.add('active');
    });
});
