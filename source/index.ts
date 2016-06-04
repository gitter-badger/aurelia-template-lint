"use strict";

import {SelfCloseRule} from 'template-lint'
import {ParserRule} from 'template-lint'

import {TemplateRule} from './template'
import {SlotRule} from './slot'
import {RequireRule} from './require'

export * from './template'
export * from './require'
export * from './slot'

export var DefaultRules = [
    new SelfCloseRule(),
    new ParserRule(),
    new TemplateRule(),
    new SlotRule(),
    new RequireRule(),
]