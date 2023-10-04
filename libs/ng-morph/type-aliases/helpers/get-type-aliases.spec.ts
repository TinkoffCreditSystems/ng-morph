import { UnitTestTree } from '@angular-devkit/schematics/testing';
import { HostTree } from '@angular-devkit/schematics';
import {
  createProject,
  resetActiveProject,
  setActiveProject,
} from 'ng-morph/project';
import { createSourceFile } from 'ng-morph/source-file';
import { getTypeAliases } from './get-type-aliases';

describe('getTypeAliases', () => {
  let host: UnitTestTree;

  beforeEach(() => {
    host = new UnitTestTree(new HostTree());

    setActiveProject(createProject(host));

    createSourceFile('some/path/file.ts', `type A = string[];`);

    createSourceFile('some/path/one-more-file.ts', `type B = number | string;`);
  });

  it('should find two type aliases', () => {
    const declarations = getTypeAliases('some/path/**.ts');

    expect(declarations.length).toEqual(2);
  });

  it('should find one type aliases', () => {
    const declarations = getTypeAliases('some/path/file.ts');

    expect(declarations.length).toEqual(1);
  });

  it('should find one type alias by name', () => {
    const declarations = getTypeAliases('some/path/**.ts', {
      name: 'B',
    });

    expect(declarations.length).toEqual(1);
  });

  afterEach(() => {
    resetActiveProject();
  });
});
