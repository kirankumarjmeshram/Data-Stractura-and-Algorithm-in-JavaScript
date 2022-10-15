function binaryTreeDiameter(tree) {
    // Write your code here.
    return getTreeInfo(tree).diameter;
  }
  function getTreeInfo(tree) {
    if(tree === null){
      return new TreeInfo(0,0);
    }
    const leftTreeInfo = getTreeInfo(tree.left);
    const rightTreeInfo = getTreeInfo(tree.right);
  
    const longestPathThroughRoot = leftTreeInfo.height + rightTreeInfo.height;
    const maxDiameterSoFar = Math.max(leftTreeInfo.diameter, rightTreeInfo.diameter);
    const currentDiameter = Math.max(longestPathThroughRoot, maxDiameterSoFar);
    const currentHeight = 1+Math.max(leftTreeInfo.height, rightTreeInfo.height);
    return new TreeInfo(currentDiameter, currentHeight);
  }
  
  class TreeInfo {
    constructor(diameter, height) {
      this.diameter = diameter;
      this.height = height;
    }
  }