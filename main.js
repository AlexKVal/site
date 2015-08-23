import keysim from 'keysim'

height = window.innerHeight - 160
primary = '#970C0A'
secondary = '#FB7124'
small = window.innerWidth < 672

view Main {
  on('mount', () => {
    keyboard = keysim.Keyboard.US_ENGLISH;
    keyboard
      .dispatchEventsForInput('hello!', this.refs.text);
  })

  <ribbon>
    <a href="#">GitHub</a>
  </ribbon>

  <test>
    <textarea ref="text" />
  </test>

  <Logo />
  <Introduction />

  <Contain>
    <Demo />
    <p>Write your structure just like HTML</p>

    <Demo />
    <p>Use variables and constants as you like</p>

    <Demo />
    <p>Style elements with variables</p>
  </Contain>

  <Install />

  <Contain>
    <About />
  </Contain>

  <Contain>
    <Motto />
  </Contain>

  <Contain>
    <DemoVideo />
  </Contain>

  $ = {
    color: '#777',
    fontSize: 18,
    fontFamily: 'Georgia',
    lineHeight: '2rem',
  }

  $span = {
    position: 'absolute',
    top: 0,
    right: 0
  }

  $ribbon = {
    backgroundColor: '#aaa',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    position: 'absolute',
    right: -60,
    top: 30,
    width: 220,
    transform: `rotate(45deg)`,
  }

  $a = {
    color: '#fff',
    display: 'block',
    font: '14px "Helvetica Neue", Helvetica, Arial, sans-serif',
    margin: 0,
    padding: '3px 0',
    width: '100%',
    textAlign: 'center',
    textDecoration: 'none',
  }

  $p = {
    textAlign: 'center',
    margin: [40, 0]
  }
}

demoBorder = 5

view Demo {
  <browser>
    <Toolbar />
  </browser>
  <editor>
    <Toolbar />
    <Video name="d1.mov" />
  </editor>

  $ = {
    flexFlow: 'row',
    margin: 'auto',
    boxShadow: '0 0 10px rgba(0,0,0,0.05)',
    borderRadius: demoBorder,
    width: '80%',
    maxWidth: 700,
  }

  both = {
    flexFlow: 'column',
    border: '1px solid #eee',
    width: '50%',
    height: 220,
    margin: 0,
  }

  $browser = [both, {
    marginRight: 0,
    borderRight: 'none',
    borderTopLeftRadius: demoBorder,
    borderBottomLeftRadius: demoBorder,
  }],

  $editor = [both, {
    marginLeft: 0,
    borderTopRightRadius: demoBorder,
    borderBottomRightRadius: demoBorder,
  }]
}

view Toolbar {
  <toolbar>
    <ctrl class="close" />
    <ctrl class="max" />
    <ctrl class="open" />
  </toolbar>

  f = '#fefefe'
  to = '#fff'

  $ = {
    background: `linear-gradient(${f}, ${to})`,
    borderTop: '1px solid #fff',
    borderBottom: '1px solid #f5f5f5',
    height: 12,
    minHeight: 12,
    padding: [0, 2],
    borderTopRightRadius: demoBorder,
    borderTopLeftRadius: demoBorder,
    margin: 0,
    flexFlow: 'row',
    alignItems: 'flex-start',
  }

  $ctrl = {
    width: 8,
    height: 8,
    transform: {
      scale: 0.8
    },
    background: '#EB5B54',
    borderRadius: 10,
    margin: ['auto', 1],
    opacity: 0.2
  }

  $.max = {
    background: '#F7C033'
  }

  $.open = {
    background: '#69CB43'
  }
}

view Section {
  <section yield />

  $ = {
    padding: 40,
    background: '#eee'
  }
}

view Logo {
  <img src="flint.png" />
  <tag if={false}>Beta</tag>

  $ = {
    flexFlow: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }

  $img = {
    width: 159,
    margin: [10, 0, 0, 0],
  }

  $tag = {
    fontSize: 12,
    textTransform: 'uppercase',
    fontWeight: 500,
    color: '#aaa',
    margin: [0, 10, 0, 0]
  }
}

view About {
  text = [
    `Works on React`,
    `Automatic npm installs`,
    `Modern ES6, simplified`,
    `Instant updates as you type`,
    `Faster runtime`,
    `Smart errors and tools`,
  ]

  <list>
    <item repeat={text}>
      {_}
    </item>
  </list>

  $ = {
    padding: [20, 0],
    fontSize: 16,
    maxWidth: 700,
    margin: [30, 'auto', 0]
  }

  $list = {
    margin: [0, '10%'],
    padding: [40, '5%'],
    border: '1px solid #ddd',
    borderRadius: 5,
    flexFlow: 'row',
    flexWrap: 'wrap',
    textAlign: 'center'
  }

  $item = {
    margin: [8, 0],
    padding: [0],
    lineHeight: '1.5rem',
    width: '50%'
  }
}

view Video {
  <video loop autoplay>
    <source src={^name} type="video/mp4" />
  </video>

  $ = {
    border: 'none',
    width: '100%',
    height: '100%'
  }
}

view DemoVideo {
  <video controls>
    <source
      src="https://s3-us-west-1.amazonaws.com/flint123/flintdemo.mp4"
      type="video/mp4" />
    <a
      href="https://www.youtube-nocookie.com/embed/VNfkk6lH0gg?rel=0&amp;showinfo=0">
      See on YouTube
    </a>
  </video>
  <desc>
    Start from 2:13 to see the live demonstration.
  </desc>

  $ = {
    margin: 'auto',
    textAlign: 'center'
  }

  $video = {
    border: 'none',
    width: '100%',
    height: '100%',
    maxHeight: 450,
    maxWidth: 672
  }

  $desc = {
    display: 'block',
    fontSize: 12,
    padding: [10, 0, 40]
  }
}

view Introduction {
  <h2>Radically improved development</h2>
  <desc>Write web apps simpler, easier and faster.</desc>


  $ = {
    padding: [25, 20, 40],
    margin: 'auto',
    fontFamily: 'Helvetica Neue, Helvetica, Arail, sans-serif'
  }

  title = {
    // fontFamily: 'Montserrat, Myriad, Helvetica, Arial',
    // letterSpacing: -1,
    minWidth: 600,
    margin: [5, 0],
    lineHeight: '1.4em',
    textAlign: 'center'
  }

  $h2 = [title, {
    color: '#444',
    fontSize: 24,
    fontWeight: 300,
  }]

  $h3 = [title, {
    color: 'rgb(124, 124, 124)',
    fontSize: 20
  }]

  $desc = {
    textAlign: 'center',
    fontSize: 20,
    lineHeight: '1.6rem',
    padding: [5, 0, 0],
    fontWeight: 300,
    width: '80%',
    color: '#666',
    margin: 'auto'
  }
}

view Brief {
  <icons>
    <Icon src="computer1.svg">
      CLI
    </Icon>
    <Icon src="web2.svg">
      Compiler
    </Icon>
    <Icon src="internet84.svg">
      Browser
    </Icon>
    <Icon src="browser105.svg">
      Editor
    </Icon>
  </icons>

  $ = {
    textAlign: 'center'
  }

  $icons = {
    flexFlow: 'row',
    margin: 'auto',
    width: '80%',
    maxWidth: 800,
    justifyContent: 'space-around'
  }
}

view Icon {
  <img yield />

  $img = {
    width: 50,
    height: 50,
    margin: [0, 'auto', 5]
  }

  $ = {
    textAlign: 'center',
    fontSize: 16
  }
}

view Link {
  <a yield />

  $ = { display: 'inline' }

  $a = {
    display: 'inline',
    color: primary,
    textDecoration: 'underline',
    cursor: 'pointer'
  }
}

view Signup {
  <form action="//flintlang.us11.list-manage.com/subscribe/post?u=d6ee317984756a7f0f5e9378b&amp;id=dcc2cefed5" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
    <div id="mc_embed_signup_scroll">
      <div class="mc-field-group">
        <input type="text" placeholder="Name" name="NAME" class="" id="mce-NAME" />
      </div>
      <div class="mc-field-group">
        <input type="email" placeholder="Contact (email or handle)" name="EMAIL" class="required email" id="mce-EMAIL" />
      </div>
      <div if={false} class="mc-field-group">
        <textarea name="ABOUT" class="" placeholder="What are you most interested in with Flint? Any feedback?" id="mce-ABOUT"></textarea>
      </div>
      <hide id="mce-responses" class="clear">
        <div class="response" id="mce-error-response" style="display:none"></div>
        <div class="response" id="mce-success-response" style="display:none"></div>
      </hide>
      <hide style="position: absolute; left: -5000px;">
        <input type="text" name="b_d6ee317984756a7f0f5e9378b_dcc2cefed5" tabindex="-1" value="" />
      </hide>
      <center class="clear">
        <submit-input
          class="button"
          type="submit"
          value="Submit"
          name="subscribe" id="mc-embedded-subscribe" />
      </center>
    </div>
  </form>

  $ = {
    margin: 'auto',
    position: 'relative',
    zIndex: 100,
    padding: [0, 0, 100],
  }

  $hide = {
    display: 'none'
  }

  $desc = {
    borderTop: '1px solid #f2f2f2',
    borderBottom: '1px solid #f2f2f2',
    color: '#682121',
    margin: [0, 0, 20],
    padding: [20, 0]
  }

  $h3 = {
    fontSize: 18,
    color: '#444'
  }

  $form = {
    textAlign: 'left',
    fontSize: 16
  }

  input = {
    width: '100%',
    marginBottom: 20,
    borderRadius: 5
  }

  $input = input

  $textarea = [input, {
    border: '1px solid #ccc',
    height: 150
  }]

  $label = {
    margin: [10, 0]
  }

  $submit = {
    border: '1px solid #ccc',
    color: '#333',
    background: '#fff',
    padding: 10
  }
}

view Contain {
  <contain yield />

  $ = {
    minWidth: 500,
    maxWidth: 800,
    width: '100%',
    margin: 'auto',
    flexFlow: 'inherit',
    alignItems: 'inherit',
    justifyContent: 'inherit',
    flexGrow: 0,
    flexShrink: 0
  }
}

view Motto {
  <h2>About Flint</h2>
  <p>
    React's self-contained views are a beautiful abstraction
    for the web. ES6 is great too. But our systems don't work
    together well today.
    Assembling a best-practice stack takes months to learn, weeks
    to assemble, and never-ending caretaking.
  </p>
  <p>
    We are <em>writing for our libraries </em>
    rather than having an intuitive language to build with.
  </p>
  <p>
    Flint is a language for this, with amazing tooling.
    Our philosophy: allow developers to be maximally creative with,
  </p>
  <ul>
    <li>Light abstractions designed for speed and expressivity</li>
    <li>Immediate, helpful feedback throughout</li>
    <li>Ability to go from idea to live with ease</li>
    <li>Smart tools that enable simple code</li>
  </ul>
  <p>
    Watch our 3 minute video where we build an interactive,
    animated web app from scratch, while teaching you all of Flint:
  </p>

  $ = {
    padding: [40, '15%'],
    fontSize: 15,
    lineHeight: '1.8rem'
  }

  $p = {
    marginBottom: 0
  }

  $li = {
    margin: [10, 0, 0]
  }

  $h2 = {
    fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
    textAlign: 'center',
    fontWeight: 300,
    fontSize: 24
  }
}

view Install {
  <button>
    npm install -g flint
  </button>

  $button = {
    background: 'green',
    width: 250,
    padding: [10, 0],
    margin: 'auto',
    color: 'white',
    textAlign: 'center',
    borderRadius: 10,
    border: 'none'
  }
}
