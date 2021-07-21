"use strict";

const id = document.querySelector("#id"),
    paword = document.querySelector("#psword"),
    logintBtn = document.querySelector("button");

logintBtn.addEventListener("click", login);

function login(){
    const req = {
        id: id.value,
        paword: psword.value,
    };
    

    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify(req),
    }).then((res) => res.json()).then((res) => {});

}