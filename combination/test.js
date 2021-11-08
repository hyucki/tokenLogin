function getCombination(arr, selectNum) {
  //baseCase
  if (selectNum === 1) return arr.map((el) => [el]);
  let result = [];
  arr.forEach((fixed, idx, origin) => {
    //todo: 조합 => 순서가 상관이 없고, 중복이 불가능해
    //? -> [1, 2], [1, 3], [1, 4]O [2, 1]X
    // 나 자신 이후에 모든 요소들 담은 배열
    // const rest = origin.slice(idx + 1);
    //todo: 순열 => 순서가 상관이 있어, 중복이 불가능해
    //? => [1, 2], [1, 3], [1, 4]O [2, 1]O
    // const rest = [...origin.slice(0, idx), ...origin.slice(idx + 1)];
    //todo: 중복순열 => 순서가 상관이 있고, 중복도 가능
    //? => [1, 1, 1]O
    const rest = origin;
    const combination = getCombination(rest, selectNum - 1);
    const attached = combination.map((el) => [fixed, ...el]);
    result.push(...attached);
  });
  return result;
}
console.log(getCombination([1, 2, 3], 3));
