export default function reducer(state, action) {
    if (action === "increase") {
        return state + 1;
    } else if (action === "decrease") {
        return state - 1;
    }
    return null;
}
