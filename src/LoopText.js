var log = console.log.bind(console);
var dir = console.dir.bind(console);
class LoopText {
    constructor(dom_id, cssText) {
        this.dom_id = dom_id;
        this.cssTxt = cssText;
    }
    static new(dom_id, cssText) {
        return new this(dom_id, cssText);
    }
    init(cssTxt) {
        var array = this.forLoopAdd(cssTxt);
        this.insert(array);
    }
    rigisCSS() {
        var id = this.dom_id;
        var domId = document.querySelector(id);
        this.domId = domId;
        return this.domId
    }
    createStyle() {
        var s = document.createElement('style');
        document.body.insertBefore(s, null)
        return s;
    }
    insert(array) {
        var dom = this.rigisCSS();
        var style = this.createStyle();
        var i = 0;
        const runer = function() {
            style.innerHTML += array[i];
            var str = array[i] + array[i + 1]
            var str_1 = '}'
            if (str == '*/' || array[i] === str_1) {
                dom.innerHTML += array[i] += '<br />';
            } else {
                dom.innerHTML += array[i];
            }
            i += 1;
            if (array[i] === undefined) {
                return;
            }
            setTimeout(runer, 1000 / 60);
        }
        runer();

    }
    forLoopAdd(cssText) {
        var array = [];
        var c = cssText;
        for (let k of c) {

            array.push(k);
        }

        return array;
    }
}
