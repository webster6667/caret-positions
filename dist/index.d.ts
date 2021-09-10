import { SetFormElementCaretPosition } from './types';
/**
 * @description
 * set caret position on form element like input or textarea
 *
 * @param {HTMLInputElement | HTMLTextAreaElement} formElement
 * @param {number} symbolNumberAfterWhichPutCaret
 *
 * @example
 * const $input = document.querySelector('input'),
 *       symbolNumberAfterWhichPutCaret = 1
 *
 * $input.onfocus = (e) => {
 *     const target = e.target
 *     caretPosition.setFormElementCaretPosition(target, symbolNumberAfterWhichPutCaret)
 * }
 */
declare const setFormElementCaretPosition: SetFormElementCaretPosition;
export { setFormElementCaretPosition };
