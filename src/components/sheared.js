export const state = {
  notifications: [
  ],
};
let count = 0;
export const methods = {
  notify(notification) {
    count = count + 1;
    notification.id = count
    state.notifications.push(notification);
    setTimeout(() => {
      this.removeNotification(notification.id)
    }, 3000)
  },
  removeNotification(id) {

    state.notifications.splice(state.notifications.findIndex(n => n.id === id), 1)
  }
};