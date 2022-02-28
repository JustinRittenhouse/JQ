let x=document.querySelector('form'), s=0
for(let i=0; i<10; i++) {x.innerHTML+=`<p id='p${i}' style="">${i}?</p><input type='text' id='${i}'>`}
x.addEventListener('submit', e=> {
    e.preventDefault()
    for(let i=0; i<10; i++) {if(document.getElementById(`${i}`).value==i){document.getElementById(`p${i}`).style.backgroundColor="green";s++}
    else{document.getElementById(`p${i}`).style.backgroundColor="red"}}
    x.innerHTML+=s})