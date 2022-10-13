// eslint-disable-next-line no-undef
module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "airbnb",
        "prettier"
    ],
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "plugins": [
        "react"
    ],
    "ignorePatterns": ["dist"],
    "rules": {
        "react/react-in-jsx-scope": "off",
        "no-console": "off",
        "import/prefer-default-export": "off",
        "no-use-before-define": "off",

    }
};
