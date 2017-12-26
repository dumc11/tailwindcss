import postcss from 'postcss'

export default function({ naming: { reset: ns } }) {
  return postcss.parse(`
    .${ns.input} {
      -webkit-appearance:none;
      -moz-appearance:none
    }
    .${ns.button}::-moz-focus-inner,
    .${ns.input}::-moz-focus-inner{
      border:0;
      padding:0
    }
    .${ns.list} {
      list-style-type:none
    }
    .${ns.link} {
      text-decoration:none
    }
    .${ns.link},
    .${ns.link}:active,
    .${ns.link}:focus,
    .${ns.link}:hover,
    .${ns.link}:link,
    .${ns.link}:visited{
      transition:color .15s ease-in
    }
    .${ns.link}:focus{
      outline:1px dotted currentColor
    }
  `).nodes
}
