export const ACCESSORS_SAMPLES = `import {
    addAccessors,
    getAccessors,
    editAccessors,
    removeAccessors,
    setActiveProject,
    saveActiveProject,
} from 'ng-morph';

setActiveProject(createProject(new NgMorphTree(), '/', ['**/*.ts'));

addAccessors(getClasses('some/path/file.ts'), [
    {
      name: 'setter',
      kind: StructureKind.SetAccessor,
    },
]);
    
const declarations = getAccessors(getClasses('some/path/**.ts'), {
    name: 'd',
    isStatic: true,
});

editAccessors(declarations, () => ({
    name: 'anotherName',
}));

removeAccessors(declarations);

saveActiveProject();
`;
