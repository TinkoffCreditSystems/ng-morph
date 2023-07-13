import { UnitTestTree } from '@angular-devkit/schematics/testing';
import { HostTree } from '@angular-devkit/schematics';
import { createProject, resetActiveProject, saveActiveProject, setActiveProject, } from 'ng-morph/project';
import { createSourceFile } from 'ng-morph/source-file';
import { getInterfaces } from './get-interfaces';
import { editInterfaces } from './edit-interfaces';

describe('editInterfaces', () => {
  let host: UnitTestTree;

  beforeEach(() => {
    host = new UnitTestTree(new HostTree());

    setActiveProject(createProject(host));

    createSourceFile(
      'some/path/file.ts',
      `
interface A {}

const a: A;
`
    );
  });

  it('should edit Interfaces', () => {
    const declarations = getInterfaces('some/path/file.ts');

    editInterfaces(declarations, () => ({
      name: 'B',
    }));

    saveActiveProject();

    expect(host.readContent('some/path/file.ts')).toEqual(`
interface B {}

const a: B;
`);
  });

  afterEach(() => {
    resetActiveProject();
  });
});
