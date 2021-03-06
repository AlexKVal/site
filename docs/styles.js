view Docs.Styles {
  <Title big>Styles</Title>
  <Body>
    <Text big>The final thing to understand about views are styles. Styles are written in JavaScript, which makes creating dynamic styles easy. We designate a style with $.</Text>

    <Text>
      Flint styles are conceputally similar to CSS, but far simpler. They are inspired by this talk from <Link href="https://speakerdeck.com/vjeux/react-css-in-js" target="_blank">Christopher Chedeau</Link>, and the subsequent amazing work by the JS community. They are powered by <Link href="https://github.com/FormidableLabs/radium" target="_blank">Radium</Link> and <Link href="https://github.com/kodyl/stilr" target="_blank">Stilr</Link> under the hood.
    </Text>

    <Code source={`
      view Main {
        <h1>Hello World</h1>

        $h1 = {
          color: 'crimson',
          fontWeight: 300
        }
      }
    `} />

    <Text>
      Styles inside views are incredibly power. They give you the full abilities of JavaScript, scoped to the current view, with a simple, declarative syntax that saves time and keeps things clean. Flint styles are really powerful too, they are:
    </Text>

    <ul>
      <li>Easy to write and apply due to custom tags</li>
      <li>Composable and expressive with arrays and objects</li>
      <li>Extracted into CSS by our compiler for amazing performance</li>
      <li>Support Media Queries, HTML states</li>
    </ul>

    <Text>When your view changes, your styles recalculate as needed. You may be wondering, what if I want to style two of the same tag differently?</Text>

    <Code source={`
      view Main {
        <h1>Hello World</h1>
        <h1 class="ask">How are you?</h1>

        $h1 = { color: 'green' }
        $ask = { color: 'blue' }
      }
    `} />

    <Text>
      Notice that Flint's style syntax doesn't distinguish between class and tag. Because you can name your tags as you like, we've kept it simple.
    </Text>

    <Text>Styles are also dynamic, and can access variables in the view just like you'd expect:</Text>

    <Code source={`
      view Main {
        let color = 'red'

        <h1>Hello World</h1>
        <button onClick={() => color = 'green'}>
          Change to green
        </button>

        $h1 = { color } // es6 shorthand for { color: color }
      }
    `} />

    <Title small>Element state helpers</Title>

    <Text>Flint keeps things simple and light. Use any of <code>active</code>, <code>hover</code>, <code>focus</code>, <code>visited</code> and more to add CSS psuedo state styles.</Text>

    <Code source={`
      view Main {
        <h1>Hello World</h1>

        $h1 = {
          fontWeight: 300,

          hover: {
            fontWeight: 600
          }
        }
      }
    `} />

    <Title small>Advanced styling</Title>

    <Text>Flint optimizes your styles behind the scenes. We use a parser to extract your static styles into a separate object. We're working on having those styles exctract fully into CSS, along with other upgrades as we go.</Text>

    <Text><b>Share styles</b> between tags with ease using arrays:</Text>

    <Code source={`
      view Main {
        <greet>Hello World</greet>
        <sub>Show as h2, named greet</sub>

        const shared = {
          background: 'red'
        }

        $greet = [shared, { fontWeight: 'bold' }]
        $sub = shared
      }
    `} />

    <Text>Access the repeat loop with <code>_</code> and <code>_index</code>:</Text>

    <Code source={`
      view Main {
        <greet repeat={['hi', 'hello']}>
          {_index}: {_}
        </greet>

        $greet = {
          fontWeight: _index % 2 ? 'bold' : 'normal',
          color: _ == 'hi' ? 'red' : 'blue'
        }
      }
    `} />

    <Title small>Styling sub-views</Title>

    <Text>You can also style the Child view wrapper:</Text>

    <Code source={`
      view Parent {
        // child will back a red background
        <Child />

        $Child = {
          background: 'red'
        }
      }

      view Child {
        <h1>Hello</h1>

        $ = {
          background: 'yellow'
        }
      }
    `} />
    
    <Next to='/docs/events'>Events</Next>
  </Body>
}