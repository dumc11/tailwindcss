import postcss from 'postcss'

export default function({ naming: { interactive: ns } }) {
  return postcss.parse(`
    .${ns.dim} {
        opacity: 1;
        -webkit-transition: opacity .15s ease-in;
        transition: opacity .15s ease-in;
    }
    .${ns.dim}:hover,
    .${ns.dim}:focus {
        opacity: .5;
        -webkit-transition: opacity .15s ease-in;
        transition: opacity .15s ease-in;
    }
    .${ns.dim}:active {
        opacity: .8;
        -webkit-transition: opacity .15s ease-out;
        transition: opacity .15s ease-out;
    }
    .${ns.hideChild} .child {
        opacity: 0;
        -webkit-transition: opacity .15s ease-in;
        transition: opacity .15s ease-in;
    }
    .${ns.hideChild}:hover .child,
    .${ns.hideChild}:focus .child,
    .${ns.hideChild}:active .child {
        opacity: 1;
        -webkit-transition: opacity .15s ease-in;
        transition: opacity .15s ease-in;
    }
    .${ns.underline}:hover,
    .${ns.underline}:focus {
        text-decoration: underline;
    }
    .${ns.grow} {
        -moz-osx-font-smoothing: grayscale;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        -webkit-transform: translateZ( 0);
        transform: translateZ( 0);
        -webkit-transition: -webkit-transform .25s ease-out;
        transition: -webkit-transform .25s ease-out;
        transition: transform .25s ease-out;
        transition: transform .25s ease-out, -webkit-transform .25s ease-out;
    }
    .${ns.grow}:hover,
    .${ns.grow}:focus {
        -webkit-transform: scale( 1.05);
        transform: scale( 1.05);
    }
    .${ns.grow}:active {
        -webkit-transform: scale( .90);
        transform: scale( .90);
    }
    .${ns.growLarge} {
        -moz-osx-font-smoothing: grayscale;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        -webkit-transform: translateZ( 0);
        transform: translateZ( 0);
        -webkit-transition: -webkit-transform .25s ease-in-out;
        transition: -webkit-transform .25s ease-in-out;
        transition: transform .25s ease-in-out;
        transition: transform .25s ease-in-out, -webkit-transform .25s ease-in-out;
    }
    .${ns.growLarge}:hover,
    .${ns.growLarge}:focus {
        -webkit-transform: scale( 1.2);
        transform: scale( 1.2);
    }
    .${ns.growLarge}:active {
        -webkit-transform: scale( .95);
        transform: scale( .95);
    }
    .${ns.shadow}::after {
        box-shadow: 0 0 8px 2px rgba( 0, 0, 0, .2);
        opacity: 0;
        -webkit-transition: opacity .25s ease-in-out;
        transition: opacity .25s ease-in-out;
    }
    .${ns.shadow}:hover::after,
    .${ns.shadow}:focus::after {
        opacity: 1;
    }
    .${ns.bg},
    .${ns.bg}:hover,
    .${ns.bg}:focus {
        -webkit-transition: background-color .15s ease-in-out;
        transition: background-color .15s ease-in-out;
    }

    .${ns.glow} {
      transition: opacity .15s ease-in;
    }
    .${ns.glow}:hover,
    .${ns.glow}:focus {
      opacity: 1;
      transition: opacity .15s ease-in;
    }
    .${ns.hoverInherit}:focus,
    .${ns.hoverInherit}:hover {
      color:inherit
    }
    .${ns.hoverBgInherit}:focus,
    .${ns.hoverBgInherit}:hover {
      background-color:inherit
    }
  `).nodes
}
