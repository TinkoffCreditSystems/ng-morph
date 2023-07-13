import { UnitTestTree } from '@angular-devkit/schematics/testing';
import { HostTree } from '@angular-devkit/schematics';
import { getImports } from './get-imports';
import { createProject, resetActiveProject, saveActiveProject, setActiveProject, } from 'ng-morph/project';
import { createSourceFile } from 'ng-morph/source-file';
import { editImports } from './edit-imports';

describe('editImports', () => {
  let host: UnitTestTree;

  beforeEach(() => {
    host = new UnitTestTree(new HostTree());

    setActiveProject(createProject(host));

    createSourceFile(
      'some/path/file.ts',
      `
import { a } from 'b';

console.log(a);
`
    );
  });

  it('should edit imports', () => {
    const imports = getImports('some/path/file.ts');

    editImports(imports, () => ({
      namedImports: ['b,c'],
    }));

    saveActiveProject();

    expect(host.readContent('some/path/file.ts')).toEqual(`
import { b,c } from 'b';

console.log(a);
`);
  });

  afterEach(() => {
    resetActiveProject();
  });
});
