
const Homepage = new URL("../images/doctor.jpg",import.meta.url)
let DoctorUi = () =>{
    return(
        <div>
            <img src={Homepage} style={{width:1360, height:600}} />
        </div>

    )
}

export default DoctorUi;