
//Storage Controller

let StorageController = (() => {

})();

// PRoduct Controller
let ProductController = (() => {

    const product = function (id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    };

    const data = {
        product: [],
        selectedProduct: null,
        totalPrice: 0
    };


    let find = (product_id) => {
        return data.product.findIndex(element => element.id == product_id);
    };



    return {
        data: data, find,
        getProduct: function () {
            return data.product;
        },

        getData: function () {
            return data;
        },
        addProduct: (name, price) => {
            count = data.product.length;
            let id = 1;

            if (count >= 1) {
                id = data.product.length + 1;
            }

            let addP = new product(id, name, price);
            data.product.push(addP);

            return addP;

        }
    };
})();

// Frontend Controller

let UI = (() => {
    let $ = (element, all = false) => {
//        return  all ? document.querySelector(element) : document.querySelectorAll(element);
        return  document.querySelector(element);
    };

    const selectors = {
        product_input: '#productName',
        price_input: '#productPrice',
        addBtn: '.addBtn',
        update: '.updateBtn',
        delete: '.deleteBtn',
        cancel: '.cancelBtn',
        card: '#productCard',
        items: '#item-list',
        tl: '#total-tl'
    };


    createProductList = () => {
        let html = '';
        products = ProductController.getProduct();

        if (products.length > 0) {
            clearArea(true);
            products.forEach(prd => {
                html += `<tr class="element${prd.id}">
                        <td>${prd.id}</td>
                        <td>${prd.name}</td>
                        <td>${prd.price}</td>
                        <td class="text-right">
                            <button data-product_id="${prd.id}" type="submit" class="btn btn-warning btn-sm edit-product"><i class="far fa-edit edit-product" data-product_id="${prd.id}"></i></button>
                        </td>
                    </tr>`;
            });
            $("#item-list").innerHTML = html;
        } else {
            clearArea(false);
        }

    };
    clearForm = () => {
        $(selectors.product_input).value = '';
        $(selectors.price_input).value = '';
    };
    setProductForm = (product_id) => {
        let result = ProductController.getProduct()[product_id];
        $(selectors.product_input).value = result.name;
        $(selectors.price_input).value = result.price;
    };
    clearArea = (display = true) => {
        return display ? $(selectors.card).style.display = 'block' : $(selectors.card).style.display = 'none'

    };
    totalProductPrice = () => {
        let products = ProductController.getProduct();
        let total = 0;
        products.forEach(result => total += parseInt(result.price));
        $(selectors.tl).innerText = parseInt(total);
    };
    return{
        $: (param) => {
            return $(param);
        },
        getSelectors: () => {
            return selectors;
        },
        createProductList, clearArea, setProductForm, clearForm, totalProductPrice
    };
})();


let App = ((ProductController, ui) => {
    const selector = ui.getSelectors();

    let loadEventListener = () => {
        //add butonuna tıklandığında çalıştır
        ui.$(selector.addBtn).addEventListener('click', productAdd);
        ui.$(selector.items).addEventListener('click', productEdit);
        ui.$(selector.update).addEventListener('click', productUpdate);

    };

    let productUpdate = (e) => {
        let product_id = e.target.dataset.product_id - 1;

        let productName = ui.$(selector.product_input).value;
        let productPrice = ui.$(selector.price_input).value;
        if (productName != '' && productPrice != '') {
            ProductController.data.product[product_id].name = productName;
            ProductController.data.product[product_id].price = productPrice;
            ui.createProductList();
        }

    };

    let productEdit = (e) => {
        if (!e.target.classList.contains('edit-product'))
            return false;

        element = e.target;
        let product_id = parseInt(element.dataset.product_id);
        let findProductID = ProductController.find(product_id);
        ui.$(selector.update).setAttribute('data-product_id', product_id);
        ui.setProductForm(findProductID);
        ui.totalProductPrice();
        document.querySelectorAll('tr').forEach(element => element.removeAttribute('style'));
        ui.$("tr.element" + product_id).style.backgroundColor = 'rgb(211 168 13 / 25%)';

    };

    let productAdd = (e) => {
        e.preventDefault();

        let productName = ui.$(selector.product_input).value;
        let productPrice = ui.$(selector.price_input).value;
        if (productName != '' && productPrice != '') {
            const product_list = ProductController.addProduct(productName, productPrice);
            ui.createProductList();
        }
        ui.clearForm();
        ui.totalProductPrice();
    };

    return {
        init: function () {
            ui.createProductList(ProductController.getProduct());
            loadEventListener();
        }
    };

})(ProductController, UI);


App.init();