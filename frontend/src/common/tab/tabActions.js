export function selectTab(tabIb) {
  // console.log(tabIb)
  return {
    type: 'TAB_SELECTED',
    payload: tabIb
  }
}

export function showTabs(...tabIds) {
  const tabsToShow = {}
  tabIds.forEach(e => tabsToShow[e] = true)
  return {
    type: 'TAB_SHOWED',
    payload: tabsToShow
  }
}