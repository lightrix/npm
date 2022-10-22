/**
 * It takes a file path, checks if it's a TypeScript file, if it is, it compiles it to JavaScript, and
 * then imports it
 * @param {string} file - The file to import.
 * @returns The default export of the file.
 */
export declare const importFile: (file: string) => Promise<any>;
declare const _default: () => {
    importFile: (file: string) => Promise<any>;
};
export default _default;
