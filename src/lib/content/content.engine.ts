import * as Handlebars from 'handlebars';

import { ITriggerPayload } from '../template/template.interface';

Handlebars.registerHelper('equals', function (arg1, arg2, options) {
  return arg1 == arg2 ? options.fn(this) : options.inverse(this);
});

export function compileTemplate(content: string, data: ITriggerPayload) {
  // const variables = getHandlebarsVariables(content);
  const template = Handlebars.compile(content);

  return template(data);
}

/*function getHandlebarsVariables(input: string): string[] {
  const ast: hbs.AST.Program = Handlebars.parseWithoutProcessing(input);

  return ast.body
    .filter(({ type }: hbs.AST.Statement) => type === 'MustacheStatement')
    .map((statement: hbs.AST.Statement) => {
      const moustacheStatement: hbs.AST.MustacheStatement =
        statement as hbs.AST.MustacheStatement;
      const paramsExpressionList =
        moustacheStatement.params as hbs.AST.PathExpression[];
      const pathExpression = moustacheStatement.path as hbs.AST.PathExpression;

      return paramsExpressionList[0]?.original || pathExpression.original;
    });
}*/