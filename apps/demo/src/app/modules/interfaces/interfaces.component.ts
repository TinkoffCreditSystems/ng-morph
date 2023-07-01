import { ChangeDetectionStrategy, Component } from '@angular/core';

const interfaces = `import {
    addInterfaces,
    editInterfaces,
    getInterfaces,
    removeInterfaces,
    setActiveProject,
    saveActiveProject,
} from 'ng-morph';

setActiveProject(createProject(new NgMorphTree(), '/', ['**/*.ts'));

addInterfaces('some/path/file.ts', {
    name: 'A',
    properties: [{ name: 's', type: 'string' }],
    methods: [{ name: 'method', returnType: 'number' }],
});

const declarations = getInterfaces('some/path/**.ts');

editInterfaces(declarations, () => ({
    name: 'B',
}));

removeInterfaces(declarations);

saveActiveProject();
`;

@Component({
  selector: 'interfaces',
  templateUrl: 'interfaces.template.html',
  styleUrls: ['./interfaces.style.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InterfacesComponent {
  readonly interfaces = interfaces;
}
