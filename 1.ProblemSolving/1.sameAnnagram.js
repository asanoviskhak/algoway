const same = (str1, str2) => {
  if (str1.length !== str2.length) return false;

  let freqOfChars1 = {};
  let freqOfChars2 = {};

  for (let i = 0; i < str1.length; i++) {
    if (str1[i] in freqOfChars1) freqOfChars1[str1[i]]++;
    else freqOfChars1[str1[i]] = 0;

    if (str2[i] in freqOfChars2) freqOfChars2[str2[i]]++;
    else freqOfChars2[str2[i]] = 0;
  }

  for (let key in freqOfChars1) {
    if (!(key in freqOfChars2)) return false;
    if (freqOfChars1[key] !== freqOfChars2[key]) return false;
  }

  return true;
};

console.log(same("buzz", "fizz"));
