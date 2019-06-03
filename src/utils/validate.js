function integer(num) {
  return /^\+?[1-9][0-9]*$/.test(num);
}

function chinese(str) {
  return /^[\u4e00-\u9fa5],{0,}$/.test(str);
}

export {
  integer,
  chinese,
};
