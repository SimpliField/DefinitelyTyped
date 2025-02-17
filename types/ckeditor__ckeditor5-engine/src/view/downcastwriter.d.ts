import AttributeElement from "./attributeelement";
import ContainerElement from "./containerelement";
import Document from "./document";
import DocumentFragment from "./documentfragment";
import EditableElement from "./editableelement";
import Element from "./element";
import EmptyElement from "./emptyelement";
import { Item } from "./item";
import Position from "./position";
import Range from "./range";
import RawElement from "./rawelement";
import Selection, { Selectable } from "./selection";
import Text from "./text";
import UIElement from "./uielement";
import View from "./view";

export default class DowncastWriter {
    readonly document: Document;

    constructor(document: Document);
    addClass(className: string | string[], element: Element): void;
    breakAttributes(positionOrRange: Position | Range): Position | Range;
    breakContainer(position: Position): Position;
    clear(range: Range, element: Element): void;
    clearClonedElementsGroup(groupName: string): void;
    createAttributeElement(
        name: string,
        attributes?: Record<string, string>,
        options?: { priority: number; id: number | string },
    ): AttributeElement;
    createContainerElement(
        name: string,
        attributes?: Record<string, string>,
        options?: { isAllowedInsideAttributeElement?: boolean | undefined },
    ): ContainerElement;
    createDocumentFragment(children: Node | Iterable<Node>): DocumentFragment;
    createEditableElement(name: string, attributes?: Record<string, string>): EditableElement;
    createEmptyElement(
        name: string,
        attributes?: Record<string, string>,
        options?: { isAllowedInsideAttributeElement?: boolean | undefined },
    ): EmptyElement;
    createPositionAfter(item: Item): Position;
    createPositionAt(itemOrPosition: Item, offset?: number | "end" | "before" | "after"): Position;
    createPositionAt(itemOrPosition: Position): Position;
    createPositionBefore(item: Item): Position;
    createRange(start: Position, end?: Position): Range;
    createRangeIn(element: Element): Range;
    createRangeOn(item: Item): Range;
    createRawElement(
        name?: string,
        attributes?: Record<string, string>,
        renderFunction?: (domElement: HTMLElement) => void,
        options?: { isAllowedInsideAttributeElement?: boolean | undefined },
    ): RawElement;
    createSelection(
        selectable?: Selectable,
        placeOrOffset?: number | "before" | "end" | "after" | "on" | "in",
        options?: { backward?: boolean | undefined; fake?: boolean | undefined; label?: string | undefined },
    ): Selection;
    createText(data: string): Text;
    createUIElement(
        name: string,
        attributes?: Record<string, string>,
        renderFunction?: (domElement: HTMLElement) => void,
        options?: { isAllowedInsideAttributeElement?: boolean | undefined },
    ): UIElement;
    insert(
        position: Position | null,
        nodes:
            | Text
            | AttributeElement
            | ContainerElement
            | EmptyElement
            | RawElement
            | UIElement
            | Iterable<Text | AttributeElement | ContainerElement | EmptyElement | RawElement | UIElement>,
    ): Range;
    mergeAttributes(position: Position): Position;
    mergeContainers(position: Position): Position;
    move(sourceRange: Range, targetPosition: Position): Range;
    remove(rangeOrItem: Range | Item): DocumentFragment;
    removeAttribute(key: string, element: Element): void;
    removeClass(className: string, element: Element): void;
    removeCustomProperty(key: string, element: Element): boolean;
    removeStyle(property: string, element: Element): void;
    rename(newName: string, viewElement: ContainerElement): ContainerElement;
    setAttribute(key: string, value: string, element: Element): void;
    setCustomProperty(key: string, value: any, element: Element): void;
    setSelection(
        selectable: Selectable,
        placeOrOffset?: number | "before" | "end" | "after" | "on" | "in",
        options?: { backward?: boolean | undefined; fake?: boolean | undefined; label?: string | undefined },
    ): void;
    setSelectionFocus(itemOrPosition: View, offset?: number | "end" | "before" | "after"): void;
    setSelectionFocus(itemOrPosition: Item | Position): void;
    setStyle(property: string, value: string, element: Element): void;
    setStyle(property: Record<string, string>, element: Element): void;
    unwrap(range: Range, attribute: AttributeElement): void;
    wrap(range: Range, attribute: AttributeElement): Range;
}
