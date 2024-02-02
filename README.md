# Application Form Helper

#### A way to help fill out a large quantity of similar applications.

Instead of typing out your name or DOB or highlighting prewritten job descriptions from your resume monotonously, just setup that information to be ready to be copied at the click of a button.

### Execute

1. npm install
2. npm run start

### Files of interest

#### ./dist/index.html

1. Create your button following the the example below.
2. Update the "id" attributes after the dash and before the double-quotes to setup your identifier.

```
`<button class="button" id="copy-me">`
`  <b id="copied-me"></b>``<b class="intro" id="text-me">`My Name `</b>`
`</button>`
```

#### ./src/index.ts

1. Add your common identifier to the copyList array.

```
const copyList = ["me", "job", "company", "desc"];
```

#### Try it out
