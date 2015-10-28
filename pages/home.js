view Home {
  <Blur left="45%" top={-200} />
  <Header />
  <Examples />
  <Features />
  <Install title />
  <DemoVideo />
  <Slack />
  <FAQ />
  <Signup />
  <Footer />

  $ = { width: '100%' }
}

view Intro {
  <Contain yield />

  $ = {
    fontWeight: 300,
    fontSize: 28,
    padding: [20, 0],
    margin: [30, 0],
    border: '1px dotted #ddd',
    borderLeft: 'none',
    borderRight: 'none'
  }

  $Contain = {
    textAlign: 'center'
  }

  $p = {
    margin: [7, 0]
  }

  $.strong = {
    fontSize: 34,
    marginBottom: 12,
  }
}

view Home.Examples {
  <Contain>
    <section>
      <Blur />
      <Interlude center left>
        Flint introduces the view to ES6
      </Interlude>

      <DemoCounter />

    </section>

    <section>
      <Blur left="60%" />
      <Interlude center>
        Style views with ease...
      </Interlude>

      <DemoVenn />
    </section>

    <section>
      <Blur />
      <Interlude center>
        Flint runs on ES6, npm & React
      </Interlude>

      <DemoCircles />
    </section>
  </Contain>

  $ = {
    // padding: [0, 0, 40],
    margin: [0, 'auto', 40],
    width: '100%',
    maxWidth: 980,
    position: 'relative',
    zIndex: 0
  }

  $section = {
    position: 'relative'
  }
}

view Interlude {
  <Contain>
    <num if={^num}>
      {^num}
    </num>
    <Title light big>{^children}</Title>
  </Contain>

  $Contain = {
    maxWidth: ^pad ? 600 : 'auto',
    textAlign: ^right ? 'right': 'left',
    flexDirection: ^right ? 'row-reverse' : 'row',
    justifyContent: ^center ? 'center' : 'auto',
    margin: [30, 'auto'],
    padding: [0, 25]
  }

  const circleSize = 60
  const shared = {
    height: circleSize,
    alignItems: 'center',
    justifyContent: 'center'
  }
}

view Example {
  <Contain maxWidth={^maxWidth || 1000}>
    <in>{^in}</in>
    <out>{^out}</out>
  </Contain>

  $ = {
    flexFlow: 'row',
    flexGrow: 1,
    alignItems: 'space-between',
    justifyContent: 'center',
    WebkitTapHighlightColor: 'rgba(0,0,0,0)',

    [device.small]: {
      flexFlow: 'column'
    }
  }

  $out = [{
    flexGrow: 2,
    justifyContent: 'center',
    position: 'relative',
    order: ^flip ? 2 : 1,

    [device.small]: {
      width: '100%',
      order: ^flipVertical ? 1 : 2,
      padding: ^inPage ? '50px 0' : 0
    }
  }, ^outStyle]

  $in = [{
    flexGrow: 1,
    order: ^flip ? 1 : 2,
    zIndex: 10,
    margin: 0,

    [device.small]: {
      width: '90%',
      margin: 'auto',
      order: ^flipVertical ? 2 : 1
    }
  }, ^inStyle]
}

view Install {
  const install = 'sh <(curl -sL https://flint.love)'
  const select = () => view.refs.code.select()

  <Contain id="install">
    <Interlude center if={^title}>Install Flint</Interlude>
    <code onMouseUp={select} class="install">
     <input ref="code" value={install} readOnly size={install.length} />
    </code>

    <afterward>
      or: npm install -g flint
    </afterward>
    <Tag name="Install" outside right />
  </Contain>

  $ = {
    textAlign: 'center',
    margin: [0, 0, 60],

    [device.small]: {
      display: 'none'
    }
  }

  $code = {
    background: 'none'
  }

  $.install = {
    flexFlow: 'row',
    color: '#555',
    margin: [10, 'auto'],
  }

  $input = {
    background: `linear-gradient(90deg, ${color.brand1}, ${color.brand2})`,
    borderRadius: 5,
    border: '2px solid #eee',
    padding: [8, 10, 8, 16],
    fontSize: 20,
    margin: [-8, 0, -5],
    fontFamily: font.monoSpace,
    width: '100%',
    color: '#fff'
  }

  $afterward = {
    display: 'block',
    margin: [5, 'auto'],
    flexFlow: 'row',
    lineHeight: '1.2rem',
    opacity: 0.7,
    fontFamily: font.monoSpace
  }

  $a = style.link
}

view Slack {
  <Contain id="slack">
    <Interlude center>Join us on Slack!</Interlude>
    <iframe seamless="seamless" src="https://flint-slack.herokuapp.com/"></iframe>
  </Contain>

  $iframe = {
    border: 'none',
    width: '100%',
    height: 240,
    overflow: 'hidden'
  }

  $ = {
    marginBottom: 20
  }
}