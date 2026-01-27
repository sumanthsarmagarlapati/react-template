import { useAppDispatch, useAppSelector } from "../../store/hooks"

export default function ReduxUsage() {
    const userDetails = useAppSelector(state => state.user)
    const userDispatch=useAppDispatch()


    return (
        <>
            <div>
                Redux Page {userDetails.name}
                {/* <button type="button" onClick={(prev)=>userDispatch()}>Click to Chane Name</button> */}
            </div>
        </>
    )
}