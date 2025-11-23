Install Tailwind CSS->  
install tailwindcss and @tailwindcss/cli via npm

```
npm install tailwindcss @tailwindcss/cli
```

---

Import Tailwind in your CSS->  
import to your main CSS file.

```
@import "tailwindcss";
```

---

Run Terminal->  
Start the Tailwind CLI build process.
Run the CLI tool to scan your source files for classes and build your CSS.

```
npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch
```

---

Start using Tailwind in your HTML->  
Add your compiled CSS file to the <head> and start using Tailwind’s utility classes to style your content.

```
<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="src/output.css" rel="stylesheet">
</head>
<body>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
</body>
</html>
```

---

---

---

If that doesn't work, go to this website and see what happens.

```
https://tailwindcss.com/docs/installation/tailwind-cli
```
