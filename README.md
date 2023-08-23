# 文字隐藏者

> 用于在文本中隐藏信息

## [演示](http://tools.fzf404.art/hide/)

- 复制如下内容到结果框，点击解密按钮看看吧！

```
你⁡‍‍‍‍⁢⁡‌⁢‍⁢‍‌⁤‍⁤‌⁤‍‍⁡‌‍⁡‌‍‍⁢‌⁢‌⁤‌⁡‌⁡⁣‌⁢‌⁡‌⁢⁡⁡⁢⁡⁢⁣⁤⁢⁡⁣⁤‍⁤‌⁡⁡‌⁡‍⁢‍⁡‍⁡⁡‌⁡⁢⁡⁡⁡⁤⁣⁢‌⁢‌⁢‍‍⁡‍⁢⁣⁡⁢‍⁡⁢‌⁢‍⁡‌⁡‍⁡‍⁣⁤⁡‍⁡‍好呀，我是TextHider，快来解密试试吧。
```

## 使用

- 通过 NPM 安装

```bash
npm i text-hider
```

- 在项目中引入

```bash
import { TextHider } from 'text-hider'
```

- 通过 CDN 引入

```html
<script src="https://cdn.fzf404.art/text-hider/dist/index.js"></script>
```

- 快速开始

```js
const Hider = new TextHider()

let secret = 'Secret' // 需要隐藏的密文
let password = '' // 加密密钥
let message = 'Message' // 信息本体

// 加密
const result = Hider.hide(secret, password, message)

// 解密
const cipher = Hider.reveal(result, password)
```

## 特性

- 使用不可见字符，肉眼无法分辨信息是否加密

- 支持密钥加密，无密钥则无法解密

- 无需后端，纯前端即可完成加解密流程

## 原理

- 从 Unicode 中选取了 6 个不可见字符

- 使用不可见字符字符对密文进行重新编码

- 编码后使用密钥进行加密

- 将加密后的密文与信息本体进行拼接

## 说明

- 基于 [StegCloak](https://github.com/KuroLabs/stegcloak)
- 由于其对汉字等无分隔文字的支持较弱

- 所以在此基础上进行二次开发
