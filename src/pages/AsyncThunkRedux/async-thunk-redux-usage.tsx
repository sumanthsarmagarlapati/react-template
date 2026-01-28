import { useAppSelector } from "../../store/hooks"

export default function AsyncRedux() {
const userAsyncDetails=useAppSelector((state)=>state.userAsync.userDetails)
    return (
        <div>
            Async Redux {userAsyncDetails.name}
        </div>
    )
}