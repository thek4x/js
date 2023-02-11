
//export default () => {
//    return 'im loaded';
//}

export default class car {
    constructor(carname) {
        this.carname = carname;
    }
};

export let $ = (param) => {
    return document.querySelector(param);
};


export let topla = (s1, s2) => {
    return s1 + s2;
};

export let dataSet = new Set();
