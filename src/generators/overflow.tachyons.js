import defineClasses from '../util/defineClasses'

export default function({ naming: { overflow: ns } }) {
  return defineClasses({
    [`${ns.base}${ns.auto}`]: { overflow: 'auto' },
    [`${ns.base}${ns.hidden}`]: { overflow: 'hidden' },
    [`${ns.base}${ns.visible}`]: { overflow: 'visible' },
    [`${ns.base}${ns.xVisible}`]: { 'overflow-x': 'visible' },
    [`${ns.base}${ns.yVisible}`]: { 'overflow-y': 'visible' },
    [`${ns.base}${ns.xHidden}`]: { 'overflow-x': 'hidden' },
    [`${ns.base}${ns.yHidden}`]: { 'overflow-y': 'hidden' },
    [`${ns.base}${ns.xAuto}`]: { 'overflow-x': 'auto' },
    [`${ns.base}${ns.yAuto}`]: { 'overflow-y': 'auto' },
    [`${ns.base}${ns.scroll}`]: { overflow: 'scroll' },
    [`${ns.base}${ns.xScroll}`]: { 'overflow-x': 'scroll' },
    [`${ns.base}${ns.yScroll}`]: { 'overflow-y': 'scroll' },
    [`${ns.base}${ns.container}`]: { 'overflow-y': 'scroll' },
    [`${ns.scrollingTouch}`]: { '-webkit-overflow-scrolling': 'touch' },
    [`${ns.scrollingAuto}`]: { '-webkit-overflow-scrolling': 'auto' },
  })
}
