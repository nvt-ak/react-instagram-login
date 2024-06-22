# React Instagram Login

> An Instagram oAUth Sign-in / Log-in Component for React
## Install

```
npm install @nvt-ak/react-instagram-login
```

```
yarn add @nvt-ak/react-instagram-login
```

## How to use
### With default button
```js
import ReactDOM from 'react-dom';
import { InstagramLogin } from '@nvt-ak/react-instagram-login';

const responseInstagram = (response) => {
  console.log(response);
};

ReactDOM.render(
  <InstagramLogin
    clientId="CLIENT_ID"
    buttonText="Login"
    onSuccess={responseInstagram}
    onFailure={responseInstagram}
  />,
  document.getElementById("instagramButton")
);
```
## onSuccess callback

### Displaying OAuth using a popup
> Note: The redirectUri needs to be the same url as the current url.

### Displaying OAuth using a redirection

If you want to use redirection you should change the prop `useRedirect` to true.
Callback will return a code for use on your server to get a full access_token.
If `implicitAuth` is set to `true` it will return the full access_token directly.

## onFailure callback

Callback will return an error object.

|   property name   | value  |
| :---------------: | :----: |
|       error       | string |
|   error_reason    | string |
| error_description | string |

## Parameters

|    params    |  value   |    default value     |
| :----------: | :------: | :------------------: |
|   clientId   |  string  |       REQUIRED       |
|    scope     |  string  |     user_profile     |
|  onSuccess   | function |       REQUIRED       |
|  onFailure   | function |       REQUIRED       |
| redirectUri  |  string  |          -           |
|  buttonText  |  string  | Login with Instagram |
|   cssClass   |  string  |          -           |
|     tag      |  string  |        button        |
|     type     |  string  |        button        |
| implicitAuth | boolean  |        false         |
| useRedirect  | boolean  |        false         |
|    width     |  number  |         400          |
|    height    |  number  |         800          |

Instagram API Docs: https://www.instagram.com/developer/

You can now also pass child components such as icons into the button component.

```js
<InstagramLogin
  clientId="CLIENT_ID"
  onSuccess={responseInstagram}
  onFailure={responseInstagram}
>
  <FontAwesome name="instagram" />
  <span> Login with Instagram</span>
</InstagramLogin>
```

## Dev Server
```
yarn dev
```

## Run Tests
```
yarn test
```

## Production Bundle

```
yarn build
```

#### TODO

- [ ] Fix the test cases
- [ ] Add templates for PR and Issues
- [ ] Use Google, Facebook, Linkedin ... in this project

#### Done

- [x] Use Hooks
- [x] Update dependencies
- [x] Create a babel Conf
- [x] Use prettier + Husky
- [x] Improve and refactor the code

