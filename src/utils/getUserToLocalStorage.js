
export const addUserToLocalStorage = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
};

export const removeUserToLocalStorage = () => {
    localStorage.removeItem("user");
};

export const getUserToLocalStorage = () => {
    const result = localStorage.getItem("user");
    const user = result ? JSON.parse(result) : null;
    return user;
};
