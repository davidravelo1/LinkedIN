import { Modal } from "antd"
import { handleModalEdit } from "../../features/users/userSlice";
import useRedux from "../../hooks/redux/useRedux"
import UserForm from "../forms/UserForm";

function UserEditionModal() {

    const {
        dispatch,
        selector: {
            modals,

        } } = useRedux(state => state.users);


    return (
        <Modal
            open={modals.edit}
            title="Edit User"
            onCancel={() => dispatch(handleModalEdit())}
            footer={null}
        >
            <UserForm editionMode={true}/>
        </Modal>
    )
}

export default UserEditionModal