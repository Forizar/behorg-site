const input = document.getElementById("authInput");
const message = document.getElementById("authMessage");

const cde = "SNEAKERNIGHT";

input.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        const value = input.value.trim().toUpperCase();
        if (value === cde) {
            message.innerText = "Correct!";
        } else {
            message.innerText = "Try Again.";
        }
    }
});