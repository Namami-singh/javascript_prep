const table = document.querySelector('table');

document.addEventListener('keydown',(e)=>{
    const row=document.createElement('tr');

//method1
    // const key=document.createElement('td');
    // const keycode=document.createElement('td');
    // const time=document.createElement('td');

    // key.innerText=`${e.key}`;
    // keycode.innerText=`${e.code}`;
    // time.innerText=`${(e.timeStamp/1000).toFixed(2)}secs`;
    // row.appendChild(key);
    // row.appendChild(keycode);
    // row.appendChild(time);


//method2
    row.innerHTML=`<td>${e.key==' '? 'Space' : e.key}</td>
                   <td>${e.keyCode}</td>
                   <td>${(e.timeStamp/1000).toFixed(2)}secs</td>`



                
    table.appendChild(row);
}) 