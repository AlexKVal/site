view Page {
  <HeaderAlt />
  <Contain>
    <Sidebar yield />
    <inner>
      {^children}
    </inner>
  </Contain>
  <Footer />

  $ = {
    [device.small]: {
      flexFlow: 'column'
    }
  }

  $Contain = {
    width: '80%',
    maxWidth: 1100,
    flexFlow: 'row',

    [device.small]: {
      flexFlow: 'column'
    }
  }

  $inner = {
    padding: [20, '4%'],
  }
}

view Page.Sidebar {
  const url = slug => ^base + '/' + slug

  <a
    repeat={^list}
    class={{ active: router.isActive(url(_.slug)) }}
    key={_index} onClick={router.link(url(_.slug))}>
    {_.title}
  </a>

  $ = {
    borderRight: '1px solid #ddd',
    margin: 20,
    marginLeft: 0,

    [device.small]: {
      borderRight: 'none',
      flexFlow: 'row',
      width: '100%',
      flexWrap: 'wrap',
      justifyContent: 'center'
    }
  }

  $active = {
    color: 'black',
    fontWeight: 600
  }

  $a = [style.link, {
    whiteSpace: 'nowrap',
    padding: [10, 20],
    minWidth: 120,
    display: 'flex',
    textAlign: 'right'
  }]
}

view RoutedContent {
  let el

  on('props', () => {
    el = ^content.filter(x => x.slug == ^params.slug)[0]
  })

  <body>
    {view.el(`${^parent}.${el.view}`)}
  </body>

  $body = {
    width: '100%'
  }
}