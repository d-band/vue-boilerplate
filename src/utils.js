export function addPrefix(prefix, obj = {}) {
  const newObj = {};
  Object.keys(obj).forEach((key) => {
    newObj[prefix + key] = obj[key];
  });
  return newObj;
}

export function wrapModule(m) {
  const newModule = {};
  newModule.state = m.state;
  ['getters', 'actions', 'mutations'].forEach((v) => {
    newModule[v] = addPrefix(`${m.namespace}/`, m[v]);
  });
  return {
    [m.namespace]: newModule
  };
}
