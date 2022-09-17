# henkaku 変格

Functions to convert UTF-8 characters between full-width 全角 and half-width 半角.

# Installation
```
npm install henkaku
```

# Usage

**toFullWidth(str: string) -> string**
``` typescript
import { toFullWidth } from "henkaku"

const input = "Hello､ ﾆﾎﾝ"
const output = toFullWidth(str: string)
console.log(output) // Ｈｅｌｌｏ、 ニホン
```
**toHalfWidth(str: string) -> string**
``` typescript
import { toHalfWidth } from "henkaku"

const input = "Ｈｅｌｌｏ、 ニホン"
const output = toHalfWidth(str: string)
console.log(output) // Hello､ ﾆﾎﾝ
```

# Conversion rules

1. Latins are converted by add/minus `0xFEE0`

2. Whitespace is converted between U+0020 (" ") and U+0300 (" ")

3. Katakana is converted by mapping by following UTF8 table (U+FF00..U+FFEF)
\* Note: (Hannkaku katakana with dakuden, e.g ga ｶﾞ, is made by two half-width characters, カ and ﾞ. i.e. U+FF76U+FF9E)

4. For punctuations and symbol, this only convert it to its counterpart. I.e It won't be correcting an English comma or a Japanese comma. It is because there are too many variants in different languages. e.g comma can be (, ,、 ,，, ...). So, I think it is better to do it yourself.

# Why
It is very common on Japanese websites to ask you to type something in specific width. For example, phonetics in full-width katakana and English names in half-width alphabets. I think it is a great hassle for users to switch between widths. So, it is a great QOL improvement to automatically change the width after users typed something.

# Bug/Issue
Please let me know by opening a ticket in issues. :)
