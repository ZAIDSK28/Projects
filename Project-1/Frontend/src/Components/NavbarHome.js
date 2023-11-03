
// const Homepage = new URL("../images/one.jpg",import.meta.url)
const Homepage1 = new URL("./images/2.png",import.meta.url)
const Homepage2 = new URL("./images/3.png",import.meta.url)
const Homepage3 = new URL("./images/4.png",import.meta.url)
const Homepage4 = new URL("./images/5.png",import.meta.url)
const Homepage5 = new URL("./images/6_1.png",import.meta.url)
const Homepage6 = new URL("./images/7.png",import.meta.url)
let NavbarHome = () =>{
    return(
        <div>
            <img src={Homepage1} style={{width:1360, height:600}} />
            <img src={Homepage2} style={{width:1360, height:600}} />
            <img src={Homepage3} style={{width:1360, height:600}} />
            <img src={Homepage4} style={{width:1360, height:600}} />
            <img src={Homepage5} style={{width:1360, height:600}} />
            <img src={Homepage6} style={{width:1360, height:600}} />
        </div>

    )
}

export default NavbarHome;