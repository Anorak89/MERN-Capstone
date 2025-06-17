import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeNotification } from "../reducers/notificationReducer";
import { Alert, Snackbar } from '@mui/material';

const Notification = () => {
  const notification = useSelector((state) => state.notification);
  const dispatch = useDispatch();

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        dispatch(removeNotification());
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [notification, dispatch]);

  if (!notification) {
    return null;
  }

  const notificationClassName =
    notification.type === "warning" ? "warning" : "info";

  return (
    <Snackbar open={!!notification} autoHideDuration={3000}>
      <Alert severity={notification?.type || "info"}>
        {notification?.message}
      </Alert>
    </Snackbar>
  );
};

export default Notification;
