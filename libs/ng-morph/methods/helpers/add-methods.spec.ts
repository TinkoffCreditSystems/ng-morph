import { UnitTestTree } from '@angular-devkit/schematics/testing';
import { HostTree } from '@angular-devkit/schematics';
import {
  createProject,
  resetActiveProject,
  saveActiveProject,
  setActiveProject,
} from 'ng-morph/project';
import { createSourceFile } from 'ng-morph/source-file';
import { addMethods } from './add-methods';
import { getClasses } from 'ng-morph/classes';

describe('addMethods', () => {
  let host: UnitTestTree;

  beforeEach(() => {
    host = new UnitTestTree(new HostTree());

    setActiveProject(createProject(host));

    createSourceFile(
      'some/path/file.ts',
      `
class A {}
class B {}
`
    );
  });

  it('should add methods', () => {
    addMethods(getClasses('some/path/file.ts', { name: 'B' }), {
      name: 'test',
      statements: 'return 0;',
      returnType: 'number',
    });

    saveActiveProject();

    expect(host.readContent('some/path/file.ts')).toEqual(`
class A {}
class B {
    test(): number {
        return 0;
    }
}
`);
  });

  afterEach(() => {
    resetActiveProject();
  });
});
