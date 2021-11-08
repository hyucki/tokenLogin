function getCombination(arr, selectNum) {
  //? baseCase
  if (selectNum === 1) return arr.map((el) => [el]);
  let result = [];
  //? recursiveCase
  arr.forEach((fixed, index, origin) => {
    // TODO: 조합 = 순서가 상관없고, 중복이 안댐
    const rest = origin.slice(index + 1);
    // [2, 3, 4, 5] -> 자기 자신이후의 요소들을 담은 배열
    // TODO: 순열 = 순서가 상관있고, 중복이 안댐
    // const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    // [1, 2] !== [2, 1] -> 자기 자신을 제외한 요소들을 담은 배열
    // TODO: 중복순열 = 순서가 상관있고, 중복 가능
    // [1, 1, 1] -> 자기 자신을 포함한 모든 요소들을 담은 배열
    // const rest = origin;
    const combination = getCombination(rest, selectNum - 1);
    // [[2], [3], [4], [5]] -> 나머지로 만들 수 있는 깐부다
    const attached = combination.map((el) => [fixed, ...el]);
    // [[1, 2], [1, 3], [1, 4], [1, 5]] -> 자기 자신과 깐부들을 합친 배열
    result.push(...attached);
  });
  return result;
}

console.log(
  getCombination(
    [
      [0, 0],
      [1, 1],
      [1, 3],
      [2, 2],
    ],
    2
  )
);
