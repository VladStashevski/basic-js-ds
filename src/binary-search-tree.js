const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this._root = null;
  }

  root() {
    return this._root;
  }

  add(data) {
    this._root = addInside(this._root, data);
    function addInside(node, data) {
      if (!node) {
      return new Node(data);
    }
      if (node.data === data) {
        return node;
     }
      if (data < node.data) {
        node.lefts = addInside(node.lefts, data);
     } else {
        node.rights = addInside(node.rights, data);
      }
      return node;
    }
  }


  test() {
    return this._root.rights;
  }


  has(data) {
    return addInside(this._root, data);
    function addInside(node, data) {
    if (!node) {
        return false;
    }
      if (node.data === data) {
      return true;
      }
      return data < node.data ? addInside(node.lefts, data) : addInside(node.rights, data);
    }
  }

  find(data) {
    return addInside(this._root, data);
  function addInside(node, data) {
     if (!node) {
        return null;
     }
      if (node.data === data) {
        return node;
      }
    return data < node.data ? addInside(node.lefts, data) : addInside(node.rights, data);
    }
  }

  remove(data) {
    this._root = removeNodes(this._root, data);
    function removeNodes(node, data) {
      if (!node) {
      return null;
     }

    if (node.data === data) {

       if (!node.lefts && !node.rights) {
   return null;
        }

        if (!node.lefts) {
        return node.rights;
        }
        if (!node.rights) {
         return node.lefts;
       }

    const min = findMins(node.rights);
    node.data = min.data;
        node.rights = removeNodes(node.rights, min.data);
    return node;
      }

 if (data < node.data) {
        node.lefts = removeNodes(node.lefts, data);
     } else {
      node.rights = removeNodes(node.rights, data);
      }
    return node;
    }
  function findMins(node) {
      
    if (!node.lefts) {
       return node;
    }
    return findMins(node.lefts);
    }
  }

  min() {
  return addInside(this._root);

  function addInside(node, data) {
    if (!node.lefts) {
      return node.data;
    }
return addInside(node.lefts, data);
}
  }

  max() {
  return addInside(this._root);

  function addInside(node, data) {
  if (!node.rights) {
      return node.data;
    }
    return addInside(node.rights, data);
}
}
}

module.exports = {
  BinarySearchTree
};