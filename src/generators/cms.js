import postcss from 'postcss'

export default function({ cms, naming: { cms: ns } }) {
  return postcss.parse(`
    .${ns.copyLineHeight} p,
    .${ns.copyLineHeight} ul,
    .${ns.copyLineHeight} ol {
      line-height: ${cms.copyLineHeight};
    }
    .${ns.headlineLineHeight} h1,
    .${ns.headlineLineHeight} h2,
    .${ns.headlineLineHeight} h3,
    .${ns.headlineLineHeight} h4,
    .${ns.headlineLineHeight} h5,
    .${ns.headlineLineHeight} h6 {
      line-height: ${cms.headlineLineHeight};
    }
    .${ns.listReset} ul,
    .${ns.listReset} ol {
      padding-left: 0;
      margin-left: 0;
      list-style-type: none;
    }
    .${ns.copyIndent} p+p {
      text-indent: ${cms.copyIndent};
    },
    .${ns.copySeparator} p+p {
      margin-top: ${cms.copySeparator};
    }
    .${ns.img} img {
      width: 100%;
      max-width:100%;
      display: block;
    }
  `).nodes
}
