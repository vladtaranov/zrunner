interface Window {
  JQuery: JQueryStatic,
  $: JQueryStatic
}

interface JQuery {
  zRunner: (userOptions?: zRunner.UserOptions) => JQuery
}
