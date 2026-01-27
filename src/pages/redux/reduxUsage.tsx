import { Button } from "primereact/button"
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { resetUser, updateUserDetails } from "./redux"
import { useDispatch, useSelector } from "react-redux"
import type { RootState } from "../../store/store"

export default function ReduxUsage() {
    // by using useAppSelector and useAppDispatch
    const userDetails = useAppSelector(state => state.user)
    const userDispatch = useAppDispatch()

    // by using useSelector and useDispatch
    const userInfo=useSelector((state:RootState)=>state.user)
    const dispatch=useDispatch()
    return (
        <>
            <div>
                Redux Page {userInfo.name}
                <Button type="button" onClick={() => dispatch(updateUserDetails({ name: "Sumanth Sarma" }))}>Update Name</Button>
                <Button type="button" onClick={() => dispatch(resetUser())}>Reset User</Button>
            </div>
        </>
    )
}