
import car, {$, topla,dataSet}  from './lib/lib.js';

let result = $("#result");
result.classList.add('border', 'border-2', 'm-auto');
result.style.height = '250px';

let p = document.createElement('p');
p.classList.add('lead', 'my-4', 'text-danger');
p.textContent = topla(5, 55);
result.appendChild(p);



class newcar extends car {
    constructor(color) {
        super();
        this.getcar = new car("layy lay lay");
        this.name = this.getcar.carname;
        this.color = color;
    }

    get info() {
        return `arabanın adı ${this.name} arabanın rengi ${this.color}`;
    }
}

//let getircari = new newcar('dark');
//console.log(getircari.info);

dataSet.add("javascript");
dataSet.add("ecmascript");
dataSet.add("typescript");
dataSet.add("jquery");
dataSet.add("vuejs");

console.log(dataSet.has('javascript'));