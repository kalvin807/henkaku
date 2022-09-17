import { describe, test, expect } from "vitest";
import { toFullWidth, toHalfWidth } from "..";

const testCases = [
  {
    description: "latin characters",
    half: "Helloworld",
    full: "Ｈｅｌｌｏｗｏｒｌｄ",
  },
  {
    description: "whitespaces",
    half: "     ",
    full: "　　　　　",
  },
  {
    description: "katakana characters",
    half: "ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ",
    full: "ヲァィゥェォャュョッーアイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワン",
  },
  {
    description: "katakana characters with dakuden",
    half: "ｶﾞｷﾞｸﾞｹﾞｺﾞ",
    full: "ガギグゲゴ",
  },
  {
    description: "symbols",
    half: "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~",
    full: "！＂＃＄％＆＇（）＊＋，－．／：；＜＝＞？＠［＼］＾＿｀｛｜｝～",
  },
  {
    description: "numbers",
    half: "0123456789",
    full: "０１２３４５６７８９",
  },
  {
    description: "mixed",
    full: "４　Ｃｈｏｍｅ－２－８　Ｓｈｉｂａｋｏｅｎ，　Ｍｉｎａｔｏ　Ｃｉｔｙ，　Ｔｏｋｙｏ　１０５－００１１　〒１０５－００１１　東京都港区芝公園４丁目２－８　トウキョウトミナトクシバコウエン４チョウメ２－８",
    half: "4 Chome-2-8 Shibakoen, Minato City, Tokyo 105-0011 〒105-0011 東京都港区芝公園4丁目2-8 ﾄｳｷｮｳﾄﾐﾅﾄｸｼﾊﾞｺｳｴﾝ4ﾁｮｳﾒ2-8",
  },
];

describe.each(testCases)("case: %half <> %full", ({ half, full }) => {
  test(`toFullWidth half -> full`, () => {
    expect(toFullWidth(half)).toBe(full);
  });
  test(`toFullWidth full -> full`, () => {
    expect(toFullWidth(full)).toBe(full);
  });

  test(`toHalfWidth full -> half`, () => {
    expect(toHalfWidth(full)).toBe(half);
  });
  test(`toFullWidth half -> half`, () => {
    expect(toHalfWidth(half)).toBe(half);
  });
});
