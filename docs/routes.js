view Docs.Routes {
  <Title big>Routes</Title>
  <Body>
    <Text big>Flint comes with a lightweight routing system, but lets you plug in any you'd like.</Text>

    <Text>
      Routing is done through <code>Flint.router</code>, which has the following functions:
    </Text>

    <ul>
      <li><code>go</code> - Pass in a pathname to navigate to the route</li>
      <li><code>link</code> - Returns a function that executes go</li>
      <li><code>isActive</code> - Returns a boolean if route is active</li>
      <li><code>onChange</code> - Pass a function, calls back with path when it changes</li>
      <li><code>back</code> - Navigates backwards</li>
      <li><code>forward</code> - Navigates forwards</li>
    </ul>

    <Text>
      It also has the following objects available to check:
    </Text>

    <ul>
      <li><code>params</code> - Param object for the deepest matched route</li>
    </ul>

    <Title small>Setting routes</Title>
    <Text>
      You don't need to instantiate routes, you can just use
      the <code>route</code> property on any JSX element. Flint will then
      watch your location and automatically determine if it should show
      or hide the element.
    </Text>

    <Title>Example</Title>
    <Code source={`
      view Main {
        <h1>Welcome to our store</h1>
        <Home route="/" />
        <About route="/about" />
        <Product route="/products/:id" />
      }

      view Home {
        let toProduct = id => Flint.router.go('/products/' + id)

        <h2>Come on by</h2>
        <links>
          <a onClick={() => toProduct(15)}>buy shoes</a>
          <a onClick={() => toProduct(30)}>or cakes</a>
          <a onClick={() => toProduct(12)}>or hammers</a>

          // Flint.router.link returns a function, for use in links
          <a onClick={Flint.router.link('/products')}>or hammers</a>
        </links>
      }

      view About {
        <h2>About our company</h2>
      }

      view Product {
        <h2>Product {view.props.params.id}</h2>
        <a onClick={() => Flint.router.go('/')}>home</a>
      }
    `} />

    <Next to='/docs/extras'>Extras</Next>
  </Body>
}