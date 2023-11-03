
const Homepage = new URL("../images/patienthome1.jpg",import.meta.url)
let PatientUi = () =>{
    return(
        <div>
            <img  src={Homepage} style={{width:1360, height:600}} />
        </div>

    )
}

export default PatientUi;