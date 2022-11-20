'use strict'

const R = require('ramda')

const { encrypt, decrypt } = require('./core/encrypt')

const { compress, decompress, zwcHuffMan } = require('./core/compact')

const { zwcOperations, embed } = require('./core/message')

const zwc = ['‌', '‍', '⁡', '⁢', '⁣', '⁤'] // 200c,200d,2061,2062,2063,2064 Where the magic happens !

const { toConceal, toConcealHmac, concealToData, noCrypt, detach } = zwcOperations(zwc)

const { shrink, expand } = zwcHuffMan(zwc)

const { byteToBin, compliment } = require('./core/util')

class TextHider {
  constructor(_encrypt = true, _integrity = false) {
    this.encrypt = _encrypt

    this.integrity = _integrity
  }

  static get zwc() {
    return zwc
  }

  hide(message, password, cover) {
    if (cover.length < 2) {
      return '信息本体不得少于两个字符!'
    }

    const integrity = this.integrity

    const crypt = this.encrypt

    const secret = R.pipe(compress, compliment)(message) // Compress and compliment to prepare the secret

    const payload = crypt
      ? encrypt({
          password: password,
          data: secret,
          integrity,
        })
      : secret // Encrypt if needed or proxy secret

    const invisibleStream = R.pipe(
      byteToBin,
      integrity && crypt ? toConcealHmac : crypt ? toConceal : noCrypt,
      shrink
    )(payload) // Create an optimal invisible stream of secret

    return embed(cover, invisibleStream) // Embed stream  with cover text
  }

  reveal(secret, password) {
    // Detach invisible characters and convert back to visible characters and also returns analysis of if encryption or integrity check was done

    const { data, integrity, encrypt } = R.pipe(detach, expand, concealToData)(secret)

    const decryptStream = encrypt
      ? decrypt({
          password,
          data,
          integrity,
        })
      : data // Decrypt if needed or proxy secret

    return R.pipe(compliment, decompress)(decryptStream) // Receive the secret
  }
}

module.exports = TextHider
