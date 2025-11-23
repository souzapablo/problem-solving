class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }
    
    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) 
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        
        return hash;
    }

    set(key, value) {
        const address = this._hash(key);

        if (!this.data[address]) 
            this.data[address] = []
        
        this.data[address].push([key, value]);
    }

    get(key) {
        const address = this._hash(key);
        const currentItem = this.data[address];

        if (!currentItem) 
            return undefined;
        
        for (let i = 0; i < currentItem.length; i++) {
            if (currentItem[i][0] === key)
                return currentItem[i][1];
        }
    }

    keys() {
        const keysArray = [];
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i] && this.data.length) {
                if (this.data.length > 1) {
                    for (let j = 0; j < this.data[i].length; j++) {
                        keysArray.push(this.data[i][j][0]);
                    }
                } else {
                    keysArray.push(this.data[i][0])
                }
            }
        }
        return keysArray;
    }

    values() {
        const valuesArray = [];
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i] && this.data.length) {
                if (this.data.length > 1) {
                    for (let j = 0; j < this.data[i].length; j++) {
                        valuesArray.push(this.data[i][j][1]);
                    }
                } else {
                    valuesArray.push(this.data[i][1])
                }
            }
        }
        return valuesArray;
    }

    hasKey(key) {
        const address = this._hash(key);
        const currentItem = this.data[address];

        if (!currentItem) 
            return undefined;
        
        for (let i = 0; i < currentItem.length; i++) {
            if (currentItem[i][0] === key)
                return true;
        }

        return false;
    }
}

const myHashTable = new HashTable(50);

myHashTable.set('grapes', 1000);
myHashTable.set('filha', 'maria');
myHashTable.set(3.14, 'pi');
console.log(myHashTable.get('grapes'));
console.log(myHashTable.get('j'));
console.log(myHashTable.keys());
console.log(myHashTable.values());
console.log(myHashTable.hasKey('grapes'));
console.log(myHashTable.hasKey('a'));