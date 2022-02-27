let x=document.querySelector('x');
let n=1;
let s=0;
let m = () => {
    if (n<11){
    x.innerHTML+=`<d>${n}?</d><form><input type='search' id='${n}'></form>`
    x.addEventListener('submit',(e)=>{
        e.preventDefault();
        let i=document.getElementById(`${n}`).value;
        let c=document.querySelector('d').style.color
        if (i==n){
            c='green';
            s++;
        }else{
            c='red'
        }n++;
        m();
    })}else{
        x.innerHTML+=s
    }
}
m()