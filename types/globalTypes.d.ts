interface Window {
  JQuery: JQueryStatic,
  $: JQueryStatic
}

interface JQuery {
  zRunner: (...any) => JQuery | zRunner.OptionsTypes | zRunner.OptionsTypes[]
}
