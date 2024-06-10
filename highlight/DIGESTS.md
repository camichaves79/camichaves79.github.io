## Subresource Integrity

If you are loading Highlight.js via CDN you may wish to use [Subresource Integrity](https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity) to guarantee that you are using a legimitate build of the library.

To do this you simply need to add the `integrity` attribute for each JavaScript file you download via CDN. These digests are used by the browser to confirm the files downloaded have not been modified.

```html
<script
  src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js"
  integrity="sha384-9mu2JKpUImscOMmwjm1y6MA2YsW3amSoFNYwKeUHxaXYKQ1naywWmamEGMdviEen"></script>
<!-- including any other grammars you might need to load -->
<script
  src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/languages/go.min.js"
  integrity="sha384-WmGkHEmwSI19EhTfO1nrSk3RziUQKRWg3vO0Ur3VYZjWvJRdRnX4/scQg+S2w1fI"></script>
```

The full list of digests for every file can be found below.

### Digests

```
sha384-Cmf5dWet5uM0hHIQztQ4xuR98BdUDJRtz2Fh7yUY7gYckg6LgLPk3wSNlp+U8DHN /es/languages/node-repl.js
sha384-16Wkm0YivnMLEbWFVCc7XZ5oI2EKz/82+cGW0lnb4GHN8YD7XBaVcvSGLOeh47lo /es/languages/node-repl.min.js
sha384-+5oyk7Ed3OlvEWGj8xracq/6e52BScKUN4kxcreNwB7kfRTVsAMs/aAJM58dzIFN /es/languages/python.js
sha384-ND/UH2UkaeWiej5v/oJspfKDz9BGUaVpoDcz4cof0jaiv/mCigjvy7RQ7e+3S6bg /es/languages/python.min.js
sha384-QA4s4jhVZvg55kXTakXI7uiAU+vc76cSDZyQUr+L5n264S/PccW4tzJSO4ZW5YV8 /languages/node-repl.js
sha384-xPT/DjMX+BQlJVnPobXtRQHno6nxWndjO33v2Xo4s1QO3BFFKTZHPvoZEfMzFzAD /languages/node-repl.min.js
sha384-zdZio5RcGiKQJCpe/1IXujPle3bIY8sbmvCabSU5G5GzWAzZtoRZfg9QAQXCL08q /languages/python.js
sha384-IP4vv4Aoh9Lyg8QyzVkAmn2JGoDCpgVHzVSrD3Z+rVyn7+s4wx4pRjv+go3TEwfj /languages/python.min.js
sha384-x4oYVrqXIwFZPb7nsavslKWI+L0cXIleSvJiCd+wj/fgeZJdtEhWJInEYEXpU2CJ /highlight.js
sha384-RoV4rgMJPbAAaCDNnSSPvgNorc03HwhTzWLtjglEPGT11NSfqZSiXICJNbCMRHL7 /highlight.min.js
```

