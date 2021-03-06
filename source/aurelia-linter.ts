import {Linter, Rule, RuleError} from 'template-lint';

import {SelfCloseRule} from 'template-lint';
import {ParserRule} from 'template-lint';
import {ObsoleteTagRule} from 'template-lint';
import {ObsoleteAttributeRule} from 'template-lint';

import {RequireRule} from './rules/require';
import {SlotRule} from './rules/slot';
import {TemplateRule} from './rules/template';
import {RepeatForRule} from './rules/repeatfor';
import {ConflictingAttributesRule, ConflictingAttributes} from './rules/conflictingattributes';

import {Config} from './config';

export class AureliaLinter {
    linter: Linter;

    constructor(config?: Config) {

        if (config == undefined)
            config = new Config();

        let rules = [
            new SelfCloseRule(),
            new ParserRule(),
            new ObsoleteAttributeRule(config.obsoleteAttributes),
            new ObsoleteTagRule(config.obsoleteTags),

            new RequireRule(),
            new SlotRule(),
            new TemplateRule(config.containers),
            new ConflictingAttributesRule(<ConflictingAttributes[]> config.conflictingAttributes),
            new RepeatForRule()

        ].concat(config.customRules);

        this.linter = new Linter(
            rules,
            config.scopes,
            config.voids);
    }

    public lint(html: string): Promise<RuleError[]> {
        return this.linter.lint(html);
    }
}
