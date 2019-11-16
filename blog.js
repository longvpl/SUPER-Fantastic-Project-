const api_url = "https://5dc16e4d6ca10a0014d5d66b.mockapi.io/vidu/nba"
const blog = document.getElementById("blog")
async function call_nba(){
    const connection = await fetch(api_url)
    const data = await connection.json();
    // console.log(data[0]);
    blog.innerHTML=" ";
    for (let i = 0; i < 6; i++) {
        let img1 = data[i]["img1"];
        let headerr = data[i]["header"];
        let para = data[i]["paragraph1"];

        blog.insertAdjacentHTML("afterbegin",`<div class="bao">
        <div class="anh"><img src="${img1}" alt=""></div>
        <div class="bentrai">
            <div class="headerr">${headerr}</div>
            <div class="doan">${para}</div>
        </div>
    </div>
    <hr>`)
    }
    // console.log(img1)
    // console.log(headerr)
    // console.log(para)

}
call_nba()