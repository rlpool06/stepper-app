import { userInfo } from "os";

function Confirm() {
    return ( 
        <div style={{ justifyContent: 'center', flexDirection: 'column'}}>
            <h1>Confirm</h1>
            <p>Please confirm your information.</p>
            <div style={{ justifyContent: 'center', flexDirection: 'column'}}>
                Name
                Email
                Password
                {/* {user.name}
                {user.email}
                {user.password} */}
            </div>
            <p>Does this look correct?</p>
        </div>
     );
}

export default Confirm;