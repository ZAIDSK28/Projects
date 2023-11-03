
const Homepage = new URL("../images/33.jpg",import.meta.url)
let AdminUi = () =>{
    return(
        <div>
            <img src={Homepage} style={{width:1360, height:600}} />
        </div>

    )
}

export default AdminUi;