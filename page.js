view Page {
  <HeaderAlt />
  <Contain style={{ maxWidth: 900 }}>
    <Sidebar if={view.props.base} yield />
    <inner>
      {view.props.children}
    </inner>
  </Contain>
  <Footer />

  $ = {

    [device.small]: {
      flexFlow: 'column'
    }
  }

  $Contain = {
    maxWidth: 800,
    margin: 'auto',
    flexFlow: 'row',

    [device.small]: {
      flexFlow: 'column'
    }
  }

  $inner = {
    padding: [5, '5%'],
  }
}

view Page.Sidebar {
  const url = slug => view.props.base + '/' + slug

  <a
    repeat={view.props.list}
    class={{ active: router.isActive(url(_.slug)) }}
    key={_index} onClick={router.link(url(_.slug))}>
    {_.title}
  </a>

  $ = {
    borderRight: '1px solid #ddd',
    minWidth: 120,
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
    fontWeight: 600,
    color: 'black',
  }

  $a = [style.link, {
    whiteSpace: 'nowrap',
    padding: [10, 20],
    minWidth: 120,
    display: 'flex',
    width: '100%',
    textAlign: 'right'
  }]
}

view RoutedContent {
  let el

  on.props(() => {
    el = view.props.content.filter(x => x.slug == view.props.params.slug)[0]
  })

  <body>
    {view.el(`${view.props.parent}.${el.view}`)}
  </body>

  $body = {
    width: '100%'
  }
}