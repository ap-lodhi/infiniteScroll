const container = document.querySelector('.container')

let limit = 4;
let pageCount =1;
let postCount =1;


const getPost =async ()=>{
    const res =await fetch(`https://jsonplaceholder.typicode.com/comments?_limit=${limit}$_page=${pageCount}`)
    const data = await res.json()


  data.map((ele,index)=>{
    const htmlData = `  
    <div class="comments">
    <p class="post-id"> ${pageCount++}</p>
    <h2 class="title"> ${ele.name}</h2>
    <p class="com-info"> ${ele.body}</p>
</div>`;
container.insertAdjacentHTML('beforeend', htmlData)
   
  })
}

getPost()
const showData=()=>{
    setTimeout(()=>{
        pageCount++;
        getPost()
    },300)
}

window.addEventListener('scroll',()=>{
    const {scrollHeight, scrollTop, clientHeight} = document.documentElement;
    if(scrollTop+clientHeight >= scrollHeight){
        showData()
        console.log("i am at bottom")
    }
})