import { Modal } from "antd"
import useRedux from "../../hooks/redux/useRedux"
import { deleteUser, handleModalAlert } from "../../features/users/userSlice";


function ConfirmationModal() {

    const {
        dispatch,
        selector: {
            modals,
            currentUser,
            loadings: { isDeleting }
        } } = useRedux(state => state.users);


    const handleOk = async () => {
        await dispatch(deleteUser(currentUser.id)).unwrap();
        dispatch(handleModalAlert());

    }
    return (
        <Modal
            title="Delete User"
            open={modals.alert}
            okText="Yes"
            cancelText="Cancel"
            onOk={handleOk}
            confirmLoading={isDeleting}
            onCancel={() => dispatch(handleModalAlert())}
        >
            <p>Are you sure you want to delete this user?</p>
        </Modal>
    )
}

export default ConfirmationModal