export const require = (value) => {
    return value ? undefined : "Field is require"
};

export const maxLength = (length) => (value) => {
    return value.length > length ? `Max length is ${length} symbol` : undefined;
};