# `prettier-config`

## Usage

- `package.json`

```json
{
  "prettier": "prettier-config"
}
```

- `.prettierrc`

```
"prettier-config"
```

- `prettier.config.js`

```js
module.exports = {
  ...require('prettier-config'),
};
```
