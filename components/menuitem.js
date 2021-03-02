class MenuItem extends HTMLElement {

    static get observedAttributes() {
        return ['entry', 'cost', 'restaurant'];
    }

    constructor() {
        super();
        console.log('Initializing MenuItem Component');
        let templateContent = '<div></div>';
        this.labels = [];
        this.datapath = "";
        const shadow = this.attachShadow({
            mode: 'open'
        })
    }

    async connectedCallback() {
        let res = await fetch('./components/menuitem.html')
        var sr = this.shadowRoot;
        sr.innerHTML = await res.text();
        this.showItem();
    }

    showItem() {
        var sr = this.shadowRoot;
        var dish = sr.getElementById('dish');
        var cost = sr.getElementById('cost');

        var d = this.getAttribute('dish');
        var c = this.getAttribute('cost');

        dish.innerHTML = d;
        cost.innerHTML = '$' + c;

        var button = sr.getElementById('order');
        button.onclick = this.placeOrder.bind(this);
    }

    storeOrder(order){

        var orders = localStorage.getItem('KAFKA-ORDERS');

        var orderlist;

        if(orders == null){
            orderlist = [];  
        }else{
            orderlist = JSON.parse(orders);
        }

        orderlist.push(order);  
        localStorage.setItem('KAFKA-ORDERS',JSON.stringify(orderlist));
    }


    placeOrder(e) {

        var dish = this.getAttribute('dish');
        var cost = this.getAttribute('cost');
        var restaurant = this.getAttribute('restaurant');

        let orderinfo = {
            'dish': dish,
            'cost': cost,
            'restaurant': restaurant,
            'status': 'ORDERED'
        };

        this.storeOrder(orderinfo);

        var component = this;

        var customEvent = new CustomEvent('ORDER-PLACED', {
            detail: {
                eventData: {
                    "order": orderinfo
                }
            },
            bubbles: true
        });

        localStorage.kafkaOrders = 

        component.dispatchEvent(customEvent);

        console.log(orderinfo);

    }
}


try {
    customElements.define('menuitem-element', MenuItem);
} catch (err) {
    const h3 = document.createElement('h3')
    h3.innerHTML = err
    document.body.appendChild(h3)
}