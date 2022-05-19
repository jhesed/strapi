const findRecursiveParentFolderId = (node, searchedId, parentId = null) => {
  let result = null;

  if (node.value === parseInt(searchedId, 10)) {
    result = parentId;
  } else {
    for (let i = 0; i < node.children.length && !result; i++) {
      result = findRecursiveParentFolderId(node.children[i], searchedId, node.value);
    }
  }

  return result;
};

export default findRecursiveParentFolderId;