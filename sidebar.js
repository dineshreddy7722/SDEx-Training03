document.querySelector('.rightarrow').style.display = 'none';

document.querySelector('.leftarrow').addEventListener('click', function () {
    document.querySelectorAll('.hidden-items').forEach(item => {
        item.style.display = 'none';
        
    });

    document.querySelectorAll('.sidenav-mini-icon').forEach(miniIcon => {
        miniIcon.style.display = 'block';
        miniIcon.style.marginTop = '10px'; 
    });

    document.querySelector('.home').style.marginLeft = '25px';
    document.querySelector('.pages').style.marginLeft = '25px';
    document.querySelector('.elements').style.marginLeft = '20px';

    let sidebar = document.getElementById('side-bar');
    sidebar.style.width = '6rem';

    document.querySelector('.rightarrow').style.display = 'block';
});
document.querySelector('.rightarrow').addEventListener('click', function () {
    
    let sidebar = document.getElementById('side-bar');
    sidebar.style.width = ''; 
    sidebar.style.margin = '';
    

    sidebar.style.width = '15.25rem';
    
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