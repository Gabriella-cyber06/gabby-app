import { useParams } from "react-router-dom";
const UserDetails = () => {
const params = useParams();
  return (
    <div className="px-8 py-6y">
       User Details with Id {params.user_id} 
       <br />
       and username of {params.uname}
    </div>
  )
}

export default UserDetails