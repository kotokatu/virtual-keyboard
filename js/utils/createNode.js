const createNode = (tag, className, content) => {
  const node = document.createElement(`${tag}`);
  node.className = className;
  if (content) node.innerHTML = content;
  return node;
};

export default createNode;
