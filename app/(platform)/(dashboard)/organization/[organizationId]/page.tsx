import {auth} from "@clerk/nextjs"
const OrganizationIdPage = ()=>{
   const {userId,orgId}=auth()
    return(
        <div>
            Organization Page {orgId}
        </div>
    )
}
export default OrganizationIdPage;