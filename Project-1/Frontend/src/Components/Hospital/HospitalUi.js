
const Homepage = new URL("../images/hospital.jpg",import.meta.url)
let HospitalUi = () =>{
    return(
        <div>
            <img src={Homepage} style={{width:1360, height:600}} />
        </div>

    )
}

export default HospitalUi;