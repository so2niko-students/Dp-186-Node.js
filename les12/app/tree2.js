function reconstructTree(arr) {
    const tree = new Tree()
    for (let i = 0; i < arr.length; i++) {
        tree.addValue(arr[i])
    }
    console.log(tree);
}

class Tree {
    constructor() {
        this.root = null;
    }
    addValue(val) {
        var n = new Node(val);
        if (this.root == null) {
            this.root = n;
        }
        else {
            this.root.addNode(n);
        }
    }
}

class Node {
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
    }
    addNode(n) {
        if (n.value < this.value) {
            if (this.left == null) {
                this.left = n;
            }
            else {
                this.left.addNode(n);
            }
        }
        else if (n.value > this.value) {
            if (this.right == null) {
                this.right = n;
            }
            else {
                this.right.addNode(n);
            }
        }
    }
}

reconstructTree([4, 1, 0, 2, 5, 3, 7, 5, 9, 8, 100]);