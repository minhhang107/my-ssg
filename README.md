# my-ssg

My Static Site Generator, is a command line tool, created to convert `.txt` into a `.html` file by using Node.js.

## Installation

```
1. Clone this repo
2. cd my-ssg
3. npm i
4. cd my-ssg/bin
```

## Features

- Allows user to specify a URL to a `CSS stylesheet` if they hope to.
- Creates an `index.html` file which links to other generated HTML files if a folder is specified as input.
- Stores all generated HTML files in `./dist` folder by default.

## Options

| Option                                      | Function                                            |
| ------------------------------------------- | --------------------------------------------------- |
| -i, --input <'path-to-txt'> `required`      | specifies an `input` file or folder to be processed |
| -v, --version                               | shows tool's name and the version number            |
| -h, --help                                  | displays all available options                      |
| -s, --stylesheet <'link-to-css-stylesheet'> | applies css link to `<head>` of HTML file           |

## Usage

```
node index.js -i testing.txt
node index.js -i testing
node index.js -i 'Silver Blaze.txt' -s 'https://cdn.jsdelivr.net/npm/water.css@2/out/water.css'
```

## Example

testing.txt -> command: `node index.js -i testing.txt -s https://cdn.jsdelivr.net/npm/water.css@2/out/water.css`

```
This is a sentence!

This is a paragraph: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
industry's standard dummy text ever since the 1500s.
```

Transfered into:

./dist/testing.html

```
<!doctype html>
<html lang="en" dir="ltr">
<head>
<title>testing</title>
<meta charset="utf-8">

<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.css">


</head>
<body>
<p>This is a sentence!</p>

<p>This is a paragraph: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
industry's standard dummy text ever since the 1500s.</p>

</body>
</html>
```

## Author

[Vivian Vu](https://dev.to/vivianvu)
