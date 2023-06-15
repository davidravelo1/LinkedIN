import { message as messageAlert } from "antd";
import { useEffect } from "react";
import { resetAlerts } from "../../features/users/userSlice";
import useRedux from "../../hooks/redux/useRedux";

function GlobalAlert() {

    const [messageApi, contextHolder] = messageAlert.useMessage();
    const { dispatch, selector: { error, success, message } } = useRedux(state => state.users);

    useEffect(() => {
        const showSuccessMessage = () => {
            messageApi.success({
                type: 'success',
                content: message
            });
        }
        const showErrorMessage = () => {
            messageApi.error({
                type: 'error',
                content: error
            });
        }

        if (success) {
            showSuccessMessage();
            dispatch(resetAlerts());
            return;
        }
        if (error) {
            showErrorMessage();
            dispatch(resetAlerts());
            return;
        }

        
    }, [success, error]);
    return (
        <div>
            {contextHolder}
        </div>
    )
}

export default GlobalAlert