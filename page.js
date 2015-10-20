view Page {
  <HeaderAlt />
  <Contain>
    <Sidebar yield />
    {^children}
  </Contain>

  $Contain = {
    flexFlow: 'row',
    width: '80%',
    maxWidth: 1300
  }
}

view Page.Sidebar {
  <sidebar>
    <a repeat={^list} key={_index} onClick={router.link(^base + '/' + _.slug)}>
      {_.title}
    </a>
  </sidebar>

  $ = {
    borderRight: '1px solid #ddd',
    margin: 20,
    marginLeft: 0
  }

  $item = {
    flexFlow: 'row',
    lineHeight: '1.6rem',
  }

  $index = {
    padding: [0, 10, 0, 0],
    flexFlow: 'row'
  }

  $a = [style.link, {
    whiteSpace: 'nowrap',
    padding: 20,
    width: '100%',
    display: 'flex',
    textAlign: 'right'
  }]
}
