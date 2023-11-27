document.querySelector('.rightarrow').style.display = 'none';

document.querySelector('.leftarrow').addEventListener('click', function () {
    document.querySelectorAll('.hidden-items').forEach(item => {
        item.style.display = 'none';
        
    });

    document.querySelectorAll('.sidenav-mini-icon').forEach(miniIcon => {
        miniIcon.style.display = 'block';
        miniIcon.style.marginTop = '10px'; 
    });

    document.querySelectorAll('.gallery').forEach(gallery=>{
        gallery.style.height='70px'
    })

    document.querySelectorAll('.main-content').forEach(main => {
        main.style.width = '92%';
        main.style.marginLeft='-118.5px'
        
    });

    document.querySelector('.home').style.marginLeft = '25px';
    document.querySelector('.pages').style.marginLeft = '25px';
    document.querySelector('.elements').style.marginLeft = '20px';

    let sidebar = document.getElementById('side-bar');
    sidebar.style.width = '6%';

    

    document.querySelector('.rightarrow').style.display = 'block';
});
document.querySelector('.rightarrow').addEventListener('click', function () {
    
    let sidebar = document.getElementById('side-bar');
    sidebar.style.width = ''; 
    sidebar.style.margin = '';
    

    sidebar.style.width = '13.75rem';
    document.querySelectorAll('.main-content').forEach(main => {
        main.style.width = '83%';
        main.style.marginLeft='220px';
    });
    document.querySelectorAll('.gallery').forEach(gallery=>{
        gallery.style.height='50px'
    })
    
    document.querySelectorAll('.sidenav-mini-icon').forEach(miniIcon => {
        miniIcon.style.marginTop = '';
    });
    document.querySelectorAll('.hidden-items').forEach(item => {
        item.style.display = 'block';
        item.style.transform = 'none';
        item.style.margin = 'none !important';
    });

    
    document.querySelector('.rightarrow').style.display = 'none';

});
//dark and light mode
document.addEventListener("DOMContentLoaded", function () {
    var themeToggle = document.getElementById("theme-toggle");
    var body = document.body;
    var iconLight = document.getElementById("icon-light");
    var iconDark = document.getElementById("icon-dark");
    var table = document.getElementById('table');
    var paginationContainer = document.getElementById('pagination-container');

    iconLight.classList.add("d-none");
    // iconDark.classList.add("d-none");

    themeToggle.addEventListener("click", function () {
        body.classList.toggle("dark-theme");

        if (body.classList.contains("dark-theme")) {
            iconLight.classList.remove("d-none");
            iconDark.classList.add("d-none");
            document.querySelector('.theme').style.backgroundColor = 'black';

            let navbar=document.getElementById('nav-bar')
            navbar.classList.remove('bg-light');
            navbar.classList.add('bg-dark','text-white');
            console.log(navbar.classList);

            let card=document.querySelectorAll('.card');
            card.forEach(card => {
                // card.classList.remove('bg-dark');
                card.classList.add('bg-dark');
                card.classList.remove('text-dark');

                card.classList.add('text-light');
        
            });
            let newscard = document.getElementsByTagName('body');
            newscard.classList.remove('text-secondary');
            newscard.classList.add('text-light');
            console.log(newscard);
            document.getElementById('table-dark').style.color='white'


           
        } else {
            iconLight.classList.add("d-none");
            iconDark.classList.remove("d-none");
            document.querySelector('.theme').style.backgroundColor = 'white';
    
            let navbar=document.getElementById('nav-bar');
            navbar.classList.remove('bg-dark');
            navbar.classList.add('bg-light');

            let card=document.querySelectorAll('.card');
            card.forEach(card => {
                card.classList.remove('bg-dark');
                // card.classList.remove('text-secondary');
                card.classList.add('bg-light');
                card.classList.remove('text-light');
                card.classList.add('text-dark');

            });
        
        }
    });

});
