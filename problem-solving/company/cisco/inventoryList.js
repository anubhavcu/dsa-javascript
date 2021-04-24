// ! Cisco frontend test coding problem
function inventoryList() {
  // write your code here
  let inventoryList = [];
  this.add = function (name) {
    if (name === undefined) {
      return;
    }
    for (let i = 0; i < inventoryList.length; i++) {
      if (inventoryList[i] === name) {
        return;
      }
    }
    inventoryList.push(name);
  };
  this.remove = function (name) {
    for (let i = 0; i < inventoryList.length; i++) {
      if (inventoryList[i] === name) {
        inventoryList.splice(i, 1);
        break;
      }
    }
  };
  this.getList = function () {
    return inventoryList;
  };
}
