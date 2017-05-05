var QuickSort = function() {
    var items = [];
    var swap = function (items, firstIndex, secondIndex){
        var temp = items[firstIndex];
        items[firstIndex] = items[secondIndex];
        items[secondIndex] = temp;
    };
    var partir = function (items, left, right) {
        var pivot = items[Math.floor((right + left) / 2)],
            i     = left,
            j     = right;
        while (i <= j) {
            while (items[i] < pivot)
                i++;
            while (items[j] > pivot)
                j--;
            if (i <= j){
                swap(items, i, j);
                i++;
                j--;
            }
        }
        return i;
    };
    var quicksort = function (items, left, right) {
        var index;
        if (items.length > 1) {
            console.log(items);
            index = partir(items, left, right);
            
            if (left < index - 1)
                quicksort(items, left, index - 1);
            if (index < right)
                quicksort(items, index, right);
        }
        return items;
    };
    var ejecutar = function() {
        this.items = quicksort (this.items, 0, this.items.length-1);
    };
    var set_items = function(lista) {
        this.items = lista;
    };
    return {
        items : items,
        set_items: set_items,
        execute : ejecutar
    };
};

var algoritmo = QuickSort();
algoritmo.set_items( [6,2,3,5,20,4,3,2,1,7] );
algoritmo.execute();
console.log(algoritmo.items);