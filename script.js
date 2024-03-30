const datas=[
    {
    name:'python',
    condition:"done",
    stack:["numpy"]
    },
    {
    name:"JavaScript",
    condition:"ongoing",
    stack:["numpy"]
    },
    {
    name:"HTML & CSS",
    condition:"coming",
    stack:["numpy"]
    },
    {
    name:"React",
    condition:"coming",
    stack:["numpy"]
    },
    {
    name:"ReactNative",
    condition:"coming",
    stack:["numpy"]
    },
    {
    name:"Fullstack",
    condition:"coming",
    stack:["numpy"]
    },
    {
    name:"DataAnalysis",
    condition:"coming",
    stack:["numpy"]
    },
    {
    name:"Machine Learning",
    condition:"coming",
    stack:["numpy"]
    },
    {
    name:"JavaScript",
    condition:"coming",
    stack:["numpy"]
    },
    ]
    setInterval(function(){
        const clock = document.querySelector(".display");
        let time = new Date();
        let seconds = time.getSeconds()
        let minutes = time.getMinutes()
        let hours = time.getHours()
    let miliseconds = time.getMilliseconds()
    let day2=time.getUTCDay()
        let day="AM"
        clock.textContent= hours + ":"+minutes+":"+seconds  +day 
    })
    datas.forEach((challange)=>{
        let card=document.createElement("div")
        card.classList.add("card")
        card.innerHTML =`
        <h3>${datas.name}</h3>
        <h3 class="misal">
        ${challange.stack}
        <div class="arrmisal"></div>
        </h3>
        <p>${datas.condition}</p>
        `
    })