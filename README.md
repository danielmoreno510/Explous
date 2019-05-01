# Explous

Explous is a library of responsive components for front-end interfaces development.

It's an open source library developed with HTLM and Javascript. It allows fast and complex prototypes building, components management is done by Javascript, facilitating the process of calculating spaces in grids, tables, cards...

## Getting Started

Starting with Explous is very simple, just add the library from your Javascript. You can download it and implement it in your project or simply add it from our server.

### Hosted

Just add the following &lt;script&gt; elements into your HTML pages

```
<script src="https://code.explous.com/1.0.7/explous.min.js"></script>
```

### Download

Download the Javascript (127kb)
Just add the following &lt;script&gt; elements into your HTML pages

[Download](https://code.explous.com/1.0.7/explous.zip)

```
<script src="./explous.min.js"></script>

```

## NPM

Implement explous using npm:

```
npm install @explous/explous@latest

```

## Angular example

```
import { ExplousButton } from '@explous/explous'

```

## Starter template

Your website will be built in HTML5, it should look like this:

```
<!DOCTYPE> 
<html lang="en"> 
<head> 
<meta name="viewport"content="width=device-width, initial-scale=1.0">
  <title>Title</title> 
  <script src="./explous.min.js"></script> 
</head> 
<body> 
  <h1>Hello World!</h1> 
</body> 
</html>

```

## Example of use of a component.

### Button

```
<button id="explous_button"></button>

<script>
ExplousButton.init({ 
  container:"explous_button", 
  color:"#ffffff", 
  background:"#1565c0", 
  border:"#1565c0", 
  changeColor:"#0d47a1", 
  text:"Success" 
}) 
</script>
```

## Built With

* [Javascript](https://www.javascript.com/)
* [Webpack](https://webpack.js.org/)
* [Babel-core](https://www.npmjs.com/package/babel-core)

## Contributing

Please read [CONTRIBUTING.md](https://github.com/danielmoreno510/Explous/blob/master/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Version

1.0.7. Licensed Mit.

## Authors

* **Daniel Moreno** - *Initial work* - [Danielmoreno510](https://github.com/danielmoreno510)

See also the list of [contributors](https://github.com/danielmoreno510/Explous/graphs/contributors) who participated in this project.

## License

This project is licensed under the MIT License
