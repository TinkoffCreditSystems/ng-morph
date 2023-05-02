import { ChangeDetectionStrategy, Component } from '@angular/core';

const code = `import {
    getBootstrapFn
    setActiveProject,
} from 'ng-morph';

setActiveProject(createProject(new NgMorphTree(), '/', ['**/*.ts'));

const bootstrapFn = getBootstrapFn('src/main.ts');
`;

@Component({
  selector: 'get-bootstrap-function',
  templateUrl: './get-bootstrap-function.template.html',
  styleUrls: ['./get-bootstrap-function.style.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GetBootstrapFunctionComponent {
  readonly code = code;
}
