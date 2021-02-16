export const ADD_USER = "ADD_USER";

export const addUSer = (name, email) => {
    return {
        type: ADD_USER,
        userDetail: {
            name: name,
            email: email,
        },
    };
};