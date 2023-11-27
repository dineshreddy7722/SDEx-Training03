const url="https://mock-api-template-rh6s.onrender.com/userlist";
let tbody=document.getElementById('table-body')

window.addEventListener("load", () => {
    fetchData();
});

function fetchData(){
    fetch(url)
    .then((res)=>{
        if(!res.ok){
            throw new console.Error(`Error fetching data:${res.status} - ${res.statusText}`);
        }
        return res.json()
    })
    .then((fetchedData)=>{
        data = fetchedData; 
        displaydata(data);
        
    })
    .catch((error) => console.error('Error fetching data:',error));
}
function displaydata(data){
    tbody.innerHTML=''
    data.forEach(element => {
        const newRow = document.createElement("tr");
        const profile = document.createElement("td");
        const img=document.createElement('img')
        img.setAttribute('src',element.profile)
        img.style.width='40px'
        img.style.backgroundColor='#3a57e81a;'
        profile.append(img);
        

        const name = document.createElement("td");
        name.innerText=element.name
        const contact=document.createElement('td')
        contact.innerText=element.contact
        const email = document.createElement("td");
        email.innerText=element.email;
        const country = document.createElement("td");
        country.innerText=element.country;
        const status = document.createElement("td");
        const button=document.createElement('button')
        button.innerText=element.status
        status.append(button)
        // status.innerText=element.status;
        button.style.fontSize='12px'
        button.style.color='#fff'
        button.style.border='none'
        button.style.borderRadius='5px'
       

        const company = document.createElement("td");
        company.innerText=element.company;
        const joindate = document.createElement("td");
        joindate.innerText=element.joinDate;
        const actions=document.createElement('td');
        actions.style.display='flex';
        actions.style.padding='19px'
        // actions.style.whiteSpace='nowrap';

        const addUser=document.createElement('button')
        addUser.className='fa-solid fa-user-plus';
        addUser.style.width='25px'
        addUser.style.height='25px'
        addUser.style.backgroundColor='#1aa053'
        addUser.style.color='#fff'
        addUser.style.border='none'
        addUser.style.borderRadius='5px'
        addUser.style.padding='4px'

        const edit=document.createElement('button')
        edit.className="fa-solid fa-pen-to-square";
        edit.style.marginLeft='5px'
        edit.style.width='25px'
        edit.style.height='25px'
        edit.style.backgroundColor='#f16a1b'
        edit.style.color='#fff'
        edit.style.border='none'
        edit.style.borderRadius='5px'
        edit.style.padding='4px'
        
        

        const deleteIcon=document.createElement('button')
        deleteIcon.className="fas fa-trash ";
        deleteIcon.style.marginLeft='5px'
        deleteIcon.style.width='25px'
        deleteIcon.style.height='25px'
        deleteIcon.style.backgroundColor='#9a281a'
        deleteIcon.style.color='#fff'
        deleteIcon.style.border='none'
        deleteIcon.style.borderRadius='5px'
        deleteIcon.style.padding='4px'

        
        actions.append(addUser,edit,deleteIcon);

        newRow.append(profile,name,contact,email,country,status,company,joindate,actions)
        console.log(newRow);
        tbody.append(newRow)
         
        if(button.innerText==='active'){
            button.style.backgroundColor='blue'
        }
        else if(button.innerText === 'inactive'){
            button.style.backgroundColor='#c03221'
        }
        else if(button.innerText === 'pending'){
            button.style.backgroundColor='#f16a1b'
        }
        else if(button.innerText === 'hold'){
            button.style.backgroundColor='#079aa2'
        }
        else if(button.innerText === 'complete'){
            button.style.backgroundColor='#1aa053'
        }


    });
}

