
/**
 * min: 最小值
 * max: 最大值
 * deci: 小数位数（0：整数）
 */
function getRandomNumber(min = 0, max = 1, deci = 0) {
  const r = (Math.random() * (max - min)) + min;
  return r.toFixed(deci);
}

function getRandomRGB() {
  const r = getRandomNumber(0, 255);
  const g = getRandomNumber(0, 255);
  let b = getRandomNumber(0, 255);

  if (r === 255 && b === 255 && g === 255) {
    // 防止纯白
    b = getRandomNumber(0, 254);
  }

  return { r, g, b };
}

export {
  getRandomRGB,
  getRandomNumber,
};
