let x=document.querySelector('x');
let s=0;
for (let i=0;i<10;i++){
    x.innerHTML+=`<d>${i}?</d><form><input type='search' id='${i}'></form>`
    x.addEventListener('submit',(e)=>{
        e.preventDefault();
        let v=document.getElementById(`${i}`).value;
        let c=document.querySelector('d').style.color
        if (i==v){
            c='green';
            s++;
        }else{
            c='red'}
    } ) }
x.innerHTML+=s