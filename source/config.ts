import {Rule} from 'template-lint';
import {ConflictingAttributesRule} from './rules/conflictingattributes';


export class Config {
    obsoleteTags: Array<{ tag: string, msg?: string }> = [
        {
            tag: 'content',
            msg: 'use slot instead'
        }
    ];

    obsoleteAttributes: Array<{ attr: string, tag?: string, msg?: string }> = [
        {
            attr: "replaceable",
            tag: "template",
            msg: "has been superceded by the slot element"
        }
    ];

    conflictingAttributes: Array<{ attrs: string[], msg?: string }> = [
        {
            attrs: ["repeat.for", "if.bind", "with.bind"],
            msg: "template controllers shouldn't be placed on the same element"
        }
    ];

    voids: Array<string> = ['area', 'base', 'br', 'col', 'embed', 'hr',
        'img', 'input', 'keygen', 'link', 'meta',
        'param', 'source', 'track', 'wbr'];

    scopes: Array<string> = ['html', 'body', 'template', 'svg', 'math'];
    containers: Array<string> = ['table', 'select'];
    customRules: Rule[] = [];
}