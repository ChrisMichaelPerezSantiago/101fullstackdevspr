# 101FullStackDevelopersPR :fire: 😸 (IN PROGRESS)

**Front-End**
- Vuejs/Vuex

**Vue-Plugins**
- Electronjs

**Facebook Graph API [Configuration]**
Create index.js file in src/FacebookAuth folder and add this scripts ...

```javascript
import { FACEBOOK_APP_ID } from '../config/env';

export const facebookAuth = () =>{
    window.fbAsyncInit = function() {
        FB.init({
          appId: FACEBOOK_APP_ID,
          autoLogAppEvents: true,
          xfbml: true,
          version: 'v3.2'
        });
    };
    (function(d, s, id){
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {return;}
        js = d.createElement(s); js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
}
```

**Author**
-----------------
Development Lead

 - Chris M. Perez Santiago   chris.perez@upr.edu | chrisperezsantiago1@gmail.com
