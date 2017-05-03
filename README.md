<div align="center">
  <!-- replace with accurate logo e.g from https://worldvectorlogo.com/ -->
  <a href="https://github.com/webpack/webpack">
    <img width="200" height="200" vspace="" hspace="25"
      src="https://cdn.rawgit.com/webpack/media/e7485eb2/logo/icon.svg">
  </a>
  <h1>Karma-Webpack Performance Application</h1>
  <p>An @angular/cli Karma-Webpack Performance Benchmarking Application ( Webpack Internal ).<p>
</div>

<h2 align="center">Current Release Performance</h2>

`tbd`

<h2 align="center">Install</h2>

```bash
npm i -g gnomon

git clone git@github.com:webpack-contrib/karma-perf-app.git

cd karma-perf-app

yarn install
```

<h2 align="center">Usage</h2>

```bash
# See https://github.com/paypal/gnomon for full options set
npm test | gnomon -t elapsed-total -h 3 -m 1.5
```

<h2 align="center">Test Types</h2>

This application is intended to provide a somewhat real world ( all be it contrived ) benchmark to vet major changes to the `karma-webpack` plugin in order to provide consistant performance.

### Component Tests

Component tests are broken down into 27 types and identified by `<compTypePrefix>-testcomp-<identifier>` e.g. `al-testcomp-a`

Each test type is then duplicated across 5 different component implementation types.

- A `standard` module containing test components with external templateUrl and styleUrls.
- An `inline style` module containing test components with external templateUrl and inline styles.
- An `inline template` module containing test components with inline html templates and external styleUrls.
- An `all inline` module containing test components with inline html templates and inline styles.
- A `lazy` module containing test components with external templateUrl and styleUrls.

### Directive Tests

#### Pipe Tests

#### Service Tests
