//export default 
export default class ColumnChart {
    constructor({
        chartHeight=50,
        data=[],
        label="",
        value=0,
        link="#",
        formatHeading = data => data
    }={}) {
        this.chartHeight=50;
        this.data=data;
        this.label=label;
        this.value=formatHeading(value);
        this.link = link;
        this.render();
        //this.initEventListeners();
        
    }

    render() {
        const element = document.createElement("div"); // (*)
        element.innerHTML = this.getTemplate();
        // NOTE: в этой строке мы избавляемся от обертки-пустышки в виде `div`
        // который мы создали на строке (*)
        this.element = element.firstElementChild; 
    }
    
    getTemplate() {
        return    `<div class="dashboard__chart_orders wrapper">
        <div class="column-chart" style="--chart-height: ${this.chartHeight}">
        <div class="column-chart__title">
            Total ${this.label}
            ${this.getLink()}
        </div>
        <div class="column-chart__container">
            <div data-element="header" class="column-chart__header">${this.value}</div>
            <div data-element="body" class="column-chart__chart">${this.getColumnBody()}</div>
        </div>
        </div>
        <input type=button id='${this.label}_btn' name='${this.label}_btn' value='update'/>
    </div> `
    }
    getLink() {
        return `<a href="${this.link}" class="column-chart__link">View all</a>`
    }
    
    
    getColumnBody() {
        let arr=[];
        const scale = 100/this.chartHeight;
        for (const item of this.data) {
            arr.push('<div style="--value: '+item+'" data-tooltip="'+Math.floor(item/scale)+'%"></div>');
        }
        if (arr.length==0) {
            arr.push('<img src="charts-skeleton.svg"/>');
        }
        return arr.join("");      
    }
    initEventListeners() {
       console.log(this.label + "_btn");  
       let btnName=this.label + "_btn";
       let btn=document.getElementById(btnName);
       console.log(btn);
       btn.addEventListener("click",()=> {
            this.update(this.data);
       });
    }
    update = function(data=[]) {
        this.data=data;
        console.log ("Yeah, updating " + this.label);
        //subElements=this.getSubElements();
        //this.subElements.body.innerHtml=this.getColumnBody();
    }
    getSubElements() { //what a shit
        const result = {};
        const elements = this.element.querySelectorAll("[data-element]");
        for (const subElement of elements) {
            const name= subElement.dataset.element;
            result[name]=subElement;
        }
        return result;
    }
    destroy = function () {};
    
}


