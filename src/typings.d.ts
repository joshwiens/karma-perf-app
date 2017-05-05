/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}
declare module jasmine {
	interface Matchers {
    toHaveText(expected: string): boolean;
    toHaveMap(expected: { [k: string]: string }): boolean;
    toHaveCssClass(expected: string): boolean;
    toHaveCssStyle(expected: { [k: string]: string } | string): boolean;
	}
}
