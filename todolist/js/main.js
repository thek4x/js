"use strict";
let $ = (element) => {
    return document.querySelector(element);
};

let task = $("#task");
let addBtn = $(".addTask");
let todoMain = $("#todolist");
const dataset = new Set();


let settask = () => {
    let taskvalue = task.value;
    if (dataset.has(taskvalue)) {
        toastr.error("bu öğe zaten mevcut", "hata !");
    } else {
        dataset.add(taskvalue);
        todoMain.insertAdjacentHTML('beforeend', `<div class="col-12 todo p-3 bg-uncomplete text-white border-top border-bottom">
                        <div class="row">
                            <div class="task col-10">${taskvalue}</div>
                            <div class="options col-2">
                                <a href="#" class="text-white float-end taskcomplete"><i class="fa-regular fa-plus fs-2"></i></a>
                            </div>
                        </div>
                    </div>`);
    }

    let taskcomplete = $(".taskcomplete");
    taskcomplete.addEventListener("click", taskcomp);

};
let taskcomp = () => {
    console.log("çalıştım");
};
addBtn.addEventListener("click", settask);

