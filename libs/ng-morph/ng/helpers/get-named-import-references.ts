import type {Node} from 'ts-morph';

import {getImports} from '../../imports';
import type {Pattern} from '../../utils';
import {arrayFlat} from '../../utils';

export function getNamedImportReferences(
    namedImport: string,
    moduleSpecifier: string[] | string = '**/**',
    files: Pattern,
): Node[] {
    const importDeclarations = getImports(files, {
        namedImports: [namedImport],
        moduleSpecifier,
    });

    const namedImports = importDeclarations.map(declaration =>
        declaration
            .getNamedImports()
            .find(specifier => specifier.getName() === namedImport)
            ?.getNameNode(),
    );

    return arrayFlat(
        namedImports.map(
            specifier =>
                specifier?.findReferencesAsNodes().filter(
                    /**
                     * Otherwise, each `findReferencesAsNodes` will return references across THE WHOLE project.
                     * It will cause a lot of duplicates in the result and significantly slow down the process.
                     */
                    ref =>
                        ref.getSourceFile().getFilePath() ===
                        specifier?.getSourceFile().getFilePath(),
                ) || [],
        ),
    );
}
