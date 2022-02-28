let d=document.querySelector
let x=d('form');
let s=0;
/*
for (let i=0;i<10;i++){
    x.innerHTML+=`<p id='p${i}' style="width:5px;height:5px">${i}?</p>
    <input type='text' id='${i}'>`
    x.addEventListener('submit',(e)=>{
        e.preventDefault();
        let a=i
        let v=document.getElementById(`${i}`).value;
        let c=document.querySelector(`#p${i}`).style.backgroundColor
        if (a==v){
            c='green';
            s++;
        }else{
            c='red'}
    } ) }
x.innerHTML+=s
*/
for(let i=0; i<10; i++) {
    x.innerHTML+=`<p id='p${i}' style="">${i}?</p>
    <input type='text' id='${i}'>`
}
x.addEventListener('submit', e=> {
    e.preventDefault();

    for(let i=0; i<10; i++) {
        let v=d(`${i}`).value,
        p = d(`p${i}`)

        if (v == i) {
            document.getElementById(`p${i}`).style.backgroundColor="green";
            s++
        } else {
            document.getElementById(`p${i}`).style.backgroundColor="red"
        }
    }
    x.innerHTML+=s
})