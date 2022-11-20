# 文字隐藏者

> 用于在文本中隐藏信息

## [演示](http://tool.fzf404.art/hide/)

- 基于 [StegCloak](https://github.com/KuroLabs/stegcloak)
- 由于其对汉字等无分隔文字的支持较弱
- 所以在此基础上进行二次开发

## 使用
 
> 复制如下内容到结果框，点击解密按钮看看吧！

```
你⁤‍⁡⁢⁡⁢‌⁡‌⁡‌‍⁢⁡‌⁢⁣‍⁡‌‍‌‍⁤⁢‍⁢‌‍⁡‍⁢‌⁡⁤⁤‌‍⁡‍⁢⁣‌⁡⁢‌⁢‍⁡⁢‌⁣⁢‌⁤⁢‍⁡‍‍⁣‍⁣⁡‍⁡⁢⁡‌⁡‌⁡‍⁡‍‌⁢‍‍‍⁢‍⁣⁡‍⁡‍⁡⁢‍⁢‌‍⁢‍‍⁡⁢⁡‌⁤‍⁣‌⁢‍⁣‌⁡⁢⁡‌⁢‌⁢⁡⁢⁡⁢‍⁢好呀👋
```

## 特性

1. 使用不可见字符，肉眼无法分辨信息是否加密
2. 支持密钥加密，无密钥则无法解密
3. 无需后端，纯前端即可完成加解密流程
## 原理

- 从 Unicode 中选取了 6 个不可见字符
- 通过这 6 个字符对信息进行重新编码并添加到第一个字后面
- 也就是说只需要两个字就能够加密 & 解密
