export interface TransformerCssUrlRebaseOptions {
  /**
   * The root directory of the project.
   *
   * vscode extensions will not pass in root, so this parameter is used to fix the extension's intelligent prompt. It will not affect the actual generated styles.
   */
  root?: string
}
