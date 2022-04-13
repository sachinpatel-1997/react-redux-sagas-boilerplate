import React, { forwardRef } from 'react';
import { acequire } from 'ace-builds/src-noconflict/ace';
import AsyncEsmComponent, {
} from './AsyncEsmComponent';


/**
 * Async loaders to import brace modules. Must manually create call `import(...)`
 * promises because webpack can only analyze async imports statically.
 */
const aceModuleLoaders = {
  'mode/sql': () => import('brace/mode/sql'),
  'mode/markdown': () => import('brace/mode/markdown'),
  'mode/css': () => import('brace/mode/css'),
  'mode/json': () => import('brace/mode/json'),
  'mode/yaml': () => import('brace/mode/yaml'),
  'mode/html': () => import('brace/mode/html'),
  'mode/javascript': () => import('brace/mode/javascript'),
  'theme/textmate': () => import('brace/theme/textmate'),
  'theme/github': () => import('brace/theme/github'),
  'ext/language_tools': () => import('brace/ext/language_tools'),
  'ext/searchbox': () => import('brace/ext/searchbox'),
};


/**
 * Get an async AceEditor with automatical loading of specified ace modules.
 */
export default function AsyncAceEditor(
 props
) {
  const aceModules = props

  const placeholder = () => {
    const gutterBackground = '#e8e8e8'; // from ace-github theme
    return (
      <div
        style={{
          height: '100%',
        }}
      >
        <div
          style={{ width: 41, height: '100%', background: gutterBackground }}
        />
        <div className="ace_content" />
      </div>
    );
  }

  return AsyncEsmComponent(async () => {
    const { default: ReactAceEditor } = await import('react-ace');
    await Promise.all(aceModules.map(x => aceModuleLoaders[x]()));

    const inferredMode =
      aceModules.find(x => x.startsWith('mode/'))?.replace('mode/', '');
    const inferredTheme =
      aceModules.find(x => x.startsWith('theme/'))?.replace('theme/', '');
    return forwardRef(
      function ExtendedAceEditor(
        {
          keywords,
          mode = inferredMode,
          theme = inferredTheme,
          tabSize = 2,
          defaultValue = '',
          ...props
        },
        ref,
      ) {
        if (keywords) {
          const langTools = acequire('ace/ext/language_tools');
          const completer = {
            getCompletions: (
              editor,
              session,
              pos,
              prefix,
              callback
            ) => {
              // If the prefix starts with a number, don't try to autocomplete
              if (!Number.isNaN(parseInt(prefix, 10))) {
                return;
              }
              if ((session.getMode()).$id === `ace/mode/${mode}`) {
                callback(null, keywords);
              }
            },
          };
          langTools.setCompleters([completer]);
        }
        return (
          <ReactAceEditor
            ref={ref}
            mode={mode}
            theme={theme}
            tabSize={tabSize}
            defaultValue={defaultValue}
            {...props}
          />
        );
      },
    );
  }, placeholder);
}

// export const SQLEditor = AsyncAceEditor([
//   'mode/sql',
//   'theme/github',
//   'ext/language_tools',
//   'ext/searchbox',
// ]);

export const FullSQLEditor = AsyncAceEditor(
  ['mode/sql', 'theme/github', 'ext/language_tools', 'ext/searchbox']
);

// export const MarkdownEditor = AsyncAceEditor([
//   'mode/markdown',
//   'theme/textmate',
// ]);

// export const TextAreaEditor = AsyncAceEditor([
//   'mode/markdown',
//   'mode/sql',
//   'mode/json',
//   'mode/html',
//   'mode/javascript',
//   'theme/textmate',
// ]);

// export const CssEditor = AsyncAceEditor(['mode/css', 'theme/github']);

// export const JsonEditor = AsyncAceEditor(['mode/json', 'theme/github']);

// /**
//  * JSON or Yaml config editor.
//  */
// export const ConfigEditor = AsyncAceEditor([
//   'mode/json',
//   'mode/yaml',
//   'theme/github',
// ]);
